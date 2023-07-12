//
const myModule = (() => {
    'use strict'

    //Variables
    let deck = []
    const types  = ['C', 'D', 'H', 'S'], 
          others = ['A', 'J', 'Q', 'K'];

    let playersPoints = []

    //References
    const btnHit = document.querySelector('#btnHit'),
          btnStop = document.querySelector('#btnStop'),
          btnNewGame = document.querySelector('#btnNewGame');

    let smalls = document.querySelectorAll('small'),
    divCardsPlayer = document.querySelectorAll('.divCards');

    //Functions
    const initializeGame = (playersNum = 2) => {
        deck = createDeck()
        playersPoints = []
        for (let i=0; i<playersNum;i++) {
            playersPoints.push(0)
        }

        smalls.forEach(elem => elem.innerText = '0')
        divCardsPlayer.forEach(elem => elem.innerHTML = '')

        btnHit.disabled = false
        btnStop.disabled = false
    }
    
    const createDeck = () => {
        deck = []
        for (let i = 2; i<=10; i++) {
            for (let type in types) {
                deck.push( i + types[type])
            }
        }
        for (let type in types) {
            for (let other in others) {
                deck.push( others[other] + types[type])
            }
        }
        return _.shuffle(deck)
    }

    const hit = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }
        return deck.pop()
    }

    const cardValue = (card) => {
        const value = card.substring(0, card.length-1)
        if (isNaN(value)) {
            return (value === 'A') ? 11 : 10
        }
        return (value * 1)
    } 

    const gatherPoints = (card, turn) => {
        playersPoints[turn] = playersPoints[turn] + cardValue(card)
        smalls[turn].innerText = playersPoints[turn]

        return playersPoints[turn]
    }

    const createCard = (card, div) => {
        const imgCard = document.createElement('img')
        imgCard.src = `assets/cartas/${card}.png`
        imgCard.className = 'card'
        divCardsPlayer[div].append(imgCard)
    }

    const getWinner = () => {
        const [playerPoints, computerScore] = playersPoints
        setTimeout(() => {
            if (playerPoints <= 21 && (computerScore > 21)) {
                alert("You've won!")
            } else if (playerPoints === 21 && computerScore === 21) {
                alert("There are no winners")
            } else if (playerPoints > 21) {
                alert('Computer won')
            }
        }, 10)
    }

    const computerTurn = ( playerPoints ) => {
        let computerScore = 0
        do {
            const card = hit()

            computerScore = gatherPoints(card, playersPoints.length-1)
            createCard(card, playersPoints.length-1)
            
            if(playerPoints > 21) {
                break
            }
        } while ( (computerScore < playerPoints) && (playerPoints <= 21))
        getWinner()
    }

    //Events
    btnHit.addEventListener('click', () => {
        const card = hit()

        const playerScore = gatherPoints(card, 0)
        createCard(card, 0)

        if (playerScore > 21) {
            btnHit.disabled = true
            btnStop.disabled = true
            computerTurn(playerScore)
        } else if (playerScore === 21) {
            btnHit.disabled = true
            btnStop.disabled = true
            computerTurn(playerScore)
        }
    })

    btnStop.addEventListener('click', () => {
        btnHit.disabled = true
        btnStop.disabled = true
        computerTurn(playerScore)
        setTimeout(() => {
            if (computerScore > playerScore && computerScore <= 21) {
                alert('Computer won')
            } else if (playerScore === computerScore) {
                alert("There are no winners")
            }
        }, 10)
    })

    btnNewGame.addEventListener('click', () => {
        initializeGame()
    })

    return {
        newGame: initializeGame
    }

})()
