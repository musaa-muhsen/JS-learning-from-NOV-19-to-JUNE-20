
// let x, y, z; // no need 

function func1(a, b, c = 10) {
    console.log(x = a)
    console.log(y = b)
    console.log(z = c)
    //console.log(arguments[1]);
    // expected output: 2
    //console.log(arguments[0]);
    // expected output: 3
}

func1(2, 3);

//=========================================================================================
//=========================================================================================

function greet(l1, l2, l3) {
    console.log(
        `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
}


const user = {
    name: 'Tyler',
    age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(this, languages[0], languages[1], languages[2])
//Hello, my name is  and I know JavaScript, Ruby, and Python

// hello my name is global in this context, then the rest 
//=========================================================================================
//=========================================================================================

//https://medium.com/@owenyangg/javascript-call-apply-and-bind-explained-to-a-total-noob-63f146684564

var owen = {
    name: "Owen",
    name: "tom?"
}

function sayTo(first, second) {
    console.log(this);
    return first + " " + this.name + " " + second;
}
// 'this' in this context is part of a name property  
// we want owen because owen is the object with property of name 
// we use .call method added on to the sayTo function and pass in the existance arguements as part of the callback 

//=========================================================================================
//=========================================================================================

function add(x, y) {
    return x + y
}

//const me = add
//console.log(me) // ƒ add(x, y) {return x + y}
//console.log(me(2, 3)) //5

const me = add() // because it's already been invoked and gone on the call stack and done its thing before assigining it to a variable the variable becomes almost obsulote but for some reason becomes a number value  
console.log(me) // NaN
console.log(typeof me) // number
if (me == 1) {
    console.log('yes')
} else {
    console.log('no')
}
//console.log(me(2, 3)) // Uncaught TypeError: me is not a function

//=========================================================================================
//=========================================================================================

// becuase js script has already read the script it always picks the last object 

var pets = {
    animalType: 'dog',
    animalType: 'CAT'
}
var pets = {
    animalType: 'CROC',
    animalType: 'FROG'
}


function animalTypeFunc(first, second) {
    console.log(first + this.animalType + second);
}

animalTypeFunc.call(pets, 'This is pet: ', ' and they\'re great.');

//=========================================================================================
//=========================================================================================

function product(name, price) {
    this.name = name;
    this.price = price;
}// the call() method explicity calls a function (with some kind of constructor 
// Product constructor function is the "this" value in Product.call(this, 
function Food(name, price) {
    let bindo = product.bind(this, name, price);
    // this.name = name;
    console.log(bindo) // ƒ product(name, price) { this.name = name; this.price = price;}
    // this.price = price;
    this.category = 'food';
}
const theFood = new Food('cheese', 5)
console.log(theFood.name);
  // expected output: "cheese"


