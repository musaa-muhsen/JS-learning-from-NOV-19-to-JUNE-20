const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5'); // selected by the tag of h5 

// notice there is no camel case for the events 

// click 
//clearBtn.addEventListener('click', eventHandler);

// double click 
//clearBtn.addEventListener('dblclick', eventHandler);

// mousedown 
//clearBtn.addEventListener('mousedown', eventHandler); // when you press the down 

// mouseup 
// clearBtn.addEventListener('mouseup', eventHandler); // when you let go of the mouse 

// mouseenter 
// card.addEventListener('mouseenter', eventHandler); // when you enter the main element 

// mouseover 
// card.addEventListener('mouseover', eventHandler); // when were over the element and child elements within 

// mouseleave 
// card.addEventListener('mouseleave', eventHandler); // leave the main element competely 


// mouseout
// card.addEventListener('mouseout', eventHandler); // when you out of the element but also children within the element and also out of the element completely  

// mousemove 
card.addEventListener('mousemove', eventHandler);


/* 
the initial one is going to be mouseover and mouseenter so if i go in and I just over the card you'll see 
we get mouseover and mouseenter, if I leave (the card) we get mouseout and mouseleave
*/


// event handler = A function or method containing program statements that are executed in response to an event.
// Event Handler to console.log all the different types of mouse events 

function eventHandler (eventObj) {
  const e = eventObj
  console.log(`EVENT TYPE : ${e.type}`)

  heading.textContent = `offsetX : ${e.offsetX}  offsetY : ${e.offsetY} take 3:  ${(e.offsetY/2)}`
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, ${(e.offsetY/2)})` 
}