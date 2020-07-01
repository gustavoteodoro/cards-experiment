<template>
  <div class="container">
    <Header :title="cardsLabel" />
    <CardsForm />
  </div>
</template>

<script>
import Header from '../../components/molecules/Header/index.vue';
import CardsForm from '../../components/organisms/CardsForm/index.vue';
import { cardsLabel } from './data.json';

export default {
  name: 'Deck',
  data() {
    return {
      cardsLabel,
    };
  },
  props: {
    msg: String,
  },
  components: {
    Header,
    CardsForm,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #e3f3f6;
  padding: 0;
  margin: 0;
}
</style>
