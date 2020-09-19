const h1 = new Hangman('CAT', 2);
const h2 = new Hangman('bhayandar', 5);

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

puzzleEl.textContent = h1.getPuzzle();
guessesEl.textContent = h1.getStatusMsg();

window.addEventListener('keypress', (e) => {
    const guess = e.key.toLowerCase();
    h1.guessLetter(guess);
    puzzleEl.textContent = h1.getPuzzle();
    guessesEl.textContent = h1.getStatusMsg();
});

const noOfWords = 2;
getPuzzle(noOfWords, (error, word) => {
    if(error){
        console.log(`Error : ${error}`);
    } else {
        console.log(word);
    }
});

const countryCode = "IN";
getCountryName(countryCode, (error, countryName) => {
    if (error) {
        console.log(`Error : ${error}`);
    } else {
        console.log(countryName);
    }
});
