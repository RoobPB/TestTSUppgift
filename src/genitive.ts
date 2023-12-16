export function genitive(name: string): string {
    if (name.endsWith('s')) {
      return name;
    }
    return `${name}s`;
  }
// Gör om ett namn till genitiv och lägger till s i slutet (om det inte redan slutar på s)
