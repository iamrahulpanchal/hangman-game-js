// HTTP Request

const getPuzzle = (noOfWords, callback) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount='+noOfWords);
    request.send(); 
    
    request.addEventListener('readystatechange', (e) => {
        // console.log(e);
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('Bad Request', undefined);
        }
    });
}

const getCountryName = (countryCode, callback) => {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.eu/rest/v2/all');
    req.send();

    req.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            // console.log(data);
            filteredData = data.find((item) => {
                return item.alpha2Code === countryCode;
            });
            callback(undefined, filteredData.name);
        } else if (e.target.readyState === 4) {
            callback('Bad Request', undefined);
        }
    });
}

// const req = new XMLHttpRequest();
// req.open('GET', 'https://restcountries.eu/rest/v2/all');
// req.send();

// req.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//         filteredData = data.find((item) => {
//             return item.alpha2Code === "IN";
//         });
//         console.log(filteredData.name);
//     }
// });