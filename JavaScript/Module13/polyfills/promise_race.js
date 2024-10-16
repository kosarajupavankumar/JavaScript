const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 1 completed");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 2 completed");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task 3 completed");
  }, 1500);
});

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myRace([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
