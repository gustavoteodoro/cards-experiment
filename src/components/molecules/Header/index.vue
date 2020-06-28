<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  text-align: center;
  display: block;
  background: rgb(69,132,36);
  background: linear-gradient(90deg, rgba(69,132,36,1) 0%, rgba(53,105,27,1) 100%);
  overflow: hidden;
}
h1 {
  font-size: 52px;
  color: #f8e54d;
  margin: 42px 0 24px;
  font-weight: bold;
}
</style>
