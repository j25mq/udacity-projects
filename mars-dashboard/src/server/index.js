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
// fetch data for Curiosity rover
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

// app.get("/curiosity", async (req, res) => {
//     try {
//         const curiosityData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${process.env.API_KEY}`)
//         .then((res) => res.json())
//         res.send({curiosityData});
//     } catch (err) {
//         console.log("error", err);
//     };
// });

// fetch data for Opportunity rover
// app.get("/opportunity", async (req, res) => {
//     try {
//         const opportunityData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=${process.env.API_KEY}`)
//         .then((res) => res.json())
//         res.send({opportunityData});
//     } catch (err) {
//         console.log("error", err);
//     };
// });

// fetch data for Spirit rover
// app.get("/spirit", async (req, res) => {
//     try {
//         const spiritData = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=${process.env.API_KEY}`)
//         .then((res) => res.json())
//         res.send({spiritData});
//     } catch (err) {
//         console.log("error", err);
//     };
// });

// port
const port = 3000;
app.listen(port, () => console.log(`Mars Dashboard app listening on port ${port}.`));

// example API call
app.get('/apod', async (req, res) => {
    try {
        let image = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
        .then(res => res.json())
        res.send({ image })
    } catch (err) {
        console.log('error:', err);
    }
});