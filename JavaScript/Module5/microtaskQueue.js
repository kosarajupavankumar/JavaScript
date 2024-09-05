const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

console.log("start");

setTimeout(() => {
  console.log(`Hi`);
}, 1000);
console.log("End");

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(err);
    
})
