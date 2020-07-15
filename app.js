
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const deck = new Array();
const palyers = new Array();
const currentPlayer = 0;


/*
function createDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < values.length; x++)
		{
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
} 

*/


//deck 

function createDeck() {
    const deck = new Array();
    for (let i = 0 ; i < values.length; i++)
    {
        for(let x = 0; x < suits.length; x++)
        {
            let theSymbolOne = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                theSymbolOne = 10;
            if (values[i] == "A")
                theSymbolOne = 11; 
            let card = { Value: values[i], Suit: suits[x], TheSymbolOne: theSymbolOne};
            deck.push(card);
        }
    }
} 


// players

function createPlayers(num)
{
    players = new Array();
    for(let i = 1; i <= num; i++)
    {
        let hand = new Array();
        let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
        players.push(player);
    }
}


function creatPlayerPretty() {
    document.getElementById('players').innerHTML = ''
    for (let i = 0; i < players.length; i++) {

    }
}






function shuffle(deck)
{
	for (let i = 0; i < 1000; i++)
	{
		const shuffle1 = Math.floor((Math.random() * deck.length));
		const shuffle2 = Math.floor((Math.random() * deck.length));
		//const tmp = deck[location1];

		//deck[location1] = deck[location2];
		//deck[location2] = tmp;
	}
}
