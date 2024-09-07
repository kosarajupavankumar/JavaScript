const p = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

async function fetchData() {
  return p;
}

let dataPromise = fetchData();

dataPromise
  .then((data) => {
    console.log(`promise is resolved with value: ${data}`);
  })
  .catch((error) => {
    console.log(`promise is rejected with error: ${error}`);
  });

async function handlePromise() {
  try {
    let data = await fetchData();
    console.log(`promise is resolved with value: ${data}`);
  } catch (error) {
    console.log(`promise is rejected with error: ${error}`);
  }
}

handlePromise();
