// Possible guesses
var playerNames = [
    "HONDA",
    "TOYOTA",
    "MAZDA",
    "BMW",
    "LEXUS",
    "MERCEDES",
    "FIAT",
    "NISSAN",
    "FORD",
    "DODGE",
]

var maxNumGuesses = 8;
var numWins = 0;
var numLosses = 0;
var numGuessesLeft = 0;
var guessedLetters = [];
var isComplete = false;
var Word;
var ansWordArr = [];

function setup() {
    Word = playerNames[Math.floor(Math.random() * playerNames.length)];

    ansWordArr = [];

    // For loop to add '_' ansWordArr 
    for (let i = 0; i < Word.length; i++) {
        ansWordArr[i] = "_";
    }

    // Variable reset
    numGuessesLeft = maxNumGuesses;
    guessedLetters = [];

    // Clears logo picture to dipslay pic
    document.getElementById("player-picture").src = "";

    // Color removal
    document.getElementById("numGuesses").style.color = "";

    // Displays
    updateScreen();
};

// Function to update HTML
function updateScreen() {
    document.getElementById("numGuesses").innerText = numGuessesLeft;
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("wordAnswer").innerText = ansWordArr.join("");

};

// Function for pressed key
function checkGuess(letter) {
    // If letter is not in guessedLetters array then push letter to array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        // If letter not in the answer word then -1
        if (Word.indexOf(letter) === -1) {
            numGuessesLeft--;
            if (numGuessesLeft <= 3) {
                document.getElementById("numGuesses").style.color = "#ff0000";
            }

        } else {
            for (var i = 0; i < Word.length; i++) {
                if (letter === Word[i]) {
                    ansWordArr[i] = letter;
                }
            }
        }
    }

};

// Winner function
function isWinner() {
    // Adding +1 to the ansWordArr | Change isComplete = true
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isComplete = true;
        if (Word === "HONDA") {
            document.getElementById("player-picture").src = "assets/images/HONDA.jpg"; alt = "HONDA";
        } else if (Word === "TOYOTA") {
            document.getElementById("player-picture").src = "assets/images/TOYOTA.jpg"; alt = "TOYOTA";
        } else if (Word === "MAZDA") {
            document.getElementById("player-picture").src = "assets/images/MAZDA.jpg"; alt = "MAZDA";
        } else if (Word === "BMW") {
            document.getElementById("player-picture").src = "assets/images/BMW.jpg"; alt = "BMW";
        } else if (Word === "LEXUS") {
            document.getElementById("player-picture").src = "assets/images/LEXUS.jpg"; alt = "LEXUS";
        } else if (Word === "MERCEDES") {
            document.getElementById("player-picture").src = "assets/images/MERCEDES.jpg"; alt = "MERCEDES";
        } else if (Word === "FIAT") {
            document.getElementById("player-picture").src = "assets/images/FIAT.jpg"; alt = "FIAT";
        } else if (Word === "NISSAN") {
            document.getElementById("player-picture").src = "assets/images/NISSAN.jpg"; alt = "NISSAN";
        } else if (Word === "FORD") {
            document.getElementById("player-picture").src = "assets/images/FORD.jpg"; alt = "FORD";
        } else if (Word === "DODGE") {
            document.getElementById("player-picture").src = "assets/images/DODGE.jpg"; alt = "DODGE";
        }

    }
};

//LOSER FUNCTION//
function isLoser() {
    //IF numGuessesLeft IS 0 THEN +1 to numLosess | CHANGE isComplete to true//
    if (numGuessesLeft <= 0) {
        numLosses++;
        isComplete = true;
    }
};

//KEY PRESS (onkeyup)//
document.onkeyup = function (event) {
    if (isComplete) {
        setup();
        isComplete = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90)
            checkGuess(event.key.toUpperCase());
        updateScreen();
        isWinner();
        isLoser();
    }
};

setup();
updateScreen();

console.log(Word);

document.addEventListener('keydown', function () {
    if (keyCode == 65) {
        document.getElementById('audio').play();
    }
});

