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

Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let counter = 0;
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          counter++;
          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myPromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
