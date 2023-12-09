import { roundPrice } from '../src/roundPrice';


//Rundar + console log

describe('roundPrice', () => {
  it('rounds and formats a price with many decimals', () => {
    console.log(roundPrice(232.10542));
    expect(roundPrice(232.10542)).toBe('232.11 SEK');
  });

  it('formats a whole number price to two decimals', () => {
    console.log(roundPrice(14));
    expect(roundPrice(14)).toBe('14.00 SEK');
  });

  it('rounds and formats a price with fewer than two decimals', () => {
    console.log(roundPrice(1024.2048));
    expect(roundPrice(1024.2048)).toBe('1024.21 SEK');
  });
});
