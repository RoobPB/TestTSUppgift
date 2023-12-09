import { EmailTest } from '../src/email'; // Anpassa './validateEmail' så att den matchar sökvägen till din funktion

describe('validateEmail', () => {
  it('returns true for a valid email', () => {
    expect(EmailTest('jonatan@gmail.com')).toBe(true);
  });

  it('returns false for an email without a domain', () => {
    expect(EmailTest('jonatan@gmail')).toBe(false);
  });

  it('returns false for an email without an "@" symbol', () => {
    expect(EmailTest('jonatan.com')).toBe(false);
  });
});
