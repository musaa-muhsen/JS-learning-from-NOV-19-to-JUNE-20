//addEventListener 
//syntax 
//element.addEventListener(event, function, useCapture)
//at least 2 arguements needed 

const clearTasksBtn = document.querySelector('.clear-tasks');

/*
clearTasksBtn.addEventListener('click', function(e){
  console.log('hello world')
  e.preventDefault();
})

//same as (below function outside the "event listener")

clearTasksBtn.addEventListener('click', click_func);

function click_func(e) {
  console.log('hello world');
  e.preventDefault();

}
*/
//same as (below worst way to do it) 
/*
clearTasksBtn.onclick = click_func;

function click_func(e) {
  console.log('hello worldz');
  e.preventDefault();

}
//or use onmouseover (notice all lowercase)

clearTasksBtn.onmouseover = click_func;

function click_func(e) {
  console.log('hello worldz');
  e.preventDefault();
}
*/

//The target event property returns the element that triggered the event.
//The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.

clearTasksBtn.addEventListener('click', click_func);

function click_func(e) {
  e.preventDefault();
  let val;
  val = e;

  //event target element
  val = e.target; //a:link btn tag
  val = e.target.id; //no id 
  val = e.target.className; //will get all the classes that are associated with the event 
  val = e.target.classList[0]; // you get the all classes as lists //DOMTokenList(3)
  //val = e.target.innerHTML = 'yoooo';
  //when you fire off an even you can do anything we have learnt prevousily including styling and much more!

  //event type 
  val = e.type; //click event 

  //timestamp
  val = e.timeStamp;

  //coords event relative to the window 
  //clintx/y = Returns the horizontal/vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered
  val = e.clientY; //vertical 
  val = e.clientX; //horizontal

  //coords event relative to the element 
  val = e.offsetY;// vertical 
  val = e.offsetX;//horizonal

//event object 

  console.log(val);

}

