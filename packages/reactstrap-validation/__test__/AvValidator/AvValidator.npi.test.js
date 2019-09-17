import {AvValidator} from '../../src';

const fn = AvValidator.npi;

describe('NPI Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('should return custom error message if provided when field is not valid', () => {
    expect(fn('1234', undefined, {errorMessage: 'Not an NPI!'})).toEqual('Not an NPI!');
  });

  it('should return false if NPI contains non-digits', () => {
    expect(fn('i2eh56789o')).toBe(false);
  });

  it('should return false if NPI is not 10 digits in length', () => {
    expect(fn('123456789')).toBe(false);
    expect(fn('12345678901')).toBe(false);
  });

  it('should return false if NPI does not start with a 1, 2, 3, or 4', () => {
    expect(fn('5678901234')).toBe(false);
  });

  it('should return false if NPI checksum does not match check digit', () => {
    expect(fn('1234567890')).toBe(false);
  });

  it('should return true if NPI is valid', () => {
    expect(fn('1234567893')).toBe(true);
  });
});
