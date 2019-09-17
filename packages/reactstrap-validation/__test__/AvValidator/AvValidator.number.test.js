import {AvValidator} from '../../src';

const fn = AvValidator.number;

describe('Number Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('should return custom error message if provided when field is not valid', () => {
    expect(fn('a4', undefined, {errorMessage: 'NaN!'})).toEqual('NaN!');
  });

  it('should accept numbers', () => {
    expect(fn(0)).toBe(true);
    expect(fn(-1)).toBe(true);
    expect(fn(1)).toBe(true);
    expect(fn(10)).toBe(true);
  });

  it('should accept decimals', () => {
    expect(fn(0.1)).toBe(true);
    expect(fn(-1.1)).toBe(true);
    expect(fn(1.1)).toBe(true);
    expect(fn(10.1)).toBe(true);
  });

  it('should accept number like strings', () => {
    expect(fn('0')).toBe(true);
    expect(fn('-1')).toBe(true);
    expect(fn('1')).toBe(true);
    expect(fn('10')).toBe(true);
  });

  it('should accept decimal like strings', () => {
    expect(fn('0.1')).toBe(true);
    expect(fn('-1.1')).toBe(true);
    expect(fn('1.1')).toBe(true);
    expect(fn('10.1')).toBe(true);
  });

  it('should not accept strings that are not like numbers', () => {
    expect(fn('a0')).toBe(false);
    expect(fn('-1b')).toBe(false);
    expect(fn('1c')).toBe(false);
    expect(fn('1d0')).toBe(false);
  });
});
