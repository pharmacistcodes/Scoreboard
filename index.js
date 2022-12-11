

let score1 = document.getElementById("score1")
let homescore = 0

let score2 = document.getElementById("score2")
let guestscore = 0

function homeadd1() {
    homescore += 1
    score1.textContent = homescore
}

function homeadd2() {
    homescore += 2
    score1.textContent = homescore
}

function homeadd3() {
    homescore += 3
    score1.textContent = homescore
}



function guestadd1() {
    guestscore += 1
    score2.textContent = guestscore
}

function guestadd2() {
    guestscore += 2
    score2.textContent = guestscore
}

function guestadd3() {
    guestscore += 3
    score2.textContent = guestscore
}