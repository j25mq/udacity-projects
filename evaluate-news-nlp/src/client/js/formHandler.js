const fetch = require('node-fetch');
const results = document.getElementById('results');

const handleSubmit = (event) => {
    event.preventDefault();
  
    // check what text was put into the form field
    let formText = document.querySelector('.url-input').value;
  
    if (Client.checkUrl(formText)) {
        postData('http://localhost:3000/article', formText);
    } else {
        displayResults(null);
    }
};

const postData = async (url, formUrl) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formUrl }),
    })
    .then((res) => res.json())
    .then((data) => displayResults(data));
};

const displayResults = (data) => {
    if (data) {
        results.innerHTML = `
        <div id="polarity">Polarity: ${describePolarityScore(data.score_tag)}</div>
        <div id="agreement">Agreement: ${data.agreement}</div>
        <div id="subjectivity">Subjectivity: ${data.subjectivity}</div>
        <div id="confidence">Confidence: ${data.confidence}</div>
        <div id="irony">Irony: ${data.irony}</div>
        `;
    } else {
        results.innerHTML = `
            <div id="error"> It seems like the URL you entered is invalid. Please check the URL and try again</div>
        `;
    }
};
  
const describePolarityScore = (score) => {
    let polarity = '';
    switch (score) {
        case 'P+':
            polarity = 'Strong Positive';
            break;
        case 'P':
            polarity = 'Positive';
            break;
        case 'NEU':
            polarity = 'Neutral';
            break;
        case 'N':
            polarity = 'Negative';
            break;
        case 'N+':
            polarity = 'Strong Negative';
            break;
        case 'NONE':
            polarity = 'None';
            break;
    }
    return polarity;
};
  
export { handleSubmit, describePolarityScore };