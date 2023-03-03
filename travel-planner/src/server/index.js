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
const apiKey = process.env.apiKey;

// instance of the app
const app = express();

// cors for cross origin allowance
app.use(cors());

// middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// initialize the main project folder - dist
app.use(express.static('dist'));

// set up port
const port = 8080;

// setup local server
app.listen(port, listening);
function listening() {
    console.log(`server running on localhost ${port}`);
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
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


