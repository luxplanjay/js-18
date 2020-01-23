/*
 * Работем с коллекцией карточек в trello
 * Удалить, добавить, обновить
 */

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
console.log(cards);

const removeCard = function(allCards, cardToRemove) {
  const index = allCards.indexOf(cardToRemove);

  // guard clause
  if (index === -1) {
    console.log('Такой карточки нет!');
    return;
  }

  allCards.splice(index, 1);
};

// removeCard(cards, 'card-32');
// console.log(cards);

// removeCard(cards, 'card-5');
// console.log(cards);

const addCard = function(allCards, cardToInsert, index) {
  allCards.splice(index, 0, cardToInsert);
};

// addCard(cards, 'card-100', 2);
// console.log(cards);
