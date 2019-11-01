import { generateArray } from '../index.js';

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
});
