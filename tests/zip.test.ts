import { Zip } from '../src/zip';

describe('Zip', () => {
  it('Ger true om 5 nummer', () => {
    console.log(Zip('12345'));
    expect(Zip('12345')).toBe(true);
  });

  it('Ger false om 4', () => {
    console.log(Zip('1234'));
    expect(Zip('1234')).toBe(false);
  });

  it('Ger false om 6', () => {
    console.log(Zip('123456'));
    expect(Zip('123456')).toBe(false);
  });

  it('Ger false om ej nummer', () => {
    console.log(Zip('abcde'));
    expect(Zip('abcde')).toBe(false);
  });
});
