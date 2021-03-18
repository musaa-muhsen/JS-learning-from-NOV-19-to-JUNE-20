//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://learn.tylermcginnis.com/courses/369735/lectures/6377473

Object.create allows you to create an object which will delegate to another object on failed lookups. 
Put differently, Object.create allows you to create an object and whenever there’s a failed property 
lookup on that object, it can consult another object to see if that other object has the property. 
*/
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
console.log(person)
const me = Object.create(person);
console.log(me)
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

//====================================================================================================================================
//====================================================================================================================================



const animal = {}
console.log(animal)// might be creating an empty object or on in animal there is another layer of prototype which is empty then there is the normal object prototype inheritance on the object prototype ???
const dog = Object.create(animal);
console.log(dog)

// whenever there’s a failed lookup on an instance of Dog // just mean looking down the js prototype chain ???

const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
}

const child = Object.create(parent) // child is  essiantly making a new object {} ---> parent is chained on 
console.log(child.name)// stacy
child.name = 'Ryan' // // overwrote name from parent 
child.age = 7 //overwrote age from parent 

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish 

//====================================================================================================================================
//====================================================================================================================================

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions

//Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced. It is a shorthand for a function assigned to the method's name.


const animalMethods = {
    // old style 
    //eat : function (amount) {}
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}


console.log(animalMethods)

//====================================================================================================================================
//====================================================================================================================================

// https://www.youtube.com/watch?v=GhbhD1HR5vk&t=4s

let doggy = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound)
    }
}

doggy.talk()// 'woof'
//const woof2 = new doggy; //Uncaught TypeError: doggy is not a constructor
let talkFunc = doggy.talk
let boundFunc = talkFunc.bind(doggy); // undefined
boundFunc();
// so in a function the 'this' keyword it does refer to like the context where the unction was it refers to the context where the function is being called 
//const talkFunction = dog.walk
// above is equvilate to below 
const talkFunction = function () {
    console.log(this.sound);
}
//talkFunction(); //undefined 

//====================================================================================================================================
//====================================================================================================================================

// callback test 
function outer(x) {
    return function closure(x) {
        return x + y;
    }
}

let theOuter = outer(5);

// so you need to make closure the y, 

// what is console.log()?????
console.log()


//var count = '' for string 
let countNum = 0;

function makeAdder(x) {
    // return x;

    return function inner(y) {
        return x + y;
    };
}

//var add5 = makeAdder('hello '); // helloundefined

let add5 = makeAdder(5);
console.log(add5) //ƒ inner(y) { return x + y; }
console.log(add5());
//console.log(add5()) //NaN when invoking add() you get NaN at this point maybe because you're using 5 as a arguement then trying to pass that in to the function and trying to return it with a function is NaN situation 
//countNum += add5(2)
console.log(countNum)