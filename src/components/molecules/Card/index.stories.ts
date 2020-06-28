import Card from './index.vue';

export default { title: 'Molecules/Card' };

export const Default = () => ({
  components: { Card },
  template: '<Card value="2" suit="SPADES" />'
});