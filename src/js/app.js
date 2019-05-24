const score = document.querySelectorAll('.score');
const cards = document.querySelectorAll('.cards');
const jshit = document.querySelector('.js-hit');
const stand = document.querySelector('.js-stand');
let valueUser;
let valueDealer;
let clearYesorNo;

const deck = new Deck();
document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  
  deck.shuffle();
  jshit.addEventListener('click', () => {
    if (clearYesorNo === 1) {
      clearGame();
    }else{
      if (document.querySelectorAll('.card').length < 8) {
      showCard();
      dealerCard();
      }else {
        check();
      }
    }
  })
  
  stand.addEventListener('click', () => {
    if (clearYesorNo === 1) {
      clearGame();
    }else {
      check();
    }
  })
});

const showCard = () => {
  let i = randint(0,deck.cards.length);
  let newCard = document.createElement('div'); 
  newCard.className = 'card face-'+deck.cards[i].rank+'-of-'+deck.cards[i].suit; 
  cards[1].appendChild(newCard);

  sum(deck.cards[i].rank, valueUser);
  valueUser = sum(deck.cards[i].rank, valueUser);

  let q = randint(0,deck.cards.length);
  let secondNewCard = document.createElement('div'); 
  secondNewCard.className = 'card face-'+deck.cards[q].rank+'-of-'+deck.cards[q].suit; 
  cards[1].appendChild(secondNewCard);

  sum(deck.cards[q].rank, valueUser);
  valueUser = sum(deck.cards[q].rank, valueUser);

  score[1].innerHTML = 'Score: ' + valueUser;
}



const sum = (card, value) => {
  if (value == undefined) {
    value = 0;
  }
  if (card == 'ace') {
    value += 11;
  } else if (card == 'jack' || card == 'queen' || card == 'king') {
    value += 10;
  } else {
    value += Number(card);
  }
  return value;
}

const check = () => {
  if (valueDealer > 21) {
    score[1].innerHTML = "Score: "+valueUser+"<br>User winner";
    score[0].innerHTML = "Score: "+valueDealer;
  }else if (valueUser > 21) {
    score[0].innerHTML = "Score: "+valueDealer+"<br>Dealer winner";
  }else if (valueUser > valueDealer){
    score[1].innerHTML = "Score: "+valueUser+"<br>User winner";
    score[0].innerHTML = "Score: "+valueDealer;
  }else if (valueUser == valueDealer){
    score[1].innerHTML = "Score: "+valueUser+"<br>It`s a tie";
    score[0].innerHTML = "Score: "+valueDealer+"<br>It`s a tie";
  }else {
    score[0].innerHTML = "Score: "+valueDealer+"<br>Dealer winner";
  }
  clearYesorNo = 1;
}

const dealerCard = () => {
  let y = randint(0,deck.cards.length);
  let reverseNewCard = document.createElement('div');
  reverseNewCard.className = 'card face-revers';
  cards[0].appendChild(reverseNewCard);

  sum(deck.cards[y].rank, valueDealer); 
  valueDealer = sum(deck.cards[y].rank, valueDealer); 

  let z = randint(0,deck.cards.length);
  let unreverseNewCard = document.createElement('div');
  unreverseNewCard.className = 'card face-'+deck.cards[z].rank+'-of-'+deck.cards[z].suit;
  cards[0].appendChild(unreverseNewCard);

  sum(deck.cards[y].rank, valueDealer); 
  valueDealer = sum(deck.cards[z].rank, valueDealer); 

  console.log(valueDealer)
}

const clearGame = () => {
  valueDealer = 0;
  valueUser = 0;
  cards[0].innerHTML = '';
  cards[1].innerHTML = '';
  score[0].innerHTML = "Score: ?";
  score[1].innerHTML = "Score: "+valueUser;
  clearYesorNo = 0;
}