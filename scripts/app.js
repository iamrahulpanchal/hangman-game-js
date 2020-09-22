let h1;

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {
    const guess = e.key.toLowerCase();
    h1.guessLetter(guess);
    render();
});

const render = () => {
    puzzleEl.textContent = h1.getPuzzle();
    guessesEl.textContent = h1.getStatusMsg();
}

const startGame = async () => {
    const puzzle = await getPuzzleAsync(2);
    h1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
// const noOfWords = 2;
// getPuzzleAsync(noOfWords).then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error : ${err}`);
// });

