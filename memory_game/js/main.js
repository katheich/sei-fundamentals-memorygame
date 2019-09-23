
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];


// Function for checking whether selected cards match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

// Placing cards flipped into cards in play set
function flipCard() {

	var cardID = this.getAttribute('data-id');

	console.log("User flipped "+cards[cardID].rank);

	cardsInPlay.push(cards[cardID].rank);

	console.log(cards[cardID].cardImage)
	console.log(cards[cardID].suit)

	this.setAttribute('src', cards[cardID].cardImage);

	// Check if two cards are a match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}

// Create Game Board
function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}



createBoard();