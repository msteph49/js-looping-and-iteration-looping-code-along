function writeCards(nameArray, eventType) {
    let thankYouCards = []
    for(let i = 0; i < nameArray.length; i++){
        thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventType} gift!`)
    }
    return thankYouCards
}

function countDown(number) {
    while (number >0 ) {
        console.log(number--)
    }
    console.log(number)
}