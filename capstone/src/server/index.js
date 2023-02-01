// dependencies
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
// const fetch = require('node-fetch');

// hide api key
const dotenv = require('dotenv');
dotenv.config();
const apiKeyWeather = process.env.apiKey;
// var hideAPI = new meaningCloud({
//     application_key: process.env.apiKey
// });

// instance of the app
const app = express();

// cors for cross origin allowance
app.use(cors());

// middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// initialize the main project folder - dist
app.use(express.static('src/client/views/index.html'));

// set up port
const port = 8080;

// setup local server
app.listen(port, listening);
function listening() {
    console.log(`server running on localhost ${port}`);
}

// set up empty data object
data = [];

// addData function 
function addData(request, response) {
    let newData = request.body;
    newEntry = {
      timeToTrip: newData.timeToTrip,
      depDate: newData.depDate,
      returnInfo: newData.returnInfo,
      tripLength: newData.tripLength,
      date: newData.date,
      time: newData.time,
      name: newData.name,
      countryName: newData.countryName,
      lat: newData.lat,
      lng: newData.lng,
      timezone: newData.timezone,
      temp: newData.temp,
      summary: newData.summary,
      picture: newData.webformatURL,
    };
    data.push(newEntry);
    response.send(data);
};

// route for addData
app.post("/city", addData);

// weather route
app.get("/weatherKey", function (request, response) {
    let key = data.length - 1;
    let latitude = data[key].lat;
    let longitude = data[key].lng;
    let time = data[key].time;
    const baseURL = `https://api.meaningcloud.com/documentstructure-1.0/${apiKeyWeather}/${latitude},${longitude},${time}`;
    response.send({ urlVal: baseURL });
});

// picture route
app.get("/pictureKey", function (request, response) {
    let key = data.length - 1;
    let name = data[key].name;
    let place = encodeURIComponent(name);
    const baseURL = `https://pixabay.com/api/?key=${apiKeyPic}&q=${place}`;
    response.send({ urlVal: baseURL });
});

// coordinates route
app.get("/locationKey", function (request, response) {
    let key = data.length - 1;
    let name = data[key].name;
    let place = encodeURIComponent(name);
    const baseURL = `${apiKeyPic}&q=${place}`;
    response.send({ urlVal: baseURL });
});

// get req
app.get("/all", function (request, response) {
    response.send(data);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});

app.post('/', async (req, res) => {
    const baseURL = 'https://api.meaningcloud.com/documentstructure-1.0';
    // const lang = 'en';
    const apiUrl = `${baseURL}key=${apiKey}&url=${req.body.formContent}`;
    const response = await fetch(apiUrl);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});


