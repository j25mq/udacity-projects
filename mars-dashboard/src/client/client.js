// store object - immutable object
let store = Immutable.Map({
    rovers: 'noInfoAvailable',
    rover: ''
});

// add our markup to the page
const root = document.getElementById('root');

// update storage
const updateStore = (state, newState) => {
    store = store.set(state, newState);
    render(root, store);
};

// assign app value/state to root
const render = async (root, state) => {
    root.innerHTML = App(state);
};

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    render(root, store);
    root.innerHTML = `
        <header>
            <a href="/">Mars Dashboard</a>
        </header>
        <div>
            ${addTabs()}
        </div>
        <div id="homepage">
            <img src="media/bg.jpg" alt="bg-picture">
            <p id="homepage-text">Mars Dashboard Homepage</p>
        </div>
    `;
});

// create app content
const App = (state) => {
    return `
        <header>
            <a href="/">Mars Dashboard</a>
        </header>
        <div>
            ${addTabs()}
            ${displayRoverInfo()}
            ${displayRoverImg()}
        </div>
    `;
};

// fetch rovers data
const fetchRoversData = (state, id) => {
    const data = fetch(`http://localhost:3000/${id}`)
        .then((res) => res.json())
        .then((rovers) => updateStore('rover', rovers))
        .catch(function (e) {
        console.log(e);
    });
};
// fetchRoversData(store, 'curiosity');

// create tabs to switch between rovers
const addTabs = () => {
  return `
        <section id="tabs">
            <button id="curiosity" onclick="fetchRoversData(store, this.id)">Curiosity Rover</button>
            <button id="opportunity" onclick="fetchRoversData(store, this.id)">Opportunity Rover</button>
            <button id="spirit" onclick="fetchRoversData(store, this.id)">Spirit Rover</button>
        </section>
    `;
};

// display rover info
const displayRoverInfo = () => {
    return `
        <div id="roversInfoContainer">
            <p>Rover Name: ${
            store.get('rover') &&
            store.get('rover').latest_photos[0].rover.name
            }</p>
            <p>Launching Date: ${
            store.get('rover') &&
            store.get('rover').latest_photos[0].rover.launch_date
            }</p>
            <p>Landing Date: ${
            store.get('rover') &&
            store.get('rover').latest_photos[0].rover.landing_date
            }</p>
            <p>Rover Status: ${
            store.get('rover') &&
            store.get('rover').latest_photos[0].rover.status
            }</p>
        </div>
    `;
};

// display rover img
const displayRoverImg = () => {
    return `
        <div=id"roversImgContainer">
            <p>Latest Pictures Date: ${
            store.get('rover') &&
            store.get('rover').latest_photos[0].earth_date
            }</p>
            ${
            store.get('rover') &&
            store
                .get('rover')
                .latest_photos.map((r) => `<img src="${r.img_src}"></img>`)
            } 
        </div>
    `;
};