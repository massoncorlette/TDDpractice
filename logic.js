

function capitlize(string) {
  let char = string.shift();
  char = char.toUpperCase();
  string = string.unshift(char);

  return string;
};


function reverse(string) {
  let reversed = [];

  string.forEach((char) => {
    reversed.push(char);
  })
  return reversed;
};

function caesarCipher(string,num) {
  const abcs = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let newCipher = null;

  if (!(string)) {
    return ('error')
  } else if (!(num)) {
    return (string);
  }
  
  string.forEach((char) => {
    let index = abcs.indexOf(char);

    for (let i=0;i>num;i++) {
      if ((index + i) > 25) {
        index = 0;
      }
    }
    newCipher.push(abcs[index]);
  })
  return newCipher;
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
};

function analyzeArray(arr) {
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



