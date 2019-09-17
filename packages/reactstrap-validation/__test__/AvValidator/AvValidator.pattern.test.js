import {AvValidator} from '../../src';

const fn = AvValidator.pattern;

describe('Pattern Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('should return custom error message if provided when field is not valid', () => {
    expect(fn('at3', undefined, {value: /^\d$/, errorMessage: 'Invalid!'})).toEqual('Invalid!');
  });

  it('should accept regex objects', () => {
    expect(fn('3', undefined, {value: /^\d$/})).toBe(true);
    expect(fn('a', undefined, {value: /^\d$/})).toBe(false);
  });

  it('should accept regex like strings', () => {
    expect(fn('3', undefined, {value: '/^\\d$/'})).toBe(true);
    expect(fn('a', undefined, {value: '/^\\d$/'})).toBe(false);
  });

  it('should accept somewhat regex like strings', () => {
    expect(fn('3', undefined, {value: '^\\d$'})).toBe(true);
    expect(fn('a', undefined, {value: '^\\d$'})).toBe(false);
  });

  it('should accept and array of regex to match at least one of', () => {
    expect(fn('3.4', undefined, {value: ['^\\d$', /^\d\.\d$/, '/^\\d\\.d\\.\\d$/']})).toBe(true);
    expect(fn('3.4', undefined, {value: ['^\\d$', /^\d\.\d$/, '/^\\d\\.\\d\\.\\d$/']})).toBe(true);
    expect(fn('3.4.5', undefined, {value: ['^\\d$', /^\d\.\d$/, '/^\\d\\.\\d\\.\\d$/']})).toBe(true);
    expect(fn('3.a.b', undefined, {value: ['^\\d$', /^\d\.\d$/, '/^\\d\\.\\d\\.\\d$/']})).toBe(false);
  });
});
