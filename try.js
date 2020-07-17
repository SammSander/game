/* const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "10", "10", "11"];
const player
const dealer
 ///*
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
*///

/*
function shuffle(deck) {
    const random = Math.floor(deck.length * Math.randon());
    return deck[random];
}

function startGame() {
    player = [shuffle(deck)];
    dealer = [shuffle(deck)]
}

function checkValue (hand) {
    const sum = 0;
    for (let i = 0; i = hand.length; i++) {
        sum = hand[i];
    }
    return sum;
}

startGame();

function hit() {
    player.push(shuffle(deck));
    console.log('new player' + player)

    if (checkValue(player) > 21) {
        document.getElementById('status').innerHTML = 'bust';

    }
}

document.getElementById('player').innerHTML = player;
document.getElementById('player-value').innerHTML = checkValue(player);
document.getElementById('dealer').innerHTML = dealer;
document.getElementById('dealer-value').innerHTML = checkValue(dealer);
*/


/*
class Deck {
    constructor() {
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
   */


   /*

   <h3> player cards</h3>
<div id="player"></div>
<h3>player value</h3>
<div id='player-value'></div>
<h3>dealer</h3>
<div id='dealer'></div>
<h3>dealer value</h3>
<div id="dealer-value"></div>
<div id="game-status"></div>
<button onClick="hit()">HIT</button>
<button onclick="stand()">STAY</button>

*/

/*
//Get Card Values
function getCardvalues(card) {
    switch(card.value) {
      case 'Ace':
        return 1;
        break;
      case 'Two':
        return 2;
        break;
      case 'Three':
        return 3;
        break;
      case 'Four':
        return 4;
        break;
      case 'Five':
        return 5;
        break;
      case 'Six':
        return 6;
        break;
      case 'Seven':
        return 7;
        break;
      case 'Eight':
        return 8;
        break;
      case 'Nine':
        return 9;
        break;
      default: 
        return 10;
        break;
    }
  }

  */

/*
 const suits = ['Heart', 'Spades', 'Clubs', 'Diamonds'];
 const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
 
 */
 
 
 
 //deck 
 /*
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
             const card = { Value: values[i], Suit: suits[x], TheSymbolOne: theSymbolOne};
             deck.push(card);
         }
     }
 } 
 */



