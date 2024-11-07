const words = ["пајак", "оцена", "старт", "солза", "книга", "маска", "молив", "рамка", "сапун", "роман"];
let chosenWord = "";
let hint = "";
let attempts = 5;

function selectRandomWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    hint = chosenWord.slice(0, 2); // Display the first 2 letters as a hint
    document.getElementById("hintLetters").innerText = hint;
}

function startNewGame() {
    attempts = 5;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("newGame").style.display = "none";
    selectRandomWord();
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess === chosenWord) {
        document.getElementById("message").innerText = "Честитки! Го погодивте зборот!";
        document.getElementById("newGame").style.display = "block";
        alert("Честитки! Го погодивте зборот!");
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById("message").innerText = `Неточно! Имате уште ${attempts} обиди`;
        } else {
            document.getElementById("message").innerText = `Неуспешна игра! Бараниот збор беше: "${chosenWord}".`;
            document.getElementById("newGame").style.display = "block";
            alert("Неуспешна игра! Бараниот збор беше: " + chosenWord);
        }
    }
}

document.addEventListener("DOMContentLoaded", startNewGame);
