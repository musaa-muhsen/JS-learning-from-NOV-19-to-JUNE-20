// function analogy Whether I press the button, you press the button, or someone else presses the button doesn’t matter. Whenever the button is pressed, like it or not, the machine is going to run.

const add = function (x, y) {
    return x + y
}

const me = add;
const you = add;
const meAndYou = add

// console.log(me(5, 10))
// console.log(you(5, 10))
// console.log(meAndYou(5, 10))

/*
In the code above we assign the add function to three different variables,
me, you, and someoneElse. It’s important to note that the original add 
and each of the variables we created are pointing to the same spot in memory.
They’re literally the exact same thing under different names. 
So when we invoke me, you, or someoneElse, it’s as if we’re invoking add.
*/

// callback function example 2

function add2(x, y) {
    return x + y
}
function callback3(a, b) {
    return a * b;

}
function callback2() {
    console.log('yo bitch');
    console.log(callback3(3, 10))
}
function higherOrderFunction(x, callback, callback2) {
    callback2()
    return callback(x, 5)
}

console.log(higherOrderFunction(10, add2, callback2))

/*
above 
This highlights some important concepts of the JavaScript language. First, just as you can pass a string or a number as an argument to a function, so too can you pass a reference to a function as an argument.
 When you do this the function you’re passing as an argument is called a callback function and the function you’re passing the callback function to is called a higher order function.
*/




// How do you create a Promise?
//const promiseOne = new Promise();


/*
How do you change the status of a promise?

The Promise constructor function takes in a single argument, a (callback) function. This function is going to be passed two arguments, resolve and reject.
resolve - a function that allows you to change the status of the promise to fulfilled
reject - a function that allows you to change the status of the promise to rejected.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

console.log('promise before being resolved -', promise)

setTimeout(() => {
    console.log('promise after being resolved -', promise)
}, 2000) // doesnt get revoled 

/*
One thing we haven’t talked about yet is what a promise actually is. 
When you create a new Promise, you’re really just creating a plain old JavaScript object.
This object can invoke two methods, then, and catch. Here’s the key. 
When the status of the promise changes to fulfilled, the function that was passed to .then will get invoked.
When the status of a promise changes to rejected, the function that was passed to .catch will be invoked. 
What this means is that once you create a promise, you’ll pass the function you want to run if the async request is successful to .then. 
You’ll pass the function you want to run if the async request fails to .catch.
*/


//chaining promises 
/*
Both .then and .catch will return a new promise. That seems like a small detail but it’s important because it means that promises can be chained.

In the example below, we call getPromise which returns us a promise that will resolve in at least 2000 milliseconds. From there, because .then will return a promise, 
we can continue to chain our .thens together until we throw a new Error which is caught by the .catch method.
*/
function getPromise() {
    return new Promise((resolve) => {

        setTimeout(resolve(), 2000)
    })
}
// var value1 = 'hello world';
// function logA() {
//     console.log('A')
// }

function logB() {
    console.log('B')
}

function logCAndThrow() {
    console.log('C')

    throw new Error()// Error objects are thrown when runtime errors occur.
    //  throw new Error('Whoops!')

}

function catchError() {
    console.log('Error!')
}


getPromise()
    .then((logA) => {
        function logA() {
            console.log('A')
        }
    }) // A
    .then(logB) // B
    .then(logCAndThrow) // C
    .catch(catchError) // Error!

/*
Cool, but why is this so important? Remember back in the callback section we talked about one of the downfalls of callbacks being that they force you out of your natural, sequential way of thinking. When you chain promises together, it doesn’t force you out of that natural way of thinking because chained promises are sequential. getPromise runs then logA runs then logB runs then....

Just so you can see one more example, here’s a common use case when you use the fetch API. fetch will return you a promise that will resolve with the HTTP response. To get the actual JSON, you’ll need to call .json. Because of chaining, we can think about this in a sequential manner.
*/


// async await =========================================

//async functions return a promise

async function asyncExample() {

}

const hasPromise = asyncExample();

console.log(hasPromise) // Promise {<resolved>: undefined}

//anytime you add async to a function, that function is going to implicitly return a promise





