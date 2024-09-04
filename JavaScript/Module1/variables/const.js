const name = "pavan"
const age = 29;

console.log(name);
console.log(age);

name = "rahul"; // error 

function random(){
    if(true){
        const x = 10;
    }

    console.log(x); // error x is not defined
}

random();