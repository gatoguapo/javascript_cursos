let deck = []
const types = ['C', 'D', 'H', 'S'] 
const others = ['A', 'J', 'Q', 'K']

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
    const card = deck[deck.length-1]
    deck.pop()
    return card
}

console.log(createDeck())
console.log(hit())
console.log(deck)