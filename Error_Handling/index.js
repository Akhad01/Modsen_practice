function divideWithCheck(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Деление на ноль недопустимо!');
  }
  return dividend / divisor;
}

try {
  console.log(divideWithCheck(10, 2));
  console.log(divideWithCheck(8, 0));
} catch (error) {
  console.error(error.message);
}
