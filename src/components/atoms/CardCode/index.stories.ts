import CardCode from './index.vue';

export default { title: 'Atoms/CardCode' };

export const Default = () => ({
  components: { CardCode },
  template: '<card-code value="KING" suit="CLUBS" />'
});

export const suitDiamonds = () => ({
  components: { CardCode },
  template: '<card-code value="2" suit="DIAMONDS" />'
});

export const suitHearts = () => ({
  components: { CardCode },
  template: '<card-code value="ACES" suit="HEARTS" />'
});

export const suitSpades = () => ({
  components: { CardCode },
  template: '<card-code value="8" suit="SPADES" />'
});

export const suitClubs = () => ({
  components: { CardCode },
  template: '<card-code value="KING" suit="CLUBS" />'
});

export const Inverted = () => ({
  components: { CardCode },
  template: '<card-code value="8" suit="HEARTS" inverted />'
});
