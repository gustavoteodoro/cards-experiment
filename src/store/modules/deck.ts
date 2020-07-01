/* eslint-disable no-shadow */
import { getDeck, shuffleDeck } from '../../services/deck.ts';
import customSort from '../../utils/deckOrder/customSort.ts';
import getFullHouse from '../../utils/deckOrder/getFullHouse.ts';
import { reorderArray } from '../../utils/arrayUtils/index.ts';

const state = () => ({
  cards: [],
  fullHouse: 'None',
});

const getters = {};

const actions = {
  getAllCards({ commit }, { deckId, count, rotationCard }) {
    shuffleDeck({ deckId }).then(() => getDeck({ deckId, count }).then((cards) => {
      const defaultValueOrder = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'];
      const defaultSuitOrder = ['C', 'S', 'H', 'D'];

      const upperRotationCard = rotationCard.toUpperCase();
      const rotationValue = upperRotationCard.charAt(0);
      const rotationSuit = upperRotationCard.charAt(1);

      const rotationValueIndex = defaultValueOrder.findIndex((e) => rotationValue === e);
      const rotationSuitIndex = defaultSuitOrder.findIndex((e) => rotationSuit === e);

      const newValueOrder = reorderArray({ oldIndex: rotationValueIndex, arr: defaultValueOrder });
      const newSuitOrder = reorderArray({ oldIndex: rotationSuitIndex, arr: defaultSuitOrder });

      const sortedValues = customSort({ data: cards.cards, sortBy: newValueOrder, sortField: 'value' });
      const sortedCards = customSort({ data: sortedValues, sortBy: newSuitOrder, sortField: 'suit' });
      const fullHouse = getFullHouse({ values: defaultValueOrder, cards: sortedCards });
      commit('setCards', sortedCards);
      if (fullHouse) commit('setFullHouse', fullHouse);
    }));
  },
};

const mutations = {
  setCards(state, cards) {
    state.cards = cards;
  },
  setFullHouse(state, fullHouse) {
    state.fullHouse = fullHouse;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
