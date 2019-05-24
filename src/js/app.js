const score = document.querySelectorAll('.score');
const cards = document.querySelectorAll('.cards');
const jshit = document.querySelector('.js-hit');
let value;

const deck = new Deck();
document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  
  deck.shuffle();
  jshit.addEventListener('click', () => {
    showCard(1);
    showCard(0);
  })
  
});

const showCard = (x) => {
  let i = randint(0,deck.cards.length);
  let newCard = document.createElement('div');
  newCard.className = 'card face-'+deck.cards[i].rank+'-of-'+deck.cards[i].suit;
  cards[x].appendChild(newCard);
  sum(deck.cards[i].rank, value);
  value = sum(deck.cards[i].rank, value);
  score[x].innerHTML = 'Score: ' + value;
  check(value,x);
  value = check(value,x);
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

const check = (value, x) => {
  if (value > 21){
    score[x].innerHTML = 'Score: ' + value + '<br>You lost!';
    cards[x].innerHTML = '';
    return value = 0;
  }
  return value;
}

