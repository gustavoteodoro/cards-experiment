import customSort from './customSort'

const data = [
  { suit: 'C' },
  { suit: 'H' },
  { suit: 'D' },
  { suit: 'S' },
  { suit: 'H' }
];
const sortBy = ['C', 'S', 'H', 'D'];
const sortField = 'suit';
const props = { data, sortBy, sortField };

test('customSort', () => {
  expect(customSort(props)).toStrictEqual([
    { suit: 'C' },
    { suit: 'S' },
    { suit: 'H' },
    { suit: 'H' },
    { suit: 'D' }
  ]);
});