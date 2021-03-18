// This process of assigning variable declarations a default value of undefined during the creation phase is called Hoisting.


/* =================================================================================================================
====================================================================================================================
============================================================================================================== */

var name = 'Tyler'
var handle = '@tylermcginnis'

function getURL(handle) {
    var twitterURL = 'https://twitter.com/'

    return twitterURL + handle
}

console.log(getURL(handle))

/* =================================================================================================================
====================================================================================================================
============================================================================================================== */

function foo() {
    var bar = 'Declared in foo'
}

foo()

console.log(foo())
// Foo = is an intentionally meaningless placeholder word often used in computer programming.
// authoring = the writing of an electronic document or software program, especially a hypertext or multimedia application (often used attributively):


//MDN defines “Scope” as “The current context of execution.” Sound familiar? We can think of “Scope” or “where variables are accessible” in a very similar way to how we’ve been thinking about execution contexts.
// Execution Context has been popped off the Execution Stack

/* =================================================================================================================
====================================================================================================================
============================================================================================================== */
/*
function first() {
    var name = 'Jordyn';

    console.log(name);
}

function second() {
    var name = 'Jake';

    console.log(name);
}

console.log(name);
var name = 'Tyler';
first();
second();
console.log(name);
*/
/* =================================================================================================================
====================================================================================================================
============================================================================================================== */

var name = 'Tyler'

function logName() {
    console.log(name)
}

logName()

/*
This process of the JavaScript engine going one by one and checking each individual parent Execution Context if a variable
doesn’t exist in the local Execution Context is called the Scope Chain. JavaScript Visualizer shows the Scope Chain by having
each new Execution Context indented and with a unique colored background. Visually you can see that any child Execution Context
can reference any variables located in any of its parent Execution Contexts, but not vice versa.
*/


var count = 0

function makeAdder(x) {
    return function inner(y) {
        return x + y;
    };
}

var innerWith5 = makeAdder(5);
console.log(innerWith5); //ƒ inner(y) {return x + y;}
count += innerWith5(2)
console.log(count);



//null = null is an assignment value. It can be assigned to a variable as a representation of no value
//As you probably guessed, this concept of a child function “closing” over the variable environment of its parent function is called Closures.

// var count = 3

// function makeAdder(x) {
//     return function innerAlert(y) {
//         alert(1)
//     };
// }

// var add5 = makeAdder(5);
// innerAlert() //10 