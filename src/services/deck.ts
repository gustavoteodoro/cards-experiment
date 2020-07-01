import { arrayToCommaSeparated } from '../utils/arrayUtils/index.ts';

const apiEndpoint = 'https://deckofcardsapi.com/api';

export const createNewDeck = ({ cards }) => {
  const cleanedCards = cards.filter((n) => n);
  const parsedCards = arrayToCommaSeparated(cleanedCards);
  return fetch(`${apiEndpoint}/deck/new/shuffle/?cards=${parsedCards.toUpperCase()}`).then((res) => res.json());
};

export const createNewPile = ({ deckId, cards }) => {
  const cleanedCards = cards.filter((n) => n);
  const parsedCards = arrayToCommaSeparated(cleanedCards);
  return fetch(`${apiEndpoint}/deck/${deckId}/pile/main/add/?cards=${parsedCards.toUpperCase()}`).then((res) => res.json());
};

export const shuffleDeck = ({ deckId }) => fetch(`${apiEndpoint}/deck/${deckId}/shuffle`).then((res) => res.json());

export const getDeck = ({ deckId, count }) => fetch(`${apiEndpoint}/deck/${deckId}/draw/?count=${count}`).then((res) => res.json());
