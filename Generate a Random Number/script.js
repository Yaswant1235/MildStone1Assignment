const result = document.getElementById("result");
const inputBox = document.getElementById("inputBox");
const button = document.getElementById("button");

const computerGuess = Math.floor(Math.random() * 100);
console.log(computerGuess);

button.addEventListener("click", () => {
    const userGuess = Number(inputBox.value);
    if (computerGuess === userGuess) {
        result.innerText = "You won the game";
    } else if (computerGuess > userGuess) {
        result.innerText = "Guess a greater number";
    } else {
        result.innerText = "Guess a smaller number";
    }
});