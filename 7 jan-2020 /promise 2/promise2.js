// A promise can ALSO be called by creating a Promise constructor, so a promise can be called in different ways  
// The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.

//fetch('http://example.com/movies.json')

//above is fetch containing a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
// This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method (defined on the Body mixin, which is implemented by both the Request and Response objects.)
//The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:

// promise is an object 
//promises states in fetch:

// 1)pending = state from fetch is when waiting for the data to arrive
// 2)fulfilled = it's been succuesfully resolved i have the results back from the api 
// 3)rejected = some error has happened 


//fetch gives me promise once i have that promise i have it as an object and you can do all sorts of things with it
// promise it's an object can be in a certain state  


//const promise1 = fetch(url)

//using fetch i don't need to query the promise continously I can use something called then and catch
//then is a function that receives a function to be excuted (it's kind of like a callback) when it's has been fulfilled 
//and catch receives a function to be executed when it has been rejected 

// fetch promise 

fetch('v2p5.json')
.then((resp) =>{
   return resp.json();
}).then((outcome) =>{
     console.log(outcome);
});
// attaches callbacks for the rsolution and/or rejection of the pormise   


//async version =============================================

async function getUsers() {
const response = await fetch('v2p5.json');
const data = await response.json();
console.log(data);
}

getUsers().then((users) => {
  return users
}
);

/*
function callBack(fruit) {

    const fruitsYo = fruit;
    console.log(fruitsYo)

}
const fruits = ['banaa' , 'apple', 'pear'];

fruits.forEach(callBack);

//same as 


// fruits.forEach( function(fruit) {
//      console.log(fruit);
// })
*/


// forEach is a callback function so we have an array of fruits which foreach funtion cycles and as a parameter for each method we pass in this callback function and 
//that call back function can do thing with whatever data is passed to it in this case is passed the value of whichever array pocket we're up to in the for each cycle
// so a callback is just a function which is provided as a parameter to out other methods such as forEach and it is invoked and it is invoked at certain point in time
//now the example below is declared in line which basically means we've written all of this code inside these parentheses (inside the forEach) as a parameter 


//A promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.

//await the result instead of having to fetch and call then 

//simple callback function 

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }

  function alertFinished(){
    alert('Finished my homework');
  }

  doHomework('math', alertFinished);


  //asyn await = asyncoronous function that returns a promise 


  //seperate 
  //then() is invoked when a promise is either resolved or rejected.