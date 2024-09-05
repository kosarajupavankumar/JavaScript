console.log("Start");

const fetchUserDataPromise = new Promise((resolve, reject) => {
  // perform async operations
  setTimeout(() => {
    const response = {
      name: "pavan",
      age: 28,
    };

    resolve(response);
  }, 2000);
});

fetchUserDataPromise
  .then((user) => {
    console.log(user.name);
    console.log(user.age);
  })
  .catch((err) => {
    console.log(`something went wrong!!`, err);
  })
  .finally(() => {
    console.log(`user data is fetched sucessfully`);
  });
console.log("end");
