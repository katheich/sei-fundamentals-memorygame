var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// First card the user flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

// Second card the user flipped
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

// Check if two cards are a match
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}