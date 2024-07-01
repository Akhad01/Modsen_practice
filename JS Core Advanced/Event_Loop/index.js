function generateRandomNumberWithDelay() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const delay = randomNumber * 1000;

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(`Успех! Сгенерировано число: ${randomNumber}`);
      } else {
        reject(`Ошибка! Сгенерировано число: ${randomNumber}`);
      }
    }, delay);
  });
}

generateRandomNumberWithDelay()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
