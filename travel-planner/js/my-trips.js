const myTripsStr = localStorage.getItem('my-trips');
const myTrips = eval(`(${myTripsStr})`);

myTrips.forEach((myTrip, i) => {
    const app2 = document.getElementById('app2');

    // trip card
    const tripCard = document.createElement('div');
    tripCard.setAttribute('class', 'appContent');

    // display nb of trips
    document.getElementById('nbOfTrips').innerHTML = `You currently have <b>${i+1}</b> trip(s) planned.`;

    // nb of trip
    const tripNbOutput = document.createElement('p');
    tripNbOutput.setAttribute('class', 'tripNbOutput');
    const svgtripNb = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-journal-bookmark" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
    </svg>`;
    tripNbOutput.innerHTML = `${svgtripNb} My trip <b>#${i+1}</b>`;
    tripCard.appendChild(tripNbOutput);

    // location holder
    const holder1 = document.createElement('div');
    holder1.setAttribute('class', 'holder');
    const locationOutput = document.createElement('p'),
        location = myTrip.location;
    const svgLocation = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>`;
    locationOutput.innerHTML = `${svgLocation} Location: <b>${location}</b>`;
    holder1.appendChild(locationOutput);
    tripCard.appendChild(holder1);

    // date holder
    const holder2 = document.createElement('div');
    holder2.setAttribute('class', 'holder');
    const dateOuput = document.createElement('p'),
        date = myTrip.date;
    const svgDate = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
    </svg>`;
    if (date) {
        dateOuput.innerHTML = `${svgDate} Departure date: ${date}.`;
    } else {
        dateOuput.innerHTML = `${svgDate} Departure date: Invalid date.`;
    }
    holder2.appendChild(dateOuput);
    tripCard.appendChild(holder2);

    // nb of days away holder
    const holder3 = document.createElement('div');
    holder3.setAttribute('class', 'holder');
    const daysAwayOuput = document.createElement('p'),
        daysAway = myTrip.daysAway;
    const svgDaysAway = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>`;
    if (daysAway < 0) { // date before today's date is handled as an error
        daysAwayOuput.innerHTML = `Invalid date.`;
    } else if (daysAway === 0 ) { // date entered displayed as today
        daysAwayOuput.innerHTML = `${svgDaysAway} Your trip is <b>today</b>.`;
    } else if (daysAway === 1 ) { // date entered displayed as tomorrow or in 1 day
        daysAwayOuput.innerHTML = `${svgDaysAway} Your trip is <b>tomorrow</b>.`;
    } else if (daysAway > 1) { // date entered displayed as the nb of days btw today's date and date entered
        daysAwayOuput.innerHTML = `${svgDaysAway} Your trip is <b>${daysAway}</b> days away.`;
    };
    holder3.appendChild(daysAwayOuput);
    tripCard.appendChild(holder3);

    // flight holder
    const holder4 = document.createElement('div');
    holder4.setAttribute('class', 'holder');
    const flightOutput = document.createElement('p'),
        flight = myTrip.flight;
    const svgFlight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16">
        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
    </svg>`;
    flightOutput.innerHTML = `${svgFlight} Flight info: ${flight}`;
    holder4.appendChild(flightOutput);
    tripCard.appendChild(holder4);

    // hosting holder
    const holder5 = document.createElement('div');
    holder5.setAttribute('class', 'holder');
    const hostingOutput = document.createElement('p'),
        hosting = myTrip.hosting;
    const svgHosting = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
    </svg>`;
    hostingOutput.innerHTML = `${svgHosting} Hosting info: ${hosting}`;
    holder5.appendChild(hostingOutput);
    tripCard.appendChild(holder5);

    // notes holder
    const holder6 = document.createElement('div');
    holder6.setAttribute('class', 'holder');
    const notesOutput = document.createElement('p'),
        notes = myTrip.notes;
    const svgNotes = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky" viewBox="0 0 16 16">
        <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z"/>
    </svg>`;
    notesOutput.innerHTML = `${svgNotes} Notes: ${notes}`;
    holder6.appendChild(notesOutput);
    tripCard.appendChild(holder6);

    // delete trip
    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('id', 'delete');
    deleteBtn.setAttribute('trip-id', myTrip.id);
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>`;
    tripCard.appendChild(deleteBtn);
    
    deleteBtn.addEventListener('click', function() {
        tripCard.remove();
        removeTripFromMemory(this.getAttribute('trip-id'));
    });

    app2.appendChild(tripCard);
});

// remove the trip according to its id (value)
const arrayRemoveFromKeyValue = (arr, key, value) => {
    let idxToBeRemoved = null;
    
    arr.forEach((item, idx) => {
        if (item[key].toString() === value) {
            idxToBeRemoved = idx;
        }
    });

    if (idxToBeRemoved !== null) {
        arr.splice(idxToBeRemoved, 1);
    }
    return arr;
};

// remove trip from memory
const removeTripFromMemory = (tripId) => {
    // read from memory
    const tripsStr = localStorage.getItem('my-trips');
    const trips = eval(`(${tripsStr})`);

    // remove the trip
    const tripsUpdated = arrayRemoveFromKeyValue(trips, 'id', tripId);

    // update list to memory
    localStorage.setItem('my-trips', JSON.stringify(tripsUpdated));

    // update trips count
    const n = tripsUpdated.length;
    const target = document.querySelector('#nbOfTrips b');
    target.innerHTML = `${n}`;
};
