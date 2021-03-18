/*
A symbol is a javaScript primitive data type 
(Number, String, Boolean, null, undefined, Symbol())

Every symbol value returned from Symbol() is unique.

A symbol value may be used an identifier for object properties; this is the data type's only purpose.
*/

let log = console.log

const s1 = Symbol();
const s2 = Symbol(123);
const s3 = Symbol('steve');

// log(s1);
// log(s2);
// log(s3);

// log(Symbol('123') === Symbol('123')); //false 

//main reason for symbol = unique Object keys 
const key1 = Symbol();
const key2 = Symbol('sym2');



// ??create an object with the property key as the symbol 
// so whenever you want to use a vaviable as a key you don't want to like this myObj.key1 because what it's doing is it's just at this as a normal property.
// If you want to use an actual variable then you want to use the brackets syntax myObj[key1]. myObj.key1 was not using the variable key1 as a property.   

//create an object by setting myObj set to an object 
const myObj = {}; 

myObj[key1] = 'property 1'; //property objects?
myObj[key2] = 'property 2'; //property objects? 
myObj.key3 = 'property 3'; //property with variables??
myObj.key4 = 'property 4';//property with variables??

// log(myObj[key1]);
// log(myObj.key2);


// symbols are not enumerable in for...in  
// enumerable = Capable of being put into one-to-one correspondence with the positive integers; denumerable.
for(let i in myObj) {
   console.log(`${i}: ${myObj[i]}`);
}

console.log(JSON.stringify(myObj));
console.log(JSON.stringify({['hello']: 'prop'}));

// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };

  console.log(person["lastName"]);