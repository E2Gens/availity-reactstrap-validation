import {AvValidator} from '../../src';

const fn = AvValidator.required;

describe('Required Validation', () => {
  it('should be invalid with ""', () => {
    expect(fn('')).toBe(false);
  });

  it('should be invalid with false', () => {
    expect(fn(false)).toBe(false);
  });

  it('should return custom error message if provided when field is not valid', () => {
    expect(fn('', undefined, {errorMessage: 'Invalid!'})).toEqual('Invalid!');
  });

  it('should be valid with 0', () => {
    expect(fn(0)).toBe(true);
  });

  it('should be valid with -1', () => {
    expect(fn(-1)).toBe(true);
  });

  it('should be valid with true', () => {
    expect(fn(true)).toBe(true);
  });
});
