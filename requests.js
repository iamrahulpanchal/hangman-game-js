// HTTP Request

const getPuzzle = (noOfWords) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount='+noOfWords);
    request.send(); 
    
    request.addEventListener('readystatechange', (e) => {
        // console.log(e);
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState === 4) {
            reject(`Some Error Occurred!`);
        }
    });
});
