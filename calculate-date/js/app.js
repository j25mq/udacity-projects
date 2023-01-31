const updateUI = (e)=>{
    const date = document.getElementById('date').value;
    const targetForNbDays = document.getElementById('nbOfDaysOutput');
    todaysDate = new Date();
    let day = todaysDate.getDate();
    let month = todaysDate.getMonth() + 1;
    let year = todaysDate.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    console.log(currentDate);

    if (date) {
        // date entered output
        const msgForDate = `Date entered: ${date}.`;
        const targetForDate = document.getElementById('dateOutput');
        targetForDate.innerHTML = `<p>${msgForDate}</p>`;
        console.log(`Date entered: ${date}.`);

        // calculate number of days away from a date
        function getNumberOfDays(start, end) {
            const date1 = new Date(start);
            const date2 = new Date(end);
            const oneDay = 1000 * 60 * 60 * 24;
            const diffInTime = date2.getTime() - date1.getTime();
            const diffInDays = Math.round(diffInTime / oneDay);
            return diffInDays;
        }

        daysAway = getNumberOfDays(new Date(), date);

        if (daysAway < 0) { // date before today's date is handled as an error
            targetForNbDays.innerHTML = `<p>It seems that the date entered is before today's date. Enter a valid date.</p>`;
            console.log(`It seems that the date entered is before today's date. Enter a valid date.`);
        } else if (daysAway === 0 ) { // date entered displayed as today
            targetForNbDays.innerHTML = `<p>Your trip is <b>today</b>.</p>`;
            console.log(`Your trip is today.`);
        } else if (daysAway === 1 ) { // date entered displayed as tomorrow or in 1 day
            targetForNbDays.innerHTML = `<p>Your trip is <b>tomorrow</b>.</p>`;
            console.log(`Your trip is tomorrow.`);
        } else if (daysAway > 1) { // date entered displayed as the nb of days btw today's date and date entered
            targetForNbDays.innerHTML = `<p>Your trip is <b>${daysAway}</b> days away.</p>`;
            console.log(`Your trip is ${daysAway} days away.`);                
        };
    } else {
        targetForNbDays.innerHTML = `<p>Please enter a date.</p>`;
        console.log('No date has been entered');
    };
};

let generate = document.getElementById('generate').addEventListener('click', updateUI);
