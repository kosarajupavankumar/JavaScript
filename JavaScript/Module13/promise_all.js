const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Frist Promise rejected");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise");
  }, 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

//dashboard : weather, stock, news

const fetchWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Weather Data");
    }, 1000);
  });
};

const fetchStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Stock Data");
    }, 500);
  });
};

const fetchNews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("News Data");
    }, 1500);
  });
};

Promise.all([fetchWeather(), fetchStock(), fetchNews()])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
