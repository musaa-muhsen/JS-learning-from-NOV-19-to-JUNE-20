// .reduce example ======================================================================
// accumulator = a person or thing that accumulates something. //to gather or collect // to accumulate wealth 

// reduce method in arrays 
const numbersZero = [1, -1, 2, 3];

// sum2 = accumulater 
let accumulater2 = 0;
for (let currentValue2 of numbersZero) {
    accumulater2 += currentValue2
}
console.log(accumulater2)

//current value and add it to accumulater 
// this accumulator parameter/arg here is exactly like this sum we have above
// internally {} this reduce method will get this result and store it in the accumulator 

const numbers = [1, -1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log(sum)

//with less code 

//const sum = numbers.reduce()

//instead of languages being hardcoded we’ll use .reduce
//we use .reduce in order to create our string.

//this arrow function example ======================================================================

var hello;
window.age = 35;
// const gooney = {
//     hello: 'hello world'
// } // does not work 
function helloWorld() {
    return 'hello world'
}

hello = function () {
    document.getElementById("demo").innerHTML += this; // hello world
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
//cant add a closure in 2 parts on the eventlistener just the final results so the closure itself 

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.

// closure example ==============================================================

function addTwoDigits(firstDigit) {
    return (secondDigit) => {
        return firstDigit + secondDigit
    }
}
let closure = addTwoDigits(5);
console.log(closure(5))




// if statements 1)does if statement return a value? 2) are they functions or object or niether? they are conditional statments 
//user.greet() //Hello, my name is Tyler and I know JavaScript, Ruby, and Python.