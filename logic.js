export function capitalize(string) {
  if (!string) return '';
  let char = string[0].toUpperCase();
  return char + string.slice(1);
}

export function reverse(string) {
  return string.split('').reverse().join('');
}

export function caesarCipher(string, num) {
  const abcs = 'abcdefghijklmnopqrstuvwxyz';
  let newCipher = '';

  if (!string) return 'error';
  if (!num) return string;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      let index = abcs.indexOf(char.toLowerCase());

      index = (index + num) % 26;
      if (index < 0) index += 26;

      let shiftedChar = abcs[index];
      newCipher += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      newCipher += char;
    }
  }

  return newCipher;
}

export function analyzeArray(arr) {
  if (arr.length === 0) return null;

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length
  };
}



