/**
 * generate an array
 * @param {Number} count
 * @param {Object} item
 */
export const generateArray = (count, item = {}) => {
  const array = new Array(count);
  return array.fill().map(() => item);
};
