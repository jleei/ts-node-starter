import { sayHello } from './index';

describe('sayHello', () => {
  it('should return a greeting for the provided name', async () => {
    const name = 'World';
    const expected = `Hello, ${name}!`;

    const result = await sayHello(name);

    expect(result).toBe(expected);
  });
});
