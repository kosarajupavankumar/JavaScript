// In Javascript, a promise is an object representing the eventual completion or failure of an asynchorunus  operation

// State of Promise

// Made a Promise ==> Pending State
// Promise is fullfilled ==> Resolved state
// Promise is rejected ==> rejected State
// Setteled ==> Promise Executed

let promise = new Promise((resolve, reject) => {
  // executor (the producing code)
});

function flipCoin() {
  return new Promise((resolve, reject) => {
    try {
      const outCome = Math.random() < 0.5 ? "heads" : "tails";

      if (outCome == "heads") {
        resolve("Heads wins");
      } else {
        reject("tails wins");
      }
    } catch (error) {
      console.error(error);
    }
  });
}

flipCoin();
