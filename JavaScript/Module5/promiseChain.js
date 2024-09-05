// The .then() method returns a new Promise , which allows for sequential execution of asynchronus operations

let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve("cleaned the room");
  });
};

let removeGarbage = function () {
  return new Promise((resolve, reject) => {
    resolve("removed the garbage");
  });
};

let winIceCream = function () {
  return new Promise((resolve, reject) => {
    resolve("You won the Ice cream ");
  });
};
/* cleanRoom()
  .then((message) => {
    console.log(message);
    removeGarbage()
      .then((message) => {
        console.log(message);
        winIceCream()
          .then((message) => {
            console.log(message);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {}); */

cleanRoom()
  .then((message) => {
    console.log(message);
    return removeGarbage();
  })
  .then((message2) => {
    console.log(message2);
    return winIceCream();
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.log(error);
  });
