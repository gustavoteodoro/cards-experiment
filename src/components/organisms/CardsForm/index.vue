<template>
  <form @submit.prevent="onSubmit">
    <div class="cards-container">
      <text-field
        v-for="card in cards"
        :key="card"
        :label="`${cardLabel} ${card}`"
        :name="`${cardLabel} ${card}`"
        :placeholder="enterCardLabel"
        :minlength=2
        :maxlength=2
        :inputData.sync=selectedCards[card]
      />
    </div>
    <div class="cards-container">
      <text-field
        :label="rotationCardLabel"
        :placeholder="enterCardLabel"
        :minlength=2
        :maxlength=2
        :inputData.sync="rotationCard"
      />
    </div>
    <Button :label="submitLabel" type="submit" />
  </form>
</template>

<script>
import TextField from '../../atoms/TextField/index.vue';
import Button from '../../atoms/Button/index.vue';
import { createNewDeck, createNewPile } from '../../../services/deck.ts';
import {
  cardLabel, enterCardLabel, rotationCardLabel, submitLabel,
} from './data.json';

export default {
  name: 'CardsForm',
  data() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return {
      selectedCards: [],
      rotationCard: '',
      cards,
      cardLabel,
      enterCardLabel,
      rotationCardLabel,
      submitLabel,
    };
  },
  components: {
    Button,
    TextField,
  },
  methods: {
    onSubmit() {
      createNewDeck({ cards: this.selectedCards }).then((result) => {
        if (result.success) {
          createNewPile({
            deckId: result.deck_id,
            cards: this.selectedCards,
          }).then((pileResult) => {
            this.$router.push(`/new/${result.deck_id}?count=${pileResult.remaining}&rc=${this.rotationCard}`);
          });
        }
      });
    },
  },
};
</script>

<style scoped>
form {
  text-align: center;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  margin: 24px auto;
  max-width: 1190px;
  justify-content: center;
}
</style>
