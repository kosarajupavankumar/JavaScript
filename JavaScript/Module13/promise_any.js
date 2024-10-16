const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Frist Promise");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Second Promise rejected");
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
