<template>
  <div class="container">
    <Header :title="orderedPileLabel" />
    <div v-if="cards.length > 0">
      <CardsPile />
      <div class="cards-info">
        <p><b>{{ highCardLabel }}</b> {{ cards[0] && cards[0].code }}</p>
        <p><b>{{ fullHouseComboLabel }}</b> {{ fullHouse }}</p>
      </div>
    </div>
    <div v-else class="loader-container">
      <Loader />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loader from '../../components/atoms/Loader/index.vue';
import Header from '../../components/molecules/Header/index.vue';
import CardsPile from '../../components/organisms/CardsPile/index.vue';
import { orderedPileLabel, highCardLabel, fullHouseComboLabel } from './data.json';

export default {
  name: 'NewDeck',
  data() {
    return {
      orderedPileLabel,
      highCardLabel,
      fullHouseComboLabel,
    };
  },
  computed: mapState({
    cards: (state) => state.deck.cards,
    fullHouse: (state) => state.deck.fullHouse,
  }),
  components: {
    Header,
    Loader,
    CardsPile,
  },
  methods: mapActions('cart', [
    'addProductToCart',
  ]),
  created() {
    const deckId = this.$route.params.id;
    const { count, rc } = this.$route.query;
    this.$store.dispatch('deck/getAllCards', { deckId, count, rotationCard: rc });
  },
};
</script>

<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #e3f3f6;
  padding: 0;
  margin: 0;
}
.cards-info{
  max-width: 700px;
  margin: 24px auto;
}
.cards-info p {
  font-size: 24px;
}
.loader-container{
  text-align: center;
  padding: 48px;
}
</style>
