const fetch = require('node-fetch');
const results = document.getElementById('results');

const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formContent = document.querySelector('.input').value;
    if (validateURL(formContent)) {
        postData('http://localhost:8080', formContent);
    } else {
        alert('An error occurred. Try again.');
        return;
    }
    displayResults(data);
};

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};
const postData = fetch("https://api.meaningcloud.com/documentstructure-1.0", requestOptions)
    .then(response => ({
        status: response.status, 
        body: response.json()
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch(error => console.log('error', error));


// display results in results section
const displayResults = (data) => {
    if (data) {
        results.innerHTML = `
        <div id="polarity">Polarity: ${describePolarity(data.score_tag)}</div>
        <div id="agreement">Agreement: ${data.agreement}</div>
        <div id="subjectivity">Subjectivity: ${data.subjectivity}</div>
        <div id="confidence">Confidence: ${data.confidence}</div>
        <div id="irony">Irony: ${data.irony}</div>
        `;
    } else {
        alert('An error occurred. Try again.');
        return;
    }
};

// polarity description according to meaningcloud
const describePolarity = (score) => {
    let polarity = '';
    switch (score) {
        case 'P':
            polarity = 'Positive';
            break;
        case 'NEU':
            polarity = 'Neutral';
            break;
        case 'N':
            polarity = 'Negative';
            break;
        case 'NONE':
            polarity = 'None';
            break;
    }
    return polarity;
};

export { handleSubmit, describePolarity };