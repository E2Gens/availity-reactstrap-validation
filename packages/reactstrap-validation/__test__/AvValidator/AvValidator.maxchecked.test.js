import {AvValidator} from '../../src';

const fn = AvValidator.maxChecked;

describe('Max Checked Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('have an alias of maxChecked', () => {
    expect(fn).toEqual(AvValidator.maxChecked);
  });

  it('should return false if the value is greater than the constraint', () => {
    expect(fn(undefined, undefined, {value: 1}, {value: ['a', 'b']})).toBe(false);
  });

  it('should return true if the value is the same as the constraint', () => {
    expect(fn(undefined, undefined, {value: 2}, {value: ['a', 'b']})).toBe(true);
  });

  it('should return false when field is over the max', () => {
    expect(fn(undefined, undefined, {value: 1}, {value: ['a', 'b']})).toBe(false);
  });

  it('should return custom error message if provided when field is over the max', () => {
    expect(fn(undefined, undefined, {value: 1, errorMessage: 'Too much!'}, {value: ['a', 'b']})).toEqual('Too much!');
  });

  it('should accept string constraint input', () => {
    expect(fn(undefined, undefined, {value: '2'}, {value: ['a']})).toBe(true);
    expect(fn(undefined, undefined, {value: '1'}, {value: ['a', 'b']})).toBe(false);
  });

  it('should accept numeric constraint input', () => {
    expect(fn(undefined, undefined, {value: 2}, {value: ['a', 'b']})).toBe(true);
    expect(fn(undefined, undefined, {value: 1}, {value: ['a', 'b']})).toBe(false);
  });

  it('should not accept non-numeric constraint input', () => {
    expect(fn(undefined, undefined, {value: '1a'}, {value: ['a']})).toBe(false);
    expect(fn(undefined, undefined, {value: 'a1'}, {value: ['a']})).toBe(false);
    expect(fn(undefined, undefined, {value: '1.1.1'}, {value: ['a']})).toBe(false);
  });

  it('should not accept decimal constraint input', () => {
    expect(fn(undefined, undefined, {value: 20.2}, {value: ['a', 'b', 'c']})).toBe(false);
    expect(fn(undefined, undefined, {value: '20.2'}, {value: ['a', 'b', 'c']})).toBe(false);
    expect(fn(undefined, undefined, {value: 2.2}, {value: ['a']})).toBe(false);
    expect(fn(undefined, undefined, {value: '2.2'}, {value: ['a']})).toBe(false);
  });
});
