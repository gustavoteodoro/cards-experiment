<template>
  <div class="container">
    <CardCode :value="value" :suit="suit" />
    <CardCode :value="value" :suit="suit" inverted />
  </div>
</template>

<script>
import CardCode from '../../atoms/CardCode/index.vue';

export default {
  name: 'Card',
  props: {
    value: String,
    suit: String,
  },
  components: { CardCode },
};
</script>

<style scoped>
.container{
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 136px;
  min-height: 240px;
  justify-content: space-between;
  box-shadow: 1px 1px 6px 1px #9686a3;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 7px 18px;
}
</style>
