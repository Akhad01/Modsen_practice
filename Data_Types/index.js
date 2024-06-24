function sumFirstAndLastDigit(number) {
  const numberString = Math.abs(number).toString();

  const firstDigitChar = numberString[0];
  const lastDigitChar = numberString[numberString.length - 1];

  const firstDigit = parseInt(firstDigitChar);
  const lastDigit = parseInt(lastDigitChar);

  const sum = firstDigit + lastDigit;
  console.log(`Сумма первой и последней цифры числа ${number}: ${sum}`);
}

sumFirstAndLastDigit(1045);
