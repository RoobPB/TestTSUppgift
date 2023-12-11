// Uppgift 4a
/*export function roundPrice(price: number): string {
    const roundedPrice = Math.ceil(price * 100) / 100;
    return `${roundedPrice.toFixed(2)} SEK`;
  }*/

// Uppdaterad för 4b-4c
  export function roundPrice(price: number, pattern: string = '%PRICE% SEK'): string {
    const roundedPrice = Math.ceil(price * 100) / 100;
    return pattern.replace('%PRICE%', roundedPrice.toFixed(2));
  }
