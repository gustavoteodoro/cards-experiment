export const arrayToCommaSeparated = (arr) => arr.join(',');

export const reorderArray = ({ oldIndex, arr }) => {
  const movedItem = arr.find((item, index) => index === oldIndex);
  const remainingItems = arr.filter((item, index) => index !== oldIndex);

  const reorderedItems = [
    movedItem,
    ...remainingItems.slice(oldIndex),
    ...remainingItems.slice(0, oldIndex),
  ];

  return reorderedItems;
};
