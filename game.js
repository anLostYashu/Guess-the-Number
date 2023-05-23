//Random Number generator
function get_rand() {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    console.log(randomNumber);
    return randomNumber;
}

//Reset Button
document.getElementById("resBtn").onclick = function () {
    document.getElementById("input").value = "";
}

//Randomize button
document.getElementById("ranBtn").onclick = function () {
    const randomize = Math.floor(Math.random() * 5 + 1);
    document.getElementById("input").value = randomize;
    if (get_rand() === randomize) {
        rightGuess();
    } else {
        wrongGuess();
    }
}
//Submit Button
document.getElementById("subBtn").onclick = function () {
    const guess = document.getElementById("input").value;
    if (get_rand() === Number(guess)) {
        rightGuess();
    } else {
        wrongGuess();
    }
}

//functions
function normal(e) {
    e.innerHTML = "Guess the number";
    e.style.color = "#fa4eac";
    e.style.marginLeft = "13cm";
}
function rightGuess() {
    let elem = document.getElementById("mainHeading");
    elem.innerHTML = "You guessed right!";
    elem.style.color = "green";
    setTimeout(normal, 2000, elem);
}
function wrongGuess() {
    let elem = document.getElementById("mainHeading");
    elem.innerHTML = "You guessed wrong!";
    elem.style.color = "red";
    setTimeout(normal, 2000, elem);
}