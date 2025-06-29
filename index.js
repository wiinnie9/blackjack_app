let isAlive = false
let hasBlackJack = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Per",
    chips: 145,
    sayHello: function(){
        console.log("Heisann!")
    }
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    hasBlackJack = false

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++ ){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21){
        message = "Yay! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else if (sum > 21){
        message = "You're out of the game 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){
    if (isAlive == true && hasBlackJack == false){
        card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10)
        return 10
    else if (randomNumber == 1){
        return 11
    } else {
        return randomNumber
    } 
}