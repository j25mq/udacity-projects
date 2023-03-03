// buttons
const addTrip = document.getElementById('generate');

const fetchInput = async() => {
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    if (!date) {
        window.alert(`Please enter a date.`);
        return;
    }

    const flight = document.getElementById('flightInfo').value;
    const hosting = document.getElementById('hostingInfo').value;
    const notes = document.getElementById('notes').value;

    const myTrip = {};

    // set ID
    myTrip.id = Date.now();

    // location input
    myTrip.location = location;

    // date input
    function getNumberOfDays(start, end) {
        const date1 = start;
        date1.setHours(0,0,0,0);
        const date2 = new Date(end);
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
    };

    const daysAway = getNumberOfDays(new Date(), date);

    if (daysAway < 0) { // date before today's date is handled as an error
        window.alert(`It seems that the date entered is before todays' date. Please enter a valid date.`);
    };

    myTrip.date = date;
    myTrip.daysAway = daysAway;

    // flight input
    myTrip.flight = flight;

    // hosting input
    myTrip.hosting = hosting;

    // notes input
    myTrip.notes = notes;
    
    // append the last trip to the existing list of trips
    const myTripsStr = localStorage.getItem('my-trips');

    let myTrips;

    if (myTripsStr) {
        myTrips = eval(`(${myTripsStr})`);
    } else {
        myTrips = [];
    };

    console.log("myTrip", myTrip);
    
    myTrips.push(myTrip);
    console.log("myTrips", myTrips);
    localStorage.setItem('my-trips', JSON.stringify(myTrips));

    const newTripAdded = document.getElementById('newTripAdded');
    newTripAdded.innerHTML = `A new trip to <b>${location}</b> planned on <b>${date}</b> has been added to <a href="my-trips.html">your trips</a>.`;
};

// button 'add trip' disabled until location entered
function success() {
    if (document.getElementById('location').value==="") { 
        document.getElementById('generate').disabled = true; 
    } else {
        document.getElementById('generate').disabled = false;
    };
};

const loadEvents = () => {
    addTrip.addEventListener('click', fetchInput);
};

loadEvents();