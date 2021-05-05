// Il computer deve generare 16 numeri casuali tra 1 e 100. x
// I numeri non possono essere duplicati. x
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

var bombs = [];
var attempts = [];
var maxAttempts = 84;

// generating 16 casual numbers between 1 and 100 (BOMBS)
while (bombs.length < 16) {
    var randomNumber = getRandomNumber(1, 100);

    // condition to verify and esclude duplicate elements in the array
    if (!isInArray(randomNumber, bombs)) {
        bombs.push(randomNumber)
    }
}
console.log("bombe",bombs);
// /BOMBS

// GAME
// player's chosen numbers
var gameOver = false;
while (attempts.length < maxAttempts && gameOver == false) {
    
    // adding player's numbers escluding strings, 0, and >100 inputs
    var playerNumber;
    do {
        playerNumber = parseInt(prompt("Enter a number between 1 and 100"));
    } while (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) 

    // condition to lose: gameOver turns true when playerNumber is in the array "bombs"
    if (isInArray(playerNumber, bombs)) {
        gameOver = true;
        score = attempts.length;
        alert("GAME OVER!\nYour score: " + attempts.length)

    } else if (!isInArray(playerNumber, attempts)) {
        attempts.push(playerNumber);
    }
}
// condition to win: no bombs found
attempts.length;
if (attempts.length == maxAttempts) {
    alert("U WON!\nYour score: " + attempts.length)
}
console.log("tentativi", attempts);
// /GAME





// ------------------------FUNCTIONS------------------------
// function that gets a random number
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// fuction that verify is an array has duplicates elements
function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}