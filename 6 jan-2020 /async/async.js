
//let promise = new Promise(function(resolve, reject) {
//}

//instead of above 
// async function myFunc() {
//     return 'hell';
// }



// console.log(myFunc());

// myFunc().then( function(resp) {
//     console.log(resp);
// });

// it waits for the promise to be resolved until it actually sends the response 
// The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.
// returns a promise 'return res;' return a promise? 
// Async/await is actually just syntax sugar built on top of promises.
// synchronous = This means only one operation can be carried out at a time
// Async and Await are extensions of promises
// Async functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread.
// Using async simply implies that a promise will be returned, and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value.
// We can’t use the await keyword inside of regular functions.


// async function expression.
// let hello = async function() { console.log("YO!") };
// hello();
// //even shorter 
// const go = async () => {return 'yo!'} ;
// console.log(go())
//.then( (response) => console.log(response));


//Ah. Invoking the function now returns a promise. This is one of the traits of async functions — it turns any function into a promise.
/*
async function myFunc() {

    const promise1 = new Promise((resolve, reject) => {
      setTimeout(()=> resolve('hello') , 1000);
    }); 

    const res = await promise1; //wait until promise is solved 
    return res;

}

myFunc()
.then(resp => console.log(resp));

*/


// promise basics again =======================================================================================
/*

const promise1 = new Promise((resolve, reject) => {
    const hell = 'hel';
    const dataRes = 'yooooo';
    const dataRej = 'nooooo';

    if(hell === 'hell') {
   resolve(dataRes);
    } else {
   reject(dataRej);
    }
}); 

promise1
.then(function(data) {console.log(data);})    //then(data => console.log(data);)
.catch((err) => console.log(err));
*/

//mdn async==================================

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        const yes = 3;
        if (yes === 1) {
        resolve('Resolved.'); 
      } else {
          reject('Reject.')
        
      }
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
  }
  
  asyncCall().catch( function(error) {
    return console.log(error);
  });

/*
async function firstAsync() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    return result
    }


console.log(firstAsync());
// .then(function(resp) {
//     console.log(resp);
// });
*/


async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done yo!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    }
//firstAsync(); 

// async function firstAsync() {
//   return 27;
// }
// firstAsync();

// async function f() {
//   return Promise.resolve(1);
// }

// f().then(alert); // 1

//same as 

// async function f() {
//   const promise1 = new Promise((res,rej) => {
//      res(1)
//   }) 
//   return promise1
// }

// f().then(alert);

// const q = new Promise(function(res,rej) {
//    res(2)
// });

// q.then(alert)

