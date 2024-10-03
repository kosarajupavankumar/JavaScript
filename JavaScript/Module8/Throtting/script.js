const search = document.querySelector("#search");

function throttle(fn, time) {
    let last = 0;
    return function(){
    let cur = new Date().getTime();
        if(cur - last >= time){
            fn.apply(this, arguments)
            last = cur;
        }
    }
}

search.addEventListener(
  "click",
  throttle(() => {
    console.log("Fetching data...");
  }, 1000)
);
