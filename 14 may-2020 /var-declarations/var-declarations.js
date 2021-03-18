/*
Variable Declaration vs Initialization

const means it defines a constant reference to a value.

below we have, a variable declaration introduces a new indentifier = 
var declaration 
Above we create a new identifier called declaration. In JavaScript, variables are initialized with the value of undefined when they are created. What that means is if we try to log the declaration variable, we’ll get undefined.

*/
// console.log(declaration)// Uncaught ReferenceError: Cannot access 'declaration' before initialization
//let declaration;
//console.log(declaration) // here is undefined 

//console.log(declaration) // here is undefined so you can initialize before  
//var declaration;
//console.log(declaration) // here is undefined also 

var declaration_one
console.log(declaration_one) // undefined 
declaration_one = 'this is an initialization' // so here we're initializing the declaration variable by assigning it to a string.
console.log(declaration_one) //this is an initialization
/*
 so if you create a new variable you have declared a new variable with a new identifier so var is
 variable declaration and the name is the new identifier after this process
 if we use the variable that is called initialization, by default if we
 initialize the variable it has the value of undefined
*/

// SCOPE ===================================================================================

// scope means the extent of the area or subject matter that something deals with or to which it is relevant.
/*
SCOPE defines where variables and functions are accessible inside of your program. In JavaScript,
there are two kinds of scope - global scope and function scope, according the official spec.
*/

// any nested functions within a function can access the variable but nothing outside of the fucntion 


// Hoisting
/*
Remember earlier we said that “In JavaScript, variables are initialized with the value of undefined when
they are created.”. Turns out, that’s all that “Hoisting” is. The JavaScript interpreter will assign variable
declarations a default value of undefined during what’s called the “Creation” phase.
*/

// let VS const 
/*
The main difference between var and let is that instead of being function scoped, let is block scoped.
What that means is that a variable created with the let keyword is available inside the “block” that
it was created in as well as any nested blocks. When I say “block”, I mean anything surrounded by a
curly brace {} like in a for loop or an if statement.
*/

/*
var vs. let vs. const

var: 
  function scoped
  undefined when accessing a variable before it's declared

let: 
  block scoped
  ReferenceError when accessing a variable before it's declared

const:
  block scoped
  ReferenceError when accessing a variable before it's declared
  can't be reassigned
*/

/*
below is refering to when trying log a variable before it was declared

I can’t think of any use case where you’d actually want to access a variable before it was declared.
It seems like throwing a ReferenceError would be a better default than returning undefined. In fact,
this is exactly what let does. If you try to access a variable declared with let before it’s declared,
instead of getting undefined (like with those variables declared with var), you’ll get a ReferenceError.
*/

//let vs. const

// immutable = unchanging over time or unable to be changed.

// Well, not quite. Just because a variable is declared with const doesn’t mean it’s immutable, all it means is the value can’t be re-assigned. Here’s a good example.

const person = {
    name: 'Kim Kardashian'
}

person.name = 'Kim Kardashian West' // ✅

person = {} // ❌ Assignment to constant variable.

// Notice that changing a property on an object isn’t reassigning it, so even though an object is declared with const, that doesn’t mean you can’t mutate any of its properties. It only means you can’t reassign it to a new value.

/*
So to recap, var is function scoped and if you try to use a variable declared with var before the actual declaration, you’ll just get undefined. const and let are blocked scoped and if you try to use variable declared with let or const before the declaration you’ll get a ReferenceError. Finally the difference between let and const is that once you’ve assigned a value to const, you can’t reassign it, but with let, you can.
*/

// just remember there is also function hoisting as well 