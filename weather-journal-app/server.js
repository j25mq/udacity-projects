// setup empty JS object to act as endpoint for all routes
projectData = {};

// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// instance of the app
const app = express();

// middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// initialize the main project folder
app.use(express.static('website'));

// set up port
const port = 5000;

// setup local server
app.listen(port, listening);
function listening() {
    console.log(`server running on localhost ${port}`);
}

// get route that returns projectData object in server code
app.get('/all', (req, res)=>{
    res.send(projectData);
    console.log(projectData);
});

// post route that addds incoming data to ProjectData
app.post('/addData', (req,res) => {
    const data = {
        temperature: req.body.temp,
        date: req.body.date,
        userInput: req.body.content
    };
    projectData.push(data);
    res.send(projectData);
});