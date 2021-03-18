// off course 
//const colorOne = ['yellow', 'blue'];
//const colorTwo = ['pink','green'];
//colorOne.push('purple');
//const colorsTogether = colorOne.concat(colorTwo);
//console.log(colorsTogether);
//const name = 'john';
//const age = 30;
//concatenation 
//console.log('my name is ' + name + ' and I am ' + age);
//template string
//const hello = `my name is ${name} and I am ${age}`;
//my name is john and i am 30
//console.log(hello); 
//string methods ------------------------------------------ 
//const s = 'hello world';
//length is a property so there is no need for brackets becyuase its not a method  
//console.log(s.length); //answer 11
//a method is basically a function that is associated with an object
//console.log(s.toUpperCase()); //text transform upper
//console.log(s.substring(0,5)); //answer = hello
//console.log(s.toUpperCase().substring(5,11)); // answer = WORLD 
//console.log(s.split('')); //spilts the letters individuly
//const n = 'apples, pears, bananas, oranges';
//console.log(n.split(', ')); // spilts into 4 arrays 
//arrays -------------------------------------
// arrays are variables that hold mutple values
//const numbers = new Array(1,2,3,4,5); // 5 arrays 
//const fruits = ['apples', 'oranges', 'pears', 10, true ]; // different data types 
//console.log(fruits[0]); //answer = apples
//fruits[5] = 'grapes';
// array methods vvvv
//fruits.push('mangos'); // adds the end 
//fruits.unshift('strawberries'); // adds to the start
//fruits.pop(); // removes the last array
//console.log(fruits);
//console.log(Array.isArray(fruits)); // true 
//console.log(fruits.indexOf('oranges'));
//OBJECT LITERALS are basically just key value pairs 
/*const person = {
       firstName: 'John',
       lastName: 'Doe',
       age: 30,
       hobbies: ['music','movies','sports'], //array
       address: {
           street: '50 main st',
           city: 'Boston',
           state: 'MA'
       }

}*/
//console.log(person.firstName, person.lastName);// separate the console with commas 
//console.log(person.hobbies[1]);
//console.log(person.address.city);
// destructering es6 more advance stuff
//const {firstName, lastName, address: {city} } = person;
//console.log(city);
//add properties
//person.email = 'john@gmail.com'; //adding properties 
//console.log(person);
//Arrays of objects & json -----------------------------
//array with objects????
/*const todos = [
   {
    id: 1,
    text: 'take out trash',
    isCompleted: true
   },
   {
    id: 2,
    text: 'meeting with boss',
    isCompleted: true
   },
   {
    id: 3,
    text: 'walk dog',
    isCompleted: false
   }
];
*/
//console.log(todos[1].text); //second value of the array second one, then added a property
//JSON = this is how you would send data to the server
//const todosJSON = JSON.stringify(todos);
//console.log(todosJSON);
//for loops
/*for (let i = 0; i <= 10; i++){
    console.log(`for loop number = ${i}`);
}*/
//while loop old school style difference is you set the variable outside of the loop 
/*let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}*/
// add .id .text etc don't understand completley 
/*for (let i = 0; i < todos.length; i++){
    console.log(todos[i]);

}

for (let todo of todos) {
    console.log(todo.id, todo.text);
}
*/
//high order array methods = forEach, map, filter = all three same structures 
//  todos.forEach(function(todo){
//      console.log(todo.text.toUpperCase().split(''));
// });
// const todoText = todos.map(function(todo){
//    return todo.text;
// });
//Note that $.map() builds a new array. If you want to modify your existing array in-place, you can use $.each() with an anonymous function:
/*const todoText = todos.map(function(x) {
     return x.text.toUpperCase();
 }); // makes a separate array containing all three

 console.log(todoText);
*/
// same thing below but with arrow function
/*
const todoText2 = todos.map((t) => {
    return t.text;
});

console.log(todoText2);
*/
//functional programing vvv 
//gets the todo that is completed and adds text
/*const todoCompleted = todos.filter((t) => {
       return t.isCompleted === true;
}).map((t) => {
     return t.text;
});

console.log(todoCompleted);
*/
// conditionals
/*const x = 11;

if(x === 10) {
    console.log('correct');
} else if (x > 10) {
     console.log('bit high');
} else {
    console.log('bit low');
}
*/
/*const y = 4;
const z = 5;

if(y === 4 || z === 6) {
    console.log('if is equal to 2 OR z is equal to 6 then show');
}

if(y === 4 && z === 5) {
    console.log('if is equal to 2 AND z is equal to 6 then show');
}

//same as v^

if (y === 4) {
    if (z === 5) {
        console.log('if is equal to 2 AND z is equal to 6 then show');
    }

}*/
//condition ternary operator ? = then : colon = else 
//const x = 10;
//const color = x > 10 ? 'red' : 'blue';
//console.log(color);
//condition ? exprIfTrue : exprIfFalse
//switch condition 
/*const color = 'green';

switch(color) {
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
    console.log('color is NOT red or blue');
    break;
}*/

// functions 

// parameters inside the parenthesus are overwritten 
/*function addNums(num1 = 1, num2 = 1) {
     return num1 + num2;
 }

console.log(addNums(5,5));
*/
// same as above but 
/*function addNumsTwo(num1,num2) {
    console.log(num1 + num2)
}
addNumsTwo(3,3);*/
//functions es6 style =>
/*const addNums = (num1, num2) => {
   return num1 + num2;
}

console.log(addNums(3,8));*/
// alternatively from above 
/*const addNums2 = (num1,num2) => console.log(num1 + num2);

addNums2(5,5);*/
// beacuse there is only one expresion more stream lined  
//const addNums = (num1,num2) => num1 + num2;
//console.log(addNums(3,4));
//stream lined if only one PARAMOTER  
// const addNums = num1 => num1 + 5;
// console.log(addNums(5));
//linked to the todo array dont really uderstand 
// todos.forEach((todo) => console.log(todo));


//constructor functions and prototypes 
//objects? need to research more 
//constructor function
/*class yo {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
}

//instatiate object 

const person1 = new yo('John', 'Doe', '4-3-1980');
const person2 = new yo('mary', 'smith', '3-8-1970');

console.log(person1);
//console.log(person1.lastName, person2.firstName);
*/
//THE DOM

// single elements the best ones 

//const form = document.getElementById('my-form');
//const h1 = document.querySelector('h1');

//multiple element use only queryselectorall

//const allSelector = document.querySelectorAll('ul');
//const classOnly = document.getElementsByClassName('item');
//const tags = document.getElementsByTagName('ul');

//console.log(allSelector);
const items = document.querySelectorAll('.items');

console.log(document.querySelectorAll('.item'));
//items.forEach((item) => console.log(item));




// function changeText(id) {
//     id.innerHTML = "Ooops!";
//   }
//form.style.backgroundColor ='red';







