import { formatNumber } from '../src/utils';

describe('formatNumber', () => {
  it('should format whole numbers correctly', () => {
    expect(formatNumber(1000)).toBe('1,000');
    expect(formatNumber(5000)).toBe('5,000');
    expect(formatNumber(1000000)).toBe('1,000,000');
  });

  it('should format numbers with decimals correctly', () => {
    expect(formatNumber(1234.5678)).toBe('1,234.5678');
    expect(formatNumber(9876.54321)).toBe('9,876.54321');
    expect(formatNumber(12345.6789)).toBe('12,345.6789');
  });

  it('should format negative numbers correctly', () => {
    expect(formatNumber(-1000)).toBe('-1,000');
    expect(formatNumber(-5000)).toBe('-5,000');
    expect(formatNumber(-1234.5678)).toBe('-1,234.5678');
  });
});
