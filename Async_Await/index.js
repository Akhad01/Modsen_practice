async function fetchDataFromMultipleServers(serverUrls) {
  try {
    const responses = await Promise.all(serverUrls.map((url) => fetch(url)));

    const allResponsesSuccessful = responses.every((response) => response.ok);
    if (!allResponsesSuccessful) {
      throw new Error('Не все запросы были успешными');
    }

    const dataPromises = responses.map((response) => response.json());
    const data = await Promise.all(dataPromises);

    return data;
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    throw error;
  }
}

const serverUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
];

fetchDataFromMultipleServers(serverUrls)
  .then((data) => {
    console.log('Полученные данные:', data);
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error.message);
  });
