//callbacks are is just a function that be passed in to another function and then called within that function

// A callback is simpley a function that's passed in as a parameter to another function and then it's ran inside the function body.
// below is array of object literals 

const posts = [
   { title: 'Post One', body: 'This is post one.' },
   { title: 'Post Two', body: 'This is post two.' }
];
/*
//console.log(Array.isArray(posts));
// cb parameter in createPost function is included in the body of createPost after the 3rd object is added 
//call_back in the body is getPosts()
 function createPost(post, call_back) {
     setTimeout( function() {
     posts.push(post);
     call_back();
     }, 2000);
}

function getPosts() {
    setTimeout(function() {
       let output = '';
       posts.forEach(function(post){
          output += `<li>${post.title}</li>`;
       });
       document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three' }, getPosts);
*/
// so we have added getposts as a function because it is included in createPost as the second parameter  
//getPosts();

//added parametor is another function 




// function greeting(name) {
//    alert('Hello ' + name);
//  }

//  function processUserInput(callback) {
//    var name = prompt('Please enter your name.');
//    callback(name);
//  }

//  processUserInput(greeting);

// example 3 =============================================

// add() function is called with arguments a, b and callback, callback will be executed just after ending of add() function 



function add(callback1, callback2, callback3) {
   setTimeout(() => {
      callback1();
      callback2();
      callback3();
   }, 2000);
}

function quickMaths() {
   setTimeout(() => {
      console.log(4 * 4);
   }, 300);
}

function disp() {
   setTimeout(() => {
      console.log('This must be printed after addition 1st');
   }, 400);
}
function disp2() {
   setTimeout(() => {
      console.log('This must be printed after addition 2nd');
   }, 500);
}
// Calling add() function with 3 arguemnts with no parentheses 
add(quickMaths, disp, disp2);  
