async function fetchAndCombineData(apiUrls) {
  try {
    const promises = apiUrls.map((url) =>
      fetch(url).then((response) => response.json())
    );
    const results = await Promise.all(promises);
    return combineResults(results);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

function combineResults(results) {
  return results.flat();
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
];

fetchAndCombineData(apiUrls)
  .then((combinedData) => {
    console.log('Объединенные данные:', combinedData);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error);
  });
