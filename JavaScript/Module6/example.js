const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

function handlePromise() {
  Promise.all([p1, p2])
    .then((values) => {
      console.log(`promise is resolved with values: ${values}`);
    })
    .catch((error) => {
      console.log(`promise is rejected with error: ${error}`);
    });
}

handlePromise();

// use the async and await keywords to handle the promises
async function handlePromiseAsync() {
  try {
    let values = await Promise.all([p1, p2]);
    console.log(`promise is resolved with values: ${values}`);
  } catch (error) {
    console.log(`promise is rejected with error: ${error}`);
  }
}

handlePromiseAsync();
