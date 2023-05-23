//Random Number generator
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);

//Reset Button
document.getElementById("resBtn").onclick = function () {
    document.getElementById("input").value = "";
}

//Randomize button
document.getElementById("ranBtn").onclick = function () {
    const randomize = Math.floor(Math.random() * 5 + 1);
    document.getElementById("input").value = randomize;
    if (randomNumber === randomize) {
        rightGuess();
    } else {
        wrongGuess();
    }
}
//Submit Button
document.getElementById("subBtn").onclick = function () {
    const guess = document.getElementById("input").value;
    if (randomNumber === Number(guess)) {
        rightGuess();
    } else {
        wrongGuess();
    }
}

//functions
function rightGuess() {
    document.getElementById("mainHeading").innerHTML = "You guessed right!";
    document.getElementById("mainHeading").style.color = "green";
    document.getElementById("mainHeading").style.marginLeft = "13cm";
    setTimeout(() => { location.reload() }, 4000)

}
function wrongGuess() {
    document.getElementById("mainHeading").innerHTML = "You guessed wrong!";
    document.getElementById("mainHeading").style.color = "red";
    setTimeout(() => { location.reload() }, 2000)
}