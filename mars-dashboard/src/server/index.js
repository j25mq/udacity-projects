require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const path = require('path');
const immutable = require('immutable');

// dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client')));

// API calls
// fetch data for each rover based on their name
app.get('/:roverName', async (req, res) => {
    try {
        const data = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${req.params.roverName}/latest_photos?api_key=${process.env.API_KEY}`
        ).then((res) => res.json());
        res.send(data);
    } catch (err) {
        console.log('error', err);
    }
});

// port
const port = 3000;
app.listen(port, () => console.log(`Mars Dashboard app listening on port ${port}.`));

app.get('/', async (req, res) => {
    try {
        const data = await fetch(
        `https://api.nasa.gov`
        ).then((res) => res.json());
        res.send(data);
    } catch (err) {
        console.log('error', err);
    }
});