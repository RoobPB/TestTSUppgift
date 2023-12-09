import { Zip } from '../src/zip';

describe('Zip', () => {
  it('Ger true om 5 nummer', () => {
    expect(Zip('12345')).toBe(true);
  });

  it('Ger false om 4', () => {
    expect(Zip('1234')).toBe(false);
  });

  it('Ger false om 6', () => {
    expect(Zip('123456')).toBe(false);
  });

  it('Ger false om ej nummer', () => {
    expect(Zip('abcde')).toBe(false);
  });
});
