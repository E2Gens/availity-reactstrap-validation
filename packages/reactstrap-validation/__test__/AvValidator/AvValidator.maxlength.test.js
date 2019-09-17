import {AvValidator} from '../../src';

const fn = AvValidator.maxlength;

describe('Max Length Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('have an alias of maxLength', () => {
    expect(fn).toEqual(AvValidator.maxLength);
  });

  it('should return true if the value length is greater than the constraint', () => {
    expect(fn('123', undefined, {value: 5})).toBe(true);
  });

  it('should true if the value is the same as than the constraint', () => {
    expect(fn('12345', undefined, {value: 5})).toBe(true);
  });

  it('should return false by default when field is over the max', () => {
    expect(fn('123456', undefined, {value: 5})).toBe(false);
  });

  it('should return custom error message if provided when field is over the max', () => {
    expect(fn('123456', undefined, {value: 5, errorMessage: 'Not enough!'})).toEqual('Not enough!');
  });

  it('should accept string input', () => {
    expect(fn('12345', undefined, {value: '2'})).toBe(false);
    expect(fn('12345', undefined, {value: 2})).toBe(false);
    expect(fn('1', undefined, {value: '2'})).toBe(true);
    expect(fn('1', undefined, {value: 2})).toBe(true);
  });

  it('should accept string constraint input', () => {
    expect(fn('12345', undefined, {value: '2'})).toBe(false);
    expect(fn('1', undefined, {value: '2'})).toBe(true);
  });

  it('should not accept numeric input', () => {
    expect(fn(10, undefined, {value: '3'})).toBe(false);
    expect(fn(2, undefined, {value: 3})).toBe(false);
  });

  it('should accept numeric constraint input', () => {
    expect(fn('123456', undefined, {value: 2})).toBe(false);
    expect(fn('123', undefined, {value: 6})).toBe(true);
  });

  it('should accept numeric input', () => {
    expect(fn('0p5p', undefined, {value: 5})).toBe(true);
    expect(fn('0001', undefined, {value: 5})).toBe(true);
    expect(fn('1.1.', undefined, {value: 6})).toBe(true);
  });
});
