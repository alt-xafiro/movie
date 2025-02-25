import { describe, expect, test } from 'vitest';

import { getRandomNumber } from './random';

describe('getRandomNumber', () => {
  test.each([
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
    [1, 0]
  ])('(%i, %i) should work', (a, b) => {
    expect(getRandomNumber(a, b)).toBeGreaterThanOrEqual(Math.min(a, b));
    expect(getRandomNumber(a, b)).toBeLessThanOrEqual(Math.max(a, b));
  });

  test.each([
    [-1, 0],
    [0, -1],
    [-1, -1]
  ])('(%i, %i) should throw an error', (a, b) => {
    expect(() => getRandomNumber(a, b)).toThrowError();
  });
});
