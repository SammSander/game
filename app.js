
const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const values = ['Ace', 'King', 'Queen', 'Jack', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

textArea = document.getElementById('text-area');
newGameButton = document.getElementById('new-game-button');
hitButton = document.getElementById('hit-button');
stayButton = document.getElementById('stay-button');

hitButton.style.display = '';
stayButton.style.display = '';

  gameStart = false,
  gameOver = false,
  playWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

newGameButton.addEventListener('click', 
function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  
  dealerCards = [nextCard(), nextCard()];
  playerCards = [nextCard(), nextCard()];
  newGameButton.style.display = '';
  hitButton.style.display = '';
  stayButton.style.display = '';
  showStatus();
})

function createDeck() {
  const deck = []
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      const card = {
        suit: suits[i],
        value: values[x]
      }
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck){
  for(let i = 0; i < deck.length; i++)
  {
    const x = Math.floor(Math.random() *deck.length);
    const sim = deck[x];
    deck[x] = deck[i];
    deck[i] = sim; 
  }
}


function getCard(card) {
    return card.value + "  " + card.suit;
  }
  
  function CardValue(card){
    switch(card.value){
            /*
      case "Jack":
        return 10;
      case 'Kind':
        return 10;
      case 'Queen':
        return 10;  
          */
      case 'Ace':
        return 11;
            break;
      case '2':
        return 2;
        break;
      case '3':
        return 3;
        break;
      case '4':
        return 4;
        break;
      case '5':
        return 5;
        break;
      case '6':
        return 6;
        break;
      case '7':
        return 7;
        break;
      case '8':
        return 8;
        break;
      case '9':
        return 9;
        break;

      default:
        return 10;
        break; 
    }
  }



hitButton.addEventListener('click',
 function(){
    
  playerCards.push(nextCard());
  checkEnd();
  showStatus();
});

stayButton.addEventListener('click', 
function(){
  gameOver = true;
  
  checkEnd();
  showStatus();
});


function checkEnd(){
  updateScores();
  
  if(gameOver){
    while(dealerScore < playerScore &&
          playerScore <= 21 &&
          dealerScore <= 21){
              
            dealerCards.push(nextCard());
            updateScores();
    }
  }
  
    if ( playerScore > 21) {
      playerWon=false;
      gameOver = true;
    }
    
    else if (dealerScore > 21) {
      playerWon = true;
      gameOver = true;
    }
    
    else if (gameOver){
      if(playerScore > dealerScore) {
        playerWon = true;
      }
      else{
        playerWon = false;
      }
    }
}


function showStatus()
{
  if(!gameStarted)
  {}
  
  let dealerCardString = '';
  for(let i = 0; i < dealerCards.length; i++)
  {
      
    dealerCardString += getCard (dealerCards[i]) ;
  }
  let playerCardString='';
  for(let i = 0; i < playerCards.length; i++)
  {
     
    playerCardString += getCard(playerCards[i]) ;
  }
  
  updateScores();
  
  textArea.innerHTML = 
  'Dealer :' + dealerCardString + '(score: ' + dealerScore + ')'
   +
   'Player :' + playerCardString + '(score: ' + playerScore + ')';
                        
  if(gameOver){

    if(playerWon)
    {
       
      textArea.innerHTML += "YOU WIN";
    }

    else{
        
      textArea.innerHTML += "DEALER WINS";
    }

    newGameButton.style.display = '';
    hitButton.style.display = '';
    stayButton.style.display = '';
    
  }
}

function getScore(cardArray){
   score = 0;
  for(let i = 0; i < cardArray.length; i++) {
    const card = cardArray[i];
    score += CardValue(card);
   
  }
   return score; 
}

function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards); 
}


function nextCard() {
  return deck.shift();
}
