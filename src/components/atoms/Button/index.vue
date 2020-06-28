<template>
  <button :type="[[ type ]]">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    type: String,
  },
};
</script>

<style scoped>
button {
  font-size: 35px;
  border: none;
  background: #17065f;
  color: #f8e54d;
  font-weight: bold;
  padding: 7px 45px 11px;
  border-radius: 20px;
  transition: background .4s ease, color .4s ease, transform .2s ease;
  cursor: pointer;
}
button:hover {
  background: #f8e54d;
  color: #17065f;
}
button:active {
  transform: scale(0.96);
}
</style>
