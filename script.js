'use strict';

// Scoping

/*
asks the ques "where do variables live?" or "where can we access a certain variable and where not?"
*/
/*

3 types of scope: the global scope, scopes defined by functions and scopes defined by blocks.

only let and const variables are block-scoped. variables declared with var end up in the closest function scope

in javascript, we have lexical scoping, so the rules of where we can access variables are based on excatly where in the code functions and blocks are written

every scope always has access to all the variables from all its outer scopes. this is the scope chain!

when a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. this is called variable lookup

the scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;  

the scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;

the scope chain has nothing to do with the order in which  functions were called. It does not affect the scope chain at all!

*/

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // reassigning outer scope's varaiable
      output = 'New output!';
    }
    //console.log(str); no defined
    console.log(millenial); // it can be defined if var is used

    //console.log(add(2, 3));

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge(); cannot be defined here

//Hoisting
// makes some types of variables accessible/usable in the code before they are actually declared. variables lifted to the top of their scope

//functional declarations : hoisted-> yes, initial value -> actual function, scope-> block,

// var variables: hoisted -> yes, initial val: undefined, scope -> function

// let and const variables: hoisted-> no; initial value -> <uninitialized>, TDZ; scope-> block

// function expressions and answers

//TDZ= temporal dead zone ; makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
// make const variables actually work

//why hoisting?
//using functions before actual declaration;
// var hoisting is just a byproduct

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//functions
console.log(addDec1(2.3));
//console.log(addExpr(2,3));
console.log(addArrow(2, 3));

function addDec1(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// window is a global object of js in browser

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//This Keyword

/*
this keyword: special variable that is created for every execution context (every function). takes the value of (points to) the 'owner' of the function in which the this keyword is used.

this is not static. depends on how the function is called its value is only assigned when the function is actually called.

method this = <object that is calling the method>

simpple function call this = undefined (in strict mode)

arrow functions (dont get own this) this = <this of surrounding function (lexical this)>
 
event listener this = <DOM element that the handler is attached to>

this does not point to the function itself, and also not the its variable environment!




*/
