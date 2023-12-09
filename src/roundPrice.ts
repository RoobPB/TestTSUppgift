export function roundPrice(price: number): string {
    const roundedPrice = Math.ceil(price * 100) / 100;
    return `${roundedPrice.toFixed(2)} SEK`;
  }
