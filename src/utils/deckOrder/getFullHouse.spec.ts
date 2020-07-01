import getFullHouse from './getFullHouse'

const values = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'];
const cards = [
  {
    value: '2',
    code: '2H'
  },
  {
    value: 'A',
    code: 'AD'
  },
  {
    value: '2',
    code: '2D'
  },
  {
    value: '2',
    code: '2C'
  },
  {
    value: '3',
    code: '3H'
  },
  {
    value: '3',
    code: '3S'
  }
];
const props = { values, cards };

test('getFullHouse', () => {
  expect(getFullHouse(props)).toStrictEqual("2H,2D,2C,3H,3S");
});