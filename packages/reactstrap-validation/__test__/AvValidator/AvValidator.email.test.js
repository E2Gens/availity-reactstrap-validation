import {AvValidator} from '../../src';

const fn = AvValidator.email;

describe('Email Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });

  it('should return true for a valid email', () => {
    expect(fn('evan.sharp@availity.com')).toBe(true);
    expect(fn('evan.sharp+more-things@availity.com')).toBe(true);
    expect(fn('evan.sharp@availity.com.co')).toBe(true);
    expect(fn('evan.sharp@development.availity.com')).toBe(true);
    expect(fn('Evan.Sharp@Availity.com')).toBe(true);
  });

  it('should return false for an invalid email', () => {
    expect(fn('evan.sharp@availity')).toBe(false);
    expect(fn('evan.sharp@')).toBe(false);
    expect(fn('@availity.com')).toBe(false);
    expect(fn('evan.sharp@.com')).toBe(false);
    expect(fn('evan.sharp')).toBe(false);
    expect(fn('availity.com')).toBe(false);
    expect(fn('Evan@Sharp@Availity.com')).toBe(false);
  });
});
