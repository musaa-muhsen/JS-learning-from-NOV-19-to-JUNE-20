const form = document.querySelector('form'); 
const taskInput = document.getElementById('task'); //<input type="text" name="task" id="task" value="Walk the dog">
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = ''; // to clear the text input 


// events when submitting 
/*
// submitting the page 
form.addEventListener('submit', eventHandler);

function eventHandler(eventObj) {
  const e = eventObj;
  console.log(`Event type: ${e.type}`);
  console.log(taskInput.value); //The value property sets or returns the value of the value attribute of a text field.
  e.preventDefault(); // prevent from redirecting the page 
}
*/

// events on the actual input 
// remember target is the element the event happens on 

// keyboard events with text input
//taskInput.addEventListener('keydown', eventHandler);
//taskInput.addEventListener('keyup', eventHandler);
//taskInput.addEventListener('keypress',eventHandler);

// mouse events with text input (in theory can be done without the mouse though)
// taskInput.addEventListener('focus', eventHandler) // when clicking into a text field 
// taskInput.addEventListener('blur', eventHandler) // when you leave the text field 


// mouse/keyboard event with text input 
// taskInput.addEventListener('cut', eventHandler); //when cutting with mouse or keyboard 
// taskInput.addEventListener('paste', eventHandler);
// taskInput.addEventListener('input', eventHandler)// anthing we do with this input/text field it's going to fire off 
select.addEventListener('change', eventHandler);

function eventHandler(eventObj) {
  const e = eventObj;
  console.log(e.type)
  console.log(e.target.value)
 // heading.innerText = e.target.value;
}
