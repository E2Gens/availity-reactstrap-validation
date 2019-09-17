import {AvValidator} from '../../src';

const fn = AvValidator.phone;

describe('Phone Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('should have an alias of "tel"', () => {
    expect(fn).toEqual(AvValidator.tel);
  });

  it('should return custom error message if provided when field is not valid', () => {
    expect(fn('at3', undefined, {errorMessage: 'Invalid!'})).toEqual('Invalid!');
  });

  it('should accept a regex to validate with', () => {
    expect(fn('3', undefined, {pattern: /^\d$/})).toBe(true);
    expect(fn('3', undefined, {pattern: '/^\\d$/'})).toBe(true);
  });

  it('should not accept less than 10 digits', () => {
    expect(fn('123456789')).toBe(false);
  });

  it('country code of "+1" is allowed', () => {
    expect(fn('+14444444444')).toBe(true);
    expect(fn('14444444444')).toBe(true);
    expect(fn('+1 4444444444')).toBe(true);
    expect(fn('1 4444444444')).toBe(true);
  });

  it('must be 10 digits (minus country code)', () => {
    expect(fn('4444444444')).toBe(true);
    expect(fn('44444444445')).toBe(false);
    expect(fn('444 444 4444')).toBe(true);
  });

  it('can be formatted', () => {
    expect(fn('(444) 444-4444')).toBe(true);
    expect(fn('+1 (444) 444-4444')).toBe(true);
    expect(fn('444-444-4444')).toBe(true);
    expect(fn('+1 444-444-4444')).toBe(true);
    expect(fn('444.444.4444')).toBe(true);
    expect(fn('(444) 444 4444')).toBe(true);
  });
});
