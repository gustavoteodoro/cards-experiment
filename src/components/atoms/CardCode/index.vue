<template>
  <div :style="containerStyles">
    <span>{{ `${value.charAt(0)}` }}</span>
    <img :alt="suit" v-bind:src="require(`../../../assets/${suit.toLowerCase()}.png`)">
  </div>
</template>

<script>
export default {
  name: 'CardCode',
  props: {
    value: String,
    suit: String,
    inverted: Boolean,
  },
  computed: {
    containerStyles() {
      return {
        transform: `rotate(${this.inverted ? '180' : '0'}deg)`,
      };
    },
  },
};
</script>

<style scoped>
span {
  font-size: 30px;
  margin-right: 7px;
  display: inline-block;
  font-weight: bold;
}
img {
  width: 25px;
  margin-bottom: -7px;
}
</style>
