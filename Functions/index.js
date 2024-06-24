function findFirstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(findFirstNonRepeatingChar('abacabad'));
console.log(findFirstNonRepeatingChar('abadabad'));
