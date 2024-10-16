const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Frist Promise");
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

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
