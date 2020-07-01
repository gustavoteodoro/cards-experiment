<template>
  <div class="cards-pile">
    <Card
      v-for="(card, index) in cards"
      :key="`${card.suit + index}`"
      :value="card.value"
      :suit="card.suit"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '../../molecules/Card/index.vue';

export default {
  name: 'CardsForm',
  components: {
    Card,
  },
  computed: mapState({
    cards: (state) => state.deck.cards,
  }),
};
</script>

<style scoped>
.cards-pile {
  display: flex;
  flex-wrap: wrap;
  margin: 24px auto;
  max-width: 1000px;
  justify-content: flex-start;
  background: #d8d8d8;
  border: 2px solid #979797;
  padding: 0 25px;
}
</style>
