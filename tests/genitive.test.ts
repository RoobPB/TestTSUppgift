import { genitive } from '../src/genitive';


// Lägger till s eller inte, beroende på namnets slutbokstav
describe('genitive', () => {
  it('adds "s" to the end of a name not ending in "s"', () => {
    console.log(genitive('Jonatan'));
    console.log(genitive('Anna'));
    console.log(genitive('Johanna'));
    expect(genitive('Jonatan')).toBe('Jonatans');
    expect(genitive('Anna')).toBe('Annas');
    expect(genitive('Johanna')).toBe('Johannas');
  });

  it('does not add "s" to the end of a name already ending in "s"', () => {
    console.log(genitive('Claes'));
    console.log(genitive('Hampus'));
    expect(genitive('Claes')).toBe('Claes');
    expect(genitive('Hampus')).toBe('Hampus');
  });
});
