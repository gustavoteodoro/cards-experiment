import TextField from './index.vue';

export default { title: 'Atoms/TextField' };

export const pure = () => ({
  components: { TextField },
  template: '<text-field />'
});

export const withLabel = () => ({
  components: { TextField },
  template: '<text-field label="Label example" />'
});

export const withPlaceholder = () => ({
  components: { TextField },
  template: '<text-field label="Label example" placeholder="Placeholder example..." />'
});

export const withMaxLenght = () => ({
  components: { TextField },
  template: '<text-field label="Label example" maxlength="2" placeholder="Placeholder example..." />'
});

export const withMinLenght = () => ({
  components: { TextField },
  template: '<text-field label="Label example" minlength="2" placeholder="Placeholder example..." />'
});
