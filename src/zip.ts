export function Zip(zip: string): boolean {
    const zipRegex = /^[0-9]{5}$/;
    return zipRegex.test(zip);
  }
