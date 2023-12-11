import { roundPrice } from '../src/roundPrice';


//Rundar + console log
//Uppdaterad för 4b-4c så att valutasymbolen kommer framför/efter
describe('roundPrice', () => {
    it('formats price with "kr" after the amount (SEK)', () => {
      console.log(roundPrice(232.10542, '%PRICE%kr SEK'));
      expect(roundPrice(232.10542, '%PRICE%kr SEK')).toBe('232.11kr SEK');
    });

    it('formats price with "$" before the amount and "USD" after', () => {
      console.log(roundPrice(14, '$%PRICE% USD'));
      expect(roundPrice(14, '$%PRICE% USD')).toBe('$14.00 USD');
    });

    it('formats price with "kr" after the amount (NOK)', () => {
      console.log(roundPrice(560, '%PRICE%kr NOK'));
      expect(roundPrice(560, '%PRICE%kr NOK')).toBe('560.00kr NOK');
    });
});
