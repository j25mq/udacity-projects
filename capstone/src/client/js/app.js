// global Variables
const geoCodeURL = "http://api.geonames.org/search?";
const geoMyUsername = "&username=juliemqd";
const apiKey = 'b1b362bc998df24e677314d13dcb9514&units=metric';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

// update ui
const updateUI = async() => {
    const request = await fetch("http://localhost:8080");
    try {
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const weather = document.getElementById('weather').value;
        const flight = document.getElementById('flightInfo').value;
        const hosting = document.getElementById('hostingInfo').value;
        const notes = document.getElementById('notes').value;

        // location output - app2
        if (location) {
            const msgForLocation = ` ${location}`;
            const targetForLocation = document.getElementById('locationOutput');
            targetForLocation.innerHTML = `<p>${msgForLocation}</p>`;
            console.log(`Trip to: ${location}.`);
        } else {
            window.alert('Please enter a location.');
            targetForLocation.innerHTML = `<p>Please enter a location.</p>`;
            console.log('Location not entered.');
        };

        // date output - app2
        if (date) {
            // date entered output
            const msgForDate = `${date}`;
            const targetForDate = document.getElementById('dateOutput');
            targetForDate.innerHTML = `<p>${msgForDate}</p>`;
            console.log(`Date of departure: ${date}.`);

            // calculate number of days away from a date
            function getNumberOfDays(start, end) {
                const date1 = start;
                date1.setHours(0,0,0,0);
                const date2 = new Date(end);
                // console.log(date2.getFullYear(), date2.getMonth() + 1, date2.getDate());
                const oneDay = 1000 * 60 * 60 * 24;
                const diffInTime = date2.getTime() - date1.getTime();
                const diffInDays = Math.round(diffInTime / oneDay);
                return diffInDays;
            };

            daysAway = getNumberOfDays(new Date(), date);
            const targetForNbDays = document.getElementById('nbOfDaysOutput');

            if (daysAway < 0) { // date before today's date is handled as an error
                targetForNbDays.innerHTML = `<p>It seems that the date entered is before today's date. Enter a valid date.</p>`;
                targetForDate.innerHTML = `<p>Invalid date</p>`;
                console.log(`It seems that the date entered is before today's date. Enter a valid date.`);
            } else if (daysAway === 0 ) { // date entered displayed as today
                targetForNbDays.innerHTML = `<p>Your trip is <b>today</b></p>`;
                console.log(`Your trip is today.`);
            } else if (daysAway === 1 ) { // date entered displayed as tomorrow or in 1 day
                targetForNbDays.innerHTML = `<p>Your trip is <b>tomorrow</b></p>`;
                console.log(`Your trip is tomorrow.`);
            } else if (daysAway > 1) { // date entered displayed as the nb of days btw today's date and date entered
                targetForNbDays.innerHTML = `<p>Your trip is <b>${daysAway}</b> days away</p>`;
                console.log(`Your trip is ${daysAway} days away.`);                
            };
        } else {
            window.alert('Please enter a date.');
            console.log('No date has been entered.');
        };

        // weather output - app2
        if (weather) {
            const msgForFlight = `${flight}`;
            const targetForFlight = document.getElementById('flightOutput');
            targetForFlight.innerHTML = `<p>${msgForFlight}</p>`;
            console.log(`Flight information: ${flight}.`);  
        };
            
        // flight output - app2
        if (flight) {
            const msgForFlight = `${flight}`;
            const targetForFlight = document.getElementById('flightOutput');
            targetForFlight.innerHTML = `<p>${msgForFlight}</p>`;
            console.log(`Flight information: ${flight}.`);  
        };

        // hosting output - app2
        if (hosting) {
            const msgForHosting = `${hosting}`;
            const targetForHosting = document.getElementById('hostingOutput');
            targetForHosting.innerHTML = `<p>${msgForHosting}</p>`;
            console.log(`Hosting information: ${hosting}.`);  
        };

        // notes output - app2
        if (notes) {
            const msgForNotes = `${notes}`;
            const targetForNotes = document.getElementById('notesOutput');
            targetForNotes.innerHTML = `<p>${msgForNotes}</p>`;
            console.log(`Notes: ${notes}.`);  
        };

        // displays buttons only when trip info have been added
        const targetForBtns = document.getElementById('btns');
        targetForBtns.innerHTML = `
            <button id="delete" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        `;
        
        // delete trip
        const deleteTrip = (e)=>{
            document.getElementById('app2').innerHTML="";
        };
        let deleteBtn = document.getElementById('delete').addEventListener('click', deleteTrip);
        
    } catch (error) {
        console.log("error", error);
    }
};

let generate = document.getElementById('generate').addEventListener('click', updateUI);

// button disabled til location entered
function success() {
    if (document.getElementById('location').value==="") { 
        document.getElementById('generate').disabled = true; 
    } else {
        document.getElementById('generate').disabled = false;
    };
};

// get data weather 
const getCityInfo = async (url) => {
    console.log("(getCityInfo) Calling url=", url);
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log("(getCityInfo) Receiving data=", data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

// get weather info from weather bit
const getWeather = async (weatherBit) => {
    const request =  await fetch(weatherBit);
    try {
        const data = await request.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

// get city info from geonames
const getCity = async (geoCodeURL, city, geoCodeUsername) => {
    const request =  await fetch(geoCodeURL + city + geoCodeUsername);
    try {
        const data = await request.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

// get image from pixabay
const getPixabyUrl = async () => {
    const request = await fetch("http://localhost:8080/pictureKey");
    try {
        const data = await request.json();
    } catch (error) {
        console.log("error", error);
    }
};
const getImage = async (pixabay) => {
    const request =  await fetch(pixabay);
    try {
        const data = await request.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
};


// edit trip
// const editTrip = (e)=>{
//     document.getElementById('app2').innerHTML="";
// };
// <button id="edit" type="submit">
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
//     </svg>
// </button>
// let edit = document.getElementById('edit').addEventListener('click', editTrip);