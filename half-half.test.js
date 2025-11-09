const { halfHalf } = require('./half-half');

describe('halfHalf', () => {
  describe('input validation', () => {
    test('should throw error when price is zero', () => {
      expect(() => halfHalf(0)).toThrow('Minimum price must be 0.01 THB');
    });

    test('should throw error when price is negative', () => {
      expect(() => halfHalf(-1)).toThrow('Minimum price must be 0.01 THB');
      expect(() => halfHalf(-0.01)).toThrow('Minimum price must be 0.01 THB'); ``
      expect(() => halfHalf(-100)).toThrow('Minimum price must be 0.01 THB');
    });

    test('should accept minimum positive price', () => {
      expect(() => halfHalf(0.01)).not.toThrow();
      expect(halfHalf(0.01)).toEqual([0.01, 0]);
    });

    test('should accept any positive price', () => {
      expect(() => halfHalf(1)).not.toThrow();
      expect(() => halfHalf(100)).not.toThrow();
      expect(() => halfHalf(0.5)).not.toThrow();
    });
  });

  test('should split even amount equally', () => {
    expect(halfHalf(100)).toEqual([50, 50]);
    expect(halfHalf(200)).toEqual([100, 100]);
  });

  test('should handle odd amounts with rounding', () => {
    expect(halfHalf(101)).toEqual([50.5, 50.5]);
    expect(halfHalf(99)).toEqual([49.5, 49.5]);
  });

  test('should split amounts with decimals', () => {
    expect(halfHalf(100.50)).toEqual([50.25, 50.25]);
    expect(halfHalf(99.99)).toEqual([50, 49.99]);
  });

  test('should handle amounts that require rounding to 2 decimals', () => {
    expect(halfHalf(100.01)).toEqual([50.01, 50]);
    expect(halfHalf(100.03)).toEqual([50.02, 50.01]);
  });

  test('should handle small amounts', () => {
    expect(halfHalf(1)).toEqual([0.5, 0.5]);
    expect(halfHalf(0.50)).toEqual([0.25, 0.25]);
  });

  test('should ensure first person gets remainder when splitting odd cents', () => {
    // When dividing by 2 results in more than 2 decimals
    expect(halfHalf(10.01)).toEqual([5.01, 5]);
    expect(halfHalf(10.03)).toEqual([5.02, 5.01]);
  });

  test('should handle typical Thai Baht amounts', () => {
    expect(halfHalf(150)).toEqual([75, 75]);
    expect(halfHalf(37.50)).toEqual([18.75, 18.75]);
    expect(halfHalf(299.99)).toEqual([150, 149.99]);
  });

  test('should handle large amounts', () => {
    expect(halfHalf(1000)).toEqual([500, 500]);
    expect(halfHalf(9999.99)).toEqual([5000, 4999.99]);
  });
});
