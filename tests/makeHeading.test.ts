import { makeHeading } from '../src/makeHeading';

describe('makeHeading', () => {
  it('creates an H1 heading', () => {
    console.log(makeHeading('Hello', 1));
    expect(makeHeading('Hello', 1)).toBe('<h1>Hello</h1>');
  });

  it('creates an H2 heading', () => {
    console.log(makeHeading('Next level', 2));
    expect(makeHeading('Next level', 2)).toBe('<h2>Next level</h2>');
  });
});
