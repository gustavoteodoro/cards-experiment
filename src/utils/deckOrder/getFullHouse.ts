/* eslint-disable */
export default ({ values, cards }) => {
  const combos = [];
  values.map(value => {
    const found = cards.filter(card => card.value.charAt(0) === value);
    combos.push({ value, amount: found.length, cards: found });
  })
  const firstCombo = combos.find(combo => combo.amount >= 3);
  if (firstCombo) {
    const restFirstCombo = combos.filter(combo => firstCombo.value !== combo.value)
    const secondCombo = restFirstCombo.find(combo => combo.amount >= 2);
    if (secondCombo) {
      const firstComboCards = firstCombo.cards.slice(0, 3);
      const secondComboCards = secondCombo.cards.slice(0, 2)
      const finalComboCards = [ ...firstComboCards, ...secondComboCards];
      const finalComboCodes = finalComboCards.map(combo => combo.code);
      return finalComboCodes.join(',');
    }
  }
}
