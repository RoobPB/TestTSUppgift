import { Zip } from '../src/zip'; // Anpassa import-satsen till din mappstruktur

describe('Zip', () => {
  it('returns true for a valid 5-digit ZIP code', () => {
    expect(Zip('12345')).toBe(true);
  });

  it('returns false for a 4-digit ZIP code', () => {
    expect(Zip('1234')).toBe(false);
  });

  it('returns false for a 6-digit ZIP code', () => {
    expect(Zip('123456')).toBe(false);
  });

  it('returns false for a non-numeric ZIP code', () => {
    expect(Zip('abcde')).toBe(false);
  });
});
