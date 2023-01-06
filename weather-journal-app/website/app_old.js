// get route that returns the projectData object to server code 
const getData = async () => {
    const request = await fetch(url, { 
        method: 'GET'
    });
    try {
        const allData = await request.json();
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
const postData = async(url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};
  
// dynamic ui
const updateUI = async () => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        document.getElementById("date").innerHTML = allData.date;
        document.getElementById("temp").innerHTML = allData.temp;
        document.getElementById("content").innerHTML = allData.content;
    } catch (error) {
        console.log("error", error);
    }
};

postData(url, {
    temp: data.temp,
    data: newDate,
    content: feelings,
}).then(updateUI);