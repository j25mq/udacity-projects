// create a new date instance dynamically with JS
let d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let newDate = `${day}-${month}-${year}`;

/* global Variables */
const apiKey = 'b1b362bc998df24e677314d13dcb9514';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

// event listener added - behaviour when 'generate' button is clicked
const performAction = (e)=>{
    const zipCode = document.getElementById('zip').value;
    if (!zipCode) {
        alert("You must enter a zip code!");
        return;
    }
    
    const feelings = document.getElementById('feelings').value;
    const fullUrl = `${baseURL}${zipCode}&appid=${apiKey}`;
    
    getWeatherData(fullUrl).then(function(data){
        console.log("(getWeatherData.then) Processing...", data);
    
        //date output
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let newDate = `${day}-${month}-${year}`;
        let msgForDate = `Today's date: ${newDate}.`;
        const targetForDate = document.getElementById('date');
        targetForDate.innerHTML = `<p>${msgForDate}</p>`;

        // temp output
        const temp = data.main.temp;
        const msgForTemp = `Forecast temperature is: ${temp}.`;
        const targetForTemp = document.getElementById('temp');
        targetForTemp.innerHTML = `<p>${msgForTemp}</p>`;

        // feel output - content
        if (feelings) {
            const msgForFeel = `User's feelings: ${feelings}.`;
            const targetForFeel = document.getElementById('content');
            targetForFeel.innerHTML = `<p>${msgForFeel}</p>`;
        }

    })
    .catch(() => {
        alert("Sorry, the zip code you entered seems invalid. Try again.");
    });
};

let generate = document.getElementById('generate').addEventListener('click', performAction);

// get data weather 
const getWeatherData = async (url) => {
    console.log("(getWeatherData) Calling url=", url);
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log("(getWeatherData) Receiving data=", data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};
