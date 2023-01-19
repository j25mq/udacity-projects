const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

const app = express();
app.use(cors());

// to use json
app.use(bodyParser.json());

// to use url encoded values
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});

app.post('/article', async (req, res) => {
    const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1?';
    const lang = 'en';
    const apiUrl = `${BASE_URL}key=${API_KEY}&lang=${lang}&url=${req.body.formUrl}`;
    const response = await fetch(apiUrl);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
