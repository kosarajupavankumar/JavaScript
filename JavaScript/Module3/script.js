// lexical scope

var a = 20;
function parent() {
  console.log(a);
}

parent();

function parent() {
  var a = 10;

  function child() {
    console.log(a);
  }

  child();
}

parent();

/* lexical scope is the ability for a function scope to access variables from the parent scope. we call the child function to be lexically bound by that of the parent function. This is called as scope chaining */



