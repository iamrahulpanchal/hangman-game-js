
const Hangman = function(word, guesses){
    this.word = word.toLowerCase().split(''),
    this.guesses = guesses
    this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = '';
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });
    return puzzle;
}

Hangman.prototype.guessLetter = function(guess){
    if(this.guesses > 0){
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);
        if(isUnique){
            this.guessedLetters.push(guess);
        }
        if(isUnique && isBadGuess){
            this.guesses--;
        }
    }
}

const h1 = new Hangman('CAT', 2);
const h2 = new Hangman('bhayandar', 5);

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

puzzleEl.textContent = h1.getPuzzle();

window.addEventListener('keypress', function(e){
    const guess = e.key.toLowerCase();
    h1.guessLetter(guess);
    puzzleEl.textContent = h1.getPuzzle();
    guessesEl.textContent = h1.guesses;
});