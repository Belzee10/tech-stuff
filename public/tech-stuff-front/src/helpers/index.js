/**
 * generate an array
 * @param {Number} count
 * @param {Object} item
 */
export const generateArray = (count, item = {}) => {
  const array = new Array(count);
  return array.fill().map((_, index) => {
    return typeof item === 'function'
      ? item(index)
      : {
          ...item,
          id: index
        };
  });
};

/**
 * generate random integer
 * @param {Number} from
 * @param {Number} to
 */
export const generateNumber = (from, to) =>
  Math.floor(Math.random() * to) + from;
