const Hangman = function(word, guesses){
    this.word = word.toLowerCase().split(''),
    this.guesses = guesses
    this.guessedLetters = ['c', 'e'];
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

const h1 = new Hangman('CAT', 2);
const h2 = new Hangman('bhayandar', 5);

console.log(h1.getPuzzle());
// console.log(h2);