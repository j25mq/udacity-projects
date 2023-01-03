// create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* global Variables */
const apiKey = '<fc02e4422a612704c6e197f245b4eb6c>&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const { request } = require("http");

// event listener added - behaviour when 'generate' button is clicked
let generate = document.getElementById('generate').addEventListener('click', performAction);
const performAction = (e)=>{
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeatherData(`${baseURL}${zipcode}${apiKey}`).then(function(data){
        postData("http://localhost:5000", {
            temp: data.main.temp,
            data: newDate,
            content: feelings,
        }).then(updateUI);
    });
};

// data weather 
const getWeatherData = async (url) => {
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};
  
// get route that returns the projectData object to server code 
const getData = async () => {
    const request = await fetch(url, { 
        method: 'GET', 
    });
    try {
        const allData = await request.json()
        document.getElementById('temp').innerHTML = Math.round(allData.temp) + 'degrees';
        document.getElementById('content').innerHTML = allData.feel;
        document.getElementById('date').innerHTML = allData.date;
        return allData;
    } catch (error) {
        console.log('error', error);
        document.getElementById('content').innerHTML = 'Unable to get data from server.';
    }
}

// post route that adds incoming data 
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5000/",
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};
  
// dynamic ui
const updateUI = async () => {
    const request = await fetch("http://localhost:5000/all");
    try {
        const allData = await request.json();
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById("temp").innerHTML = allData.temp;
        document.getElementById("content").innerHTML = allData.content;
    } catch (error) {
        console.log("error", error);
    }
};
