var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// Function for checking whether selected cards match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}
	else {
		console.log("Sorry, try again.");
	}
}

// Placing cards flipped into cards in play set
function flipCard(cardID) {

	console.log("User flipped "+cards[cardID]);

	cardsInPlay.push(cards[cardID]);

	// Check if two cards are a match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}


flipCard(0);
flipCard(2);