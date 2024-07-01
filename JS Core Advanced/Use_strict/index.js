'use strict';

function countVowels(arg) {
  let count = 0;
  const vowels = [
    'a',
    'e',
    'i',
    'o',
    'u',
    'y',
    'а',
    'у',
    'о',
    'и',
    'э',
    'ы',
    'я',
    'ю',
    'е',
    'ё',
  ];

  for (let item of arg.toLowerCase()) {
    if (vowels.includes(item)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('Привет мир'));
console.log(countVowels('Hello world'));
