import { isLowerCase } from '../src/isLowerCase';

//Olika tester beroende på lowercase eller om det finns större bokstäver
describe('isLowerCase', () => {
  it('returns true for all lowercase letters', () => {
    console.log(isLowerCase('lowercase'));
    expect(isLowerCase('lowercase')).toBe(true);
  });

  it('returns false for uppercase letters', () => {
    console.log(isLowerCase('Lowercase'));
    expect(isLowerCase('Lowercase')).toBe(false);
  });

  it('returns false for a mix of uppercase and lowercase letters', () => {
    console.log(isLowerCase('LoWerCasE'));
    expect(isLowerCase('LoWerCasE')).toBe(false);
  });

  it('returns false for all uppercase letters', () => {
    console.log(isLowerCase('LOWERCASE'));
    expect(isLowerCase('LOWERCASE')).toBe(false);
  });

});
