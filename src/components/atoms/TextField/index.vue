<template>
  <label :aria-label="[[ label ]]">
    <span>{{ label }}</span>
    <input
      type="text"
      :minlength="[[ minlength ]]"
      :maxlength="[[ maxlength ]]"
      :aria-placeholder="[[ placeholder ]]"
      :placeholder="[[ placeholder ]]"
      required
    />
  </label>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: String,
    minlength: Number,
    maxlength: Number,
    placeholder: String,
    required: Boolean,
  },
};
</script>

<style scoped>
label {
  text-align: left;
}
span {
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
}
input {
  display: block;
  padding: 9px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #cfd2df;
}
</style>
