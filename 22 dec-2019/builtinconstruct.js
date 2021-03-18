/*
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

A primitive value is a value that has no properties or methods.


*/

//Built-in JavaScript Constructors


 const time = Date();

 console.log(time);

 /*
 When Date is called as a function rather than as a constructor, it returns a String representing the current time (UTC).
 and:
 When Date is called as part of a new expression, it is a constructor: it initialises the newly created object.
 So, new Date(...) returns an object such that obj instanceof Date is true, whereas Date(...) basically returns the same as new Date().toString().
*/

/*
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

*/

//========================================================================================
//JS built-in constructor function, has to be capital letter as well

const getsum = new Function('x', 'y', 'return 1 + 1');

console.log(getsum(1,1));





