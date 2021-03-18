//Objects of the same type are created by calling the constructor function with the new keyword:
//A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object).
// The resolve and reject functions, when called, resolve or reject the promise, respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred. If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.


const a = 2;
const m = 'yo';
const r = 'nah';
// new instance of a object constructure called Promise function within it is a function with two arguements  

const promise = new Promise(function (resolve, reject) {
  if (a === 4) {
    setTimeout(() => {
      resolve(m);
    }, 1000);
  } else {
    setTimeout(() => {
      reject(r)
    }, 1000);
  }
})

console.log(promise)
promise.then(function (firstStageWithResolve) {
  return firstStageWithResolve;
}).then(function (message) {
  console.log(promise)
  console.log(message);
}).catch((message2) => {
  console.log(promise)

  console.log('failed ' + message2);
})

//console.log(promise)

//console.log(promise)

//promises 2 (traversey) ===================================================

const posts = [
  { title: 'Post One', body: 'This is post one.' },
  { title: 'Post Two', body: 'This is post two.' }
];

//The return statement ends function execution and specifies a value to be returned to the function caller.

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // const error = false;

      // if (error === false) {
      resolve();
      // } else {
      //    reject('Error, something went wrong!')
      // }   
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three' })
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });


//===================================================================================
/*
chooseToppings()
.then(toppings =>
  placeOrder(toppings)
)
.then(order =>
  collectOrder(order)
)
.then(pizza =>
  eatPizza(pizza)
)
.catch(failureCallback);

//even shorter
//This works because with arrow functions () => x is valid shorthand for () => { return x; }.

chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);

//You could even do this, since the functions just pass their arguments directly, so there isn't any need for that extra layer of functions:

chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
*/