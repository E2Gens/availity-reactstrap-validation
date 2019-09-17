import {AvValidator} from '../../src';

const fn = AvValidator.step;

describe('Step Validation', () => {
  it('should not require a value', () => {
    expect(fn('')).toBe(true);
  });


  it('should return custom error message if provided when field is not valid', () => {
    expect(fn(12, undefined, {value: 7, errorMessage: 'Get to steppin!'})).toEqual('Get to steppin!');
  });

  it('should accept numbers', () => {
    expect(fn(10, undefined, {value: 5})).toBe(true);
    expect(fn(11, undefined, {value: 5})).toBe(false);
    expect(fn(10, undefined, {value: 6})).toBe(false);
    expect(fn(10, undefined, {value: 2})).toBe(true);

    expect(fn('10', undefined, {value: 5})).toBe(true);
    expect(fn('11', undefined, {value: 5})).toBe(false);
    expect(fn('10', undefined, {value: 6})).toBe(false);
    expect(fn('10', undefined, {value: 2})).toBe(true);

    expect(fn(10, undefined, {value: '5'})).toBe(true);
    expect(fn(11, undefined, {value: '5'})).toBe(false);
    expect(fn(10, undefined, {value: '6'})).toBe(false);
    expect(fn(10, undefined, {value: '2'})).toBe(true);
  });

  it('should accept decimals', () => {
    expect(fn(10.2, undefined, {value: 5.1})).toBe(true);
    expect(fn(11.5, undefined, {value: 5.3})).toBe(false);
    expect(fn(10.5, undefined, {value: 6.7})).toBe(false);
    expect(fn(10.5, undefined, {value: 2.1})).toBe(true);
    expect(fn(0.00000002, undefined, {value: 0.00000001})).toBe(true);
    expect(fn(0.000000011, undefined, {value: 0.00000001})).toBe(false);

    expect(fn('10.2', undefined, {value: 5.1})).toBe(true);
    expect(fn('11.5', undefined, {value: 5.55})).toBe(false);
    expect(fn('10.55', undefined, {value: 6.2})).toBe(false);
    expect(fn('10.5', undefined, {value: 2.1})).toBe(true);
    expect(fn('0.00000002', undefined, {value: 0.00000001})).toBe(true);
    expect(fn('0.000000011', undefined, {value: 0.00000001})).toBe(false);

    expect(fn(10.2, undefined, {value: '5.1'})).toBe(true);
    expect(fn(11.5, undefined, {value: '5.4'})).toBe(false);
    expect(fn(10.5, undefined, {value: '6.7'})).toBe(false);
    expect(fn(10.5, undefined, {value: '2.1'})).toBe(true);
    expect(fn(0.00000002, undefined, {value: '0.00000001'})).toBe(true);
    expect(fn(0.000000011, undefined, {value: '0.00000001'})).toBe(false);
  });
});
