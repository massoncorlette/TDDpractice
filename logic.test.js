import {capitalize,reverse,caesarCipher,calculator,analyzeArray} from './logic';


test('first letter capital', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('javaScript')).toBe('JavaScript');
});

test('reverse string', () => {
  expect(reverse('hi')).toBe('ih');
  expect(reverse('masson')).toBe('nossam');
})

test('correct Cipher', () => {
  expect(caesarCipher('abc',3)).toBe('def');
})