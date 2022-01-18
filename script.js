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
