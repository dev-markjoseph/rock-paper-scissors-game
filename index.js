let player1Res = document.getElementById("player1-res")
let player2Res = document.getElementById("player2-res")
let winnerEl = document.getElementById("winner-el")
let player1Score = document.getElementById("player1-score")
let player2Score = document.getElementById("player2-score")
let winnerName = document.getElementById("winner-name")
let startgame = document.getElementById("start-game")
let newgame =  document.getElementById("new-game")
let player1El = document.getElementById("player1-el")
let player2El = document.getElementById("player2-el")

let player1 = 0
let player2 = 0
let player1result = ""
let player2result = ""
let scorePlayer1 = 0, scorePlayer2 = 0 
let isAlive = true

function getRandomPick(){
    return Math.floor(Math.random()*3)+1
}

function disableAll(){
    player1Res.textContent = "N/A"
    player2Res.textContent = "N/A"
    player1Score.textContent  = "0"
    player2Score.textContent  = "0"
    winnerEl.textContent = "---"
    winnerName.textContent = "Winner takes here"
}

function renderGame(){
    startGame()
}

function newGame(){
    isAlive = true
    disableAll()
    newgame.style.opacity = "0.5"
    startgame.style.opacity  = "1"
    player1El.classList.remove("blink-text")
    player2El.classList.remove("blink-text")
}

function startGame(){

    if(isAlive){
        newgame.setAttribute("disabled", true)
        newgame.style.opacity = "0.5"
        player1result =  parsePlayer1()
        player2result = parsePlayer2()
        player1Res.textContent = player1result
        player2Res.textContent = player2result
        
        if (player1result === "Rock" && player2result === "Rock"){
            winnerEl.textContent = "Its a tie"
        }else if(player1result === "Rock" && player2result === "Paper"){
            winnerEl.textContent = "Player 2 wins"
            scorePlayer2++
        } else if(player1result === "Rock" && player2result === "Scissors"){
            winnerEl.textContent = "Player 1 wins"
            scorePlayer1++
        }else if(player1result === "Paper" && player2result === "Paper"){
            winnerEl.textContent = "Its a tie"
        }else if(player1result === "Paper" && player2result === "Rock"){
            winnerEl.textContent = "Player 1 wins"
            scorePlayer1++
        }else if(player1result === "Paper" && player2result === "Scissors"){
            winnerEl.textContent = "Player 2 wins"
            scorePlayer2++
        }else if(player1result === "Scissors" && player2result === "Scissors"){
            winnerEl.textContent = "Its a tie"
        }else if(player1result === "Scissors" && player2result === "Rock"){
            winnerEl.textContent = "Player 2 wins"
            scorePlayer2++
        }else if(player1result === "Scissors" && player2result === "Paper"){
            winnerEl.textContent = "Player 1 wins"
            scorePlayer1++
        }
    
        player1Score.textContent = scorePlayer1
        player2Score.textContent = scorePlayer2
    
        if(scorePlayer1 === 5 || scorePlayer2 === 5){
            if(scorePlayer1 > scorePlayer2){
                winnerName.textContent = "The Winner is Player 1"
                player1El.classList.add("blink-text")
            }else{
                winnerName.textContent = "The Winner is Player 2"
                player2El.classList.add("blink-text")
            }
            scorePlayer1 = 0
            scorePlayer2 = 0
            isAlive = false
            newgame.removeAttribute("disabled")
            newgame.style.opacity = "1"
            startgame.style.opacity = "0.5"
        }
    }
   
}

function parsePlayer1(){
    player1 = getRandomPick()
    if (player1 === 1){
        player1 = "Rock"
    }else if(player1 === 2){
        player1 = "Paper"
    }else{
        player1 = "Scissors"
    }
    console.log(player1)
    return player1
}

function parsePlayer2(){
    player2 = getRandomPick()
     if (player2 === 1){
        player2 = "Rock"
     }else if(player2 === 2){
        player2 = "Paper"
     }else{
        player2 = "Scissors"
    }
    console.log(player2)
    return player2
}
