//because there is only one form were using the form attribute 
//taskInput is the the text form 
//The HTML <label> element represents a caption for an item in a user interface.
//task is the id for the text type form 

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//clear input 
taskInput.value = '';


// sumbit event 
/*
form.addEventListener('submit', runEvent);

//Return Value:	A String, representing the type of the event
//The type event property returns the type of the triggered event.

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  //get input value 
  console.log(taskInput.value)
  //add .preventDefault to a form from stopping it redirecting/firing off the page also could be used for other links 
  e.preventDefault();
}
*/
/*
//keydown event 
taskInput.addEventListener('keydown', runEvent);

function runEvent(e) {
  //console.log(e.target.value);
  //adds text 
 heading.innerText = e.target.value;
}
*/
//annimous function style eventlistener 
/*
//keyup event, when the key goes up
taskInput.addEventListener('keyup', function(e) {
  console.log(e.target.value);
});
*/
/*
//keypress event //overall one
taskInput.addEventListener('keypress' , function(e) {
    console.log(e.target.value);
});
*/
/*
//focus event when click into the target 
taskInput.addEventListener('focus', function(e){
  console.log(e.type)
})
*/
/*
taskInput.addEventListener('blur', function(e) {
  console.log(e.type)
}) 
*/
/*
//cut event 
taskInput.addEventListener('cut', click_func);

function click_func(e) {
  console.log(e.type)
}
*/
//past event 
taskInput.addEventListener('paste', funEvent);

function funEvent(e) {
  return type;
}

console.log(funEvent(e))









