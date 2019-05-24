const score = document.querySelectorAll('.score');

document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  const deck = new Deck();
  deck.shuffle();
  console.log(deck);
  console.log('face-'+deck.cards[0].rank+'-of-'+deck.cards[0].suit);
});

const showCard = () => {
  
}