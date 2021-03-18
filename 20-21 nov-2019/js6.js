//Booleans can only have two values: true or false.


 //(y === undefined) 


// NULL
/*In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
Unfortunately, in JavaScript, the data type of null is an object.
You can consider it a bug in JavaScript that typeof null is an object. It should be null.*/

//var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//person = null;    // Now value is null, but type is still an object


//Undefined

// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = undefined;   // Now both value and type is undefined


//undefined and null are equal in value but different in type:



// function test() {
//     console.log(typeof num);
// }
// test();

//the third parameter is the first two combined

function greet(name,greeting, message = greeting + ' ' + name) {
    return [name, greeting, message];
}
console.log(greet('david', 'hi', ''));
console.log(greet('david', 'hi', 'happy birthday!'));

 /* need to understand more of var i = 1;
var j = ++i;  // pre-increment:  j equals 2; i equals 2
var k = i++;

console.log(`j = ${j}`);
*/

    //basic array
    /*
        let cars = ['car1','car2','car3'];
        console.log(cars);
*/

/*
//UTC time is the same as GMT time.

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;

console.log(newdate);*/


//basic object 

//object literial is a name:value pair seperated by commas

//Object literals encapsulate data, enclosing it in a tidy package.
 //This minimizes the use of global variables which can cause problems when combining code. 

 /*let myObject = {
     stringProperty: 'here is a string',
     numberProperty: 4,
     booleanProperty: false

 };
 //You can use dot syntax to add a new property to it as follows:
 console.log(myObject.property2 = 'here is another string');

// no need for let objectString = myObject.stringProperty;
console.log(myObject);
*/
 //literal means = taking words in their usual or most basic sense without metaphor or exaggeration.
 
//Object literal property values can be of any data type, including 
//array literals, functions, and nested object literals.
// Here is another object literal example with these property types:

/*let slider = {
    //an array
   images: ['img.jpg','img2.jpg','img3.jpg'],
   //nested object with 2 properties
   pos: {
     x: 40,
     y: 200,
   }, 
   //A method is a function stored as a property, in this case its a unique method.
   onSwap: function sliderStart() {
       //code here
   }
}*/
//OOP js
// basic function 
/*function person(name, favColor) {
    console.log(`hello my name is ${name} and favorite color is ${favColor}`);
}*/

/*let johnName = 'john';
let johnFavColor = 'blue';
// johns profile in variables past into the function
person(johnName, johnFavColor);
person('jane','green');*/

// HOW DO WE ADD STRUCTURE TO OUT DATA? answer is to create an object for john 

/*let john = {
    //object properties 
    name: 'john',
    favColor: 'blue'

}
person(john.name, john.favColor);
*/

/*object oriented programming is to Stop thinking in terms of individual variables and functions 
and BEGIN thinking in terms of cohesive, self-sufficeient objects.

OBJECT = an entity that has data and behavior
in computer programing adding a function to an object is called a method  
*/

/*let john = {
    name: 'john',
    favColor: 'blue',
    //put the function inside the object which now is a method 
    greet: function() {
        console.log(`hello my name is ${john.name} and my favorite color is ${john.favColor}`);
    }
}

john.greet();
*/

// create a CLASS to able to make multiple objects easier 
//CLASS: reusable blueprint or recipe for objects 
/*instance means an example or single occurrence of something.*/

//NEW in javascript is an operator that will create a new instance to our object 
//this is done by creating a constructure function 

//this refers to the object within the function and when the function is called the value changes
//so this refers to which object is currently being created 
//instantiate means = to represent or be an example of something;
//refering to the object = INSTANTIATE object 

// going to create a string that has the person name and fav color
//two paramaters favorite color and first name and a function to add the greeting sentance  
//always use capital letter for the constructure function title 
function Person(firName,favColor) {
    this.firstName = firName,
    this.favoriteColor = favColor,
    this.greet = function() {
console.log(`hello my name is ${this.firstName} and my favorite color is ${this.favoriteColor}`);
    }
}
let john = new Person('john','yellow');
john.greet();

/*
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

SAME AS

//the new operator creates a new empty object 
//sets the value of 'this' to be the new empty object

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
*/

//this defination continued 

//global scope 
// this.table = 'tablez';
// console.log(window.table); // answer tablez



/*function myFunction(num1,num2) {
      return this.num1 * this.num2;

}
console.log(myFunction(3,5));
*/
// or 

const newFunction = (num1,num2) => num1 * num2;

console.log(newFunction(3,5));




const answerTwo = function myFunctionTwo(wordOne,wordTwo) {
    console.log(`hello my name is ${wordOne} and im ${wordTwo}`);
}
answerTwo('john', '18')

// 'this' inside an object 



//create an object with first name last name dob make two people john and mary 
//constructure function 
/*
function Person(firstName,lastName,dob) {
     this.firstName = firstName,
     this.lastName = lastName,
     this.dob = Date()

}

//instantiate object 
let person1 = new Person('firstName','lastName',getFullYear());

console.log(person1.dob);
*/
//es6 sugar syntax -------
