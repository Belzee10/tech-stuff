import preset from './filters-presets.js';
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
  Math.floor(Math.random() * (to - from + 1) + from);

/**
 * filter the expected object properties
 * @param {Object} obj
 * @param {*} exp
 */
export const filterObject = (obj, exp) => {
  const result = {};
  Object.keys(obj).forEach(key => {
    let expValue;
    if (Array.isArray(exp)) expValue = exp;
    else if (typeof exp === 'string') expValue = preset[exp];
    if (expValue.includes(key)) result[key] = obj[key];
  });
  return result;
};
