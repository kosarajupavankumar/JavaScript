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

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.myPromiseAny = function (promises) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    promises.forEach((promise) => {
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          counter++;
          if (counter === promises.length) {
            reject("All Promises rejected");
          }
        });
    });
  });
};
