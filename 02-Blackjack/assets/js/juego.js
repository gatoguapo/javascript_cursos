//
(() => {
    'use strict'

    //Variables
    let deck = []
    const types  = ['C', 'D', 'H', 'S'], 
          others = ['A', 'J', 'Q', 'K'];

    // let playerScore = 0
    // let computerScore = 0
    let playersPoints = []

    //References
    const btnHit = document.querySelector('#btnHit'),
          btnStop = document.querySelector('#btnStop'),
          btnNewGame = document.querySelector('#btnNewGame');

    const divPlayerCards = document.querySelector('#player-cards'),
          divComputerCards = document.querySelector('#computer-cards');

    let smalls = document.querySelectorAll('small')

    //Functions
    const initializeGame = (playersNum = 2) => {
        deck = createDeck()
        for (let i=0; i<playersNum;i++) {
            playersPoints.push(0)
        }
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

    const computerTurn = ( playerPoints ) => {
        do {
            const card = hit()

            gatherPoints(card, playersPoints.length-1)
        
            const imgCard = document.createElement('img')
            imgCard.src = `assets/cartas/${card}.png`
            imgCard.className = 'card'
            divComputerCards.append(imgCard)
            if(playerPoints > 21) {
                break
            }
        } while ( (computerScore < playerPoints) && (playerPoints <= 21))
        setTimeout(() => {
            if (playerScore <= 21 && (computerScore > 21)) {
                alert("You've won!")
            } else if (playerScore === 21 && computerScore === 21) {
                alert("There are no winners")
            } else if (playerScore > 21) {
                alert('Computer won')
            }
        }, 10)
    }

    //Events
    btnHit.addEventListener('click', () => {
        const card = hit()

        const playerScore = gatherPoints(card, 0)

        const imgCard = document.createElement('img')
        imgCard.src = `assets/cartas/${card}.png`
        imgCard.className = 'card'

        divPlayerCards.append(imgCard)
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
        //deck = []
        //createDeck()

        btnHit.disabled = false
        btnStop.disabled = false

        divPlayerCards.innerHTML = ''
        divComputerCards.innerHTML = ''

        // playerScore = 0
        // computerScore = 0

        smalls[0].innerText = '0'
        smalls[1].innerText = '0'
    })

})()
