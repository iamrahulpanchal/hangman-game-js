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

const noOfWords = 3;
getPuzzle(noOfWords).then((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(`Error : ${err}`);
})
