//Variables
let deck = []
const types = ['C', 'D', 'H', 'S'] 
const others = ['A', 'J', 'Q', 'K']

let playerScore = 0
let computerScore = 0
//References
const btnHit = document.querySelector('#btnHit')

let smalls = document.querySelectorAll('small')
//Functions
const createDeck = () => {
    for (i = 2; i<=10; i++) {
        for (type in types) {
            deck.push( i + types[type])
        }
    }
    for (type in types) {
        for (other in others) {
            deck.push( others[other] + types[type])
        }
    }
    deck = _.shuffle(deck)
    return deck
}

const hit = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    const card = deck.pop()
    return card
}

const cardValue = (card) => {
    const value = card.substring(0, card.length-1)
    if (isNaN(value)) {
        return (value === 'A') ? 11 : 10
    }
    return (value * 1)
} 

createDeck()

//Events
btnHit.addEventListener('click', () => {
    const card = hit()

    playerScore = playerScore + cardValue(card)

    
    console.log(playerScore)

})