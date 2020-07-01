/* eslint-disable */
export default ({ data, sortBy, sortField }) => {
  const sortByObject = sortBy.reduce((obj, item, index) => ({
    ...obj,
    [item]: index,
  }), {});
  return data.sort((a, b) => (
    sortByObject[a[sortField].charAt(0)] - sortByObject[b[sortField].charAt(0)]
  ));
};
