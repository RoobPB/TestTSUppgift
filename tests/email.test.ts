import { EmailTest } from '../src/email'; // Anpassa './validateEmail' så att den matchar sökvägen till din funktion

describe('validateEmail', () => {
  it('returns true for a valid email', () => {
    console.log(EmailTest('jonatan@gmail.com'));
    expect(EmailTest('jonatan@gmail.com')).toBe(true);
  });

  it('returns false for an email without a domain', () => {
    console.log(EmailTest('jonatan@gmail'));
    expect(EmailTest('jonatan@gmail')).toBe(false);
  });

  it('returns false for an email without an "@" symbol', () => {
    console.log(EmailTest('jonatan.com'));
    expect(EmailTest('jonatan.com')).toBe(false);
  });
});
