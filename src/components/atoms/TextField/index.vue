<template>
  <label :aria-label="[[ label ]]">
    <span>{{ label }}</span>
    <input
      type="text"
      :minlength=minlength
      :maxlength=maxlength
      :name=name
      :aria-placeholder="[[ placeholder ]]"
      :placeholder="[[ placeholder ]]"
      v-model="inputData"
      @keyup="$emit('update:inputData', inputData);"
    />
  </label>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: String,
    minlength: Number,
    name: String,
    maxlength: Number,
    placeholder: String,
    required: Boolean,
    inputData: String,
  },
};
</script>

<style scoped>
label {
  text-align: left;
  margin: 16px 8px;
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
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgb(207, 210, 223);
  max-width: 180px;
}
</style>
