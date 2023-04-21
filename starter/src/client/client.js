// store object - immutable object
let store = Immutable.Map({
    rovers: "noInfoAvailable",
    rover: Immutable.List(["no"])
});

// add our markup to the page
const root = document.getElementById('root');

// update storage
const updateStore = (store, newState) => {
    store = Object.assign(store, newState);
    render(root, store);
};

// assign app value/state to root
const render = async (root, state) => {
    root.innerHTML = App(state);
};

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    render(root, store)
})

// create app content
const App = (state) => {
    if (state.getIn(['rovers']) == "noInfoAvailable") {
        return `<section>
            <h1>Mars Dashboard</h1>
            This section is empty
        </section>`;
    } else {
        return `
            <section>
                <h1>Mars Dashboard</h1>
                ${addTabs()}
                ${roverSelected(state, displayRoverInfo)}
                ${roverSelected(state, displayRoverImg)}
            </section>
        `;
    };
};

// fetch rovers data
const fetchRoversData = (state, id) => {  
    let { rovers } = state;
    const data = fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((rovers) => updateStore(state, { rovers }))
      .catch(function() {
        console.log("error");
    })
};

// create tabs to switch between rovers
const addTabs = () => {
    return `
        <section id="tabs">
            <button id="curiosity" onclick="fetchRoversData(store, this.id)">Curiosity Rover</button>
            <button id="opportunity" onclick="fetchRoversData(store, this.id)">Opportunity Rover</button>
            <button id="spirit" onclick="fetchRoversData(store, this.id)">Spirit Rover</button>
        </section>
    `;
}

// get selected rover info 
const selectedRover = (state, displayRoverInfo) => {
    let roverDataArr = []; // empty array to store the selected rover
    // if app state = selected rover => display its info + img
    if (state.getIn([
            "rovers",
            "curiosityRoverData",
            "latest_photos"
        ])) {
        roverDataArr = state.getIn([
            "rovers",
            "curiosityRoverData",
            "latest_photos"
        ]);
    } else if (state.getIn([
            "rovers",
            "opportunityRoverData",
            "latest_photos"
        ])) {
        roverDataArr = state.getIn([
            "rovers",
            "opportunityRoverData",
            "latest_photos"
        ]);
    } else if (state.getIn([
            "rovers",
            "spiritRoverData",
            "latest_photos"
        ])) {
        roverDataArr = state.getIn([
            "rovers",
            "spiritRoverData",
            "latest_photos"
        ]);
    }
    const selectedRoverData = roverDataArr.map((rov) => {
        const roverInfo = {};
        {(roverInfo["name"] = rov.rover.name), // get rover name
            (roverInfo["launchDate"] = rov.rover.launch_date), // get rover launching date
            (roverInfo["landingDate"] = rov.rover.landing_date), // get rover landing date
            (roverInfo["status"] = rov.rover.status), // get rover status
            (roverInfo["earthDate"] = rov.earthDate), // get rover img date
            (roverInfo["photos"] = rov.img_src);}; // get rover img
        return roverInfo;
    });
    return displayRoverInfo(selectedRoverData);
};

// display rover info
const displayRoverInfo = (rov) => {
    return `
        <div id="roversInfoContainer">
            <p>Rover Name: ${rov.name}</p>
            <p>Launching Date: ${rov.landing_date}</p>
            <p>Landing Date: ${rov.launch_date}</p>
            <p>Rover Status: ${rov.status}</p>
        </div>
    `;
};

// display rover img
const displayRoverImg = (rov) => {
    return `
        <div=id"roversImgContainer">
            <p>Latest Pictures Date :${rov.earthDate}</p>
            ${rov.map(r => `<img src="${r.photos}"></img>`)} 
        </div>
    `;
};

// Pure function that renders conditional information -- THIS IS JUST AN EXAMPLE, you can delete it.
// const Greeting = (name) => {
//     if (name) {
//         return `
//             <h1>Welcome, ${name}!</h1>
//         `
//     }
//     return `
//         <h1>Hello!</h1>
//     `
// }

// Example of a pure function that renders infomation requested from the backend
// const ImageOfTheDay = (apod) => {

    // If image does not already exist, or it is not from today -- request it again
    // const today = new Date()
    // const photodate = new Date(apod.date)
    // console.log(photodate.getDate(), today.getDate());

    // console.log(photodate.getDate() === today.getDate());
    // if (!apod || apod.date === today.getDate() ) {
    //     getImageOfTheDay(store)
    // }

    // check if the photo of the day is actually type video!
//     if (apod.media_type === "video") {
//         return (`
//             <p>See today's featured video <a href="${apod.url}">here</a></p>
//             <p>${apod.title}</p>
//             <p>${apod.explanation}</p>
//         `)
//     } else {
//         return (`
//             <img src="${apod.image.url}" height="350px" width="100%" />
//             <p>${apod.image.explanation}</p>
//         `)
//     }
// }

// Example API call
// const getImageOfTheDay = (state) => {
//     let { apod } = state

//     fetch(`https://r950324c957034xreactr0lcusuk-3000.udacity-student-workspaces.com/apod`)
//         .then(res => res.json())
//         .then(apod => updateStore(store, { apod }))

//     return data
// }