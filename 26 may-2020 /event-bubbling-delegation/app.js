// EVENT BUBBLING
// bubble up/ so bubbling is going up the ansector elements 

/*
//<span class="card-title">Task List</span>
document.querySelector('.card-title').addEventListener('click', function (){
    console.log('card title');
});

//<div class="card-content">
document.querySelector('.card-content').addEventListener('click', function (){
    console.log('card content');
});

// <div id="main" class="card">
document.querySelector('.card').addEventListener('click', function (){
    console.log('card');
});

//<div class="col s12">
document.querySelector('.col').addEventListener('click', function (){
    console.log('col');
});
*/

/*
EVENT DELGATION 
Event delegation makes use of two often overlooked features of JavaScript events: event bubbling and the
target element. When an event is triggered on an element, for example a mouse click on a button, the 
same event is also triggered on all of that element’s ancestors. This process is known as event bubbling;
the event bubbles up from the originating element to the top of the DOM tree. The target element of 
any event is the originating element, the button in our example, and is stored in a property of the
event object. Using event delegation it’s possible to add an event handler to an element, 
wait for an event to bubble up from a child element and easily determine from which element the event originated.
*/

// Delegation is the assignment of any authority to another person to carry out specific activities.
// so if you click on the x icon (<i> tag) 
// We're putting the event listener on a parent and then going down. In the example below there were targeting the document body then working down till we find the target then bubble back up for the action

// Task is to remove a list item from the list by clicking the x icon.


document.body.addEventListener('click', eventHandler);

function eventHandler (eventObj) {
    const e = eventObj;
    

    // so if the parent had delete-item init
    if(e.target.parentElement.classList.contains('delete-item')) {
       e.target.parentElement.parentElement.remove()

    }

        // other way to do but not the best way 

    //   if(e.target.parentElement.className === 'delete-item secondary-content') {
    //       // execute code 
    //       console.log('delete-item')
    //   }

}


const arr = [5,10,15,20,25];

for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
          //console.log(arr[i]) // brings back a number 
          console.log(`${i} ${arr[i]}`)
      }, 2000);
}

