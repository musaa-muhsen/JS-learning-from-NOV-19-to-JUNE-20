//generators js 


// yield = produce or provide

// Usecase of Generators:
// There are many use cases for generators ,
// simpler asynchronous code
// we can execute simple asynchronous block of code.
// 2. receiving asynchronous data using generators

//The yield* expression is used to delegate to another generator or iterable object.
// generators are similar but they're more they're basically functions that can return multiple values. Ok they can what's called yield values.


//Once paused on a yield expression, the generator's code execution remains paused until the generator's next() method is called. Each time the generator's next() method is called, the generator resumes execution, and runs until it reaches one of the following:

// The While Loop
// Syntax
// while (condition) {
//     // code block to be executed
//   }

// generator example 
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);


// ID generator that is infinite 
function* makeIds() {
   let idNum = 1;
   
   while(true) {
       yield idNum++;
   }

}

const gen = makeIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



//The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.

