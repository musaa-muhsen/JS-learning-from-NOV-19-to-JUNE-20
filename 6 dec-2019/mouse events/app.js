//mouseenter and mouseleave is only going to fire on the initial parent element 
const clearBtn = window.document.querySelector('.clear-tasks');
const card = window.document.querySelector('.card');
const heading = window.document.querySelector('h5');

//click 
//clearBtn.addEventListener('click', runEvent);
//Doubleclick 
//clearBtn.addEventListener('dblclick', runEvent);
//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// //mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// //mouseenter 
// card.addEventListener('mouseenter', runEvent);
// //mouseleave 
// card.addEventListener('mouseleave', runEvent);
// //mouseover 
// card.addEventListener('mouseover', runEvent);
// //mouseout
// card.addEventListener('mouseout', runEvent);

//mousemove
card.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`event type: ${e.type}`);
    heading.textContent = `Mouse: ${e.offsetX} mouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
}
//make a function that uses the last parametor as math.random also make it without es6 syntax 


//MouseEvent offsetX Property
//Note: This property is read-only.



