import { generateArray, generateNumber, filterObject } from '../index.js';

jest.mock('../filters-presets.js', () => {
  return {
    products: ['id', 'name']
  };
});

describe('helpers.js', () => {
  test('should generate an array with the length and object provided', () => {
    const obj = {
      name: 'q',
      other: 'w'
    };
    expect(generateArray(2, obj)).toHaveLength(2);
    expect(generateArray(2, obj)).toEqual([
      {
        ...obj,
        id: 0
      },
      {
        ...obj,
        id: 1
      }
    ]);
  });

  test('should generate an array with the length and function provided', () => {
    const func = i => {
      return {
        id: i,
        name: `name ${i}`
      };
    };
    expect(generateArray(1, func)).toHaveLength(1);
    expect(generateArray(1, func)).toEqual([
      {
        id: 0,
        name: `name 0`
      }
    ]);
  });

  test('should generate a random integer', () => {
    const first = generateNumber(1, 100);
    const second = generateNumber(1, 100);
    expect(first).not.toEqual(second);
  });

  test('should filter the object properties with an "array" provided', () => {
    const obj = {
      id: 1,
      name: 'name',
      desc: 'desc'
    };
    const exp = ['id', 'name'];
    const expextedResult = {
      id: 1,
      name: 'name'
    };
    expect(filterObject(obj, exp)).toEqual(expextedResult);
  });

  test('should filter the object properties with a "preset" provided', () => {
    const obj = {
      id: 1,
      name: 'name',
      desc: 'desc'
    };
    const exp = 'products';
    const expextedResult = {
      id: 1,
      name: 'name'
    };
    expect(filterObject(obj, exp)).toEqual(expextedResult);
  });
});
