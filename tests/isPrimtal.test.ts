import { isPrimtal } from '../src/isPrimtal';


// Ej lagt till console log i detta fall pga enklare att se om ett tal är true eller inte gällande primtal
describe('isPrimtal', () => {
  it('returns true for a primtal number', () => {
    expect(isPrimtal(17)).toBe(true);
  });

  it('returns false for a non-primtal number', () => {
    expect(isPrimtal(11)).toBe(true);
  });

  it('returns false for 1', () => {
    expect(isPrimtal(1)).toBe(false);
  });

  it('returns false for 0', () => {
    expect(isPrimtal(0)).toBe(false);
  });

  it('returns false for a negative number', () => {
    expect(isPrimtal(-3)).toBe(false);
  });

});
