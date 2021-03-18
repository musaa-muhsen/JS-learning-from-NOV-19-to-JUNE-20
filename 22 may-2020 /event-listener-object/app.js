// addEventListener method 
// element.addEventListner('type of event ' 'callback function')
 // Attaches an event handler to the specified element // handler defination = a person or thing that handles 
// # stop the browser redirects in html 
// the syntax can vary depending on on where you use it so between HTML document or javascript script
// with addEventListener you can add 2 event listeners for the same button etc so event after another when the button is clicked once 
// document. which JS representation of a HTML file // after that we want to pull out a spefic object to with an element with the ID, class , etc, which will return a object
// so document.getElementById('eventClick) which will return a JS object will all the different properties and methods we could use such as onclick etc  

// when working with addEventListener just don't use the on so you're just left the actual event name which is 'click' and not .onlick = 

// below is one way of adding an event listener 
// define onclick event 
// this is one way of attaching an event listener is to attach it directly via the object element itself 

const check = document.querySelector('input.btn'); // object that resembles that element in the DOM
// document.querySelector('input.btn).onclick = null is currently a property when we change into a function as seen below it will be a method 
console.dir(check);

function alertFun() {
    alert(1)
}
 document.querySelector('input.btn').onclick = function () {
    alertFun();
}
// by default the onclick event handler is going to be null so elementobject.onclick = null 
document.querySelector('input.btn').onclick = function() {
     alert('poo yoo')
 } // only gets the 2nd one (poo yoo) not the first one 

/*
Javascript Event Object 
Whenever an event (like click, mouseover, mouseout etc) occurs, the relevant data about the event is placed 
into the event object. For example, the event object contains event data like, the X and Y coordinates of the 
mouse pointer when the event occurred, the HTML element that fired the event, which mouse button is clicked etc. 
*/

// Obtaing the event object is straightforward. The event object is always to the event handler method as in the callback function itself

// when using the addEventListener method just ommit the on from the callback as it's already a property that resides on the element object  
// element.addEventListenr('click' function() { // content }) // you can't actually look this particular event because it's managed by the native code 
// how do I know that?

// this functon is acutally running code in terms of the JIT compiler it's actually in the programming language of the compiler which is a lower level language which is CPP/C++ so those instruction are written in a diffeent language essentially    
// native code can't be looked at in JS it's eing handles by thr native JIT compiler 
// when using .onclick this event directly on the object itself 

// object event handlers can only have one method attached 
// addEventListener method can be used as many times as you want and is much faster as it's done natively 
// don't use anonymous function as the callback for the addeventlistener as it's better to have a pointer in JS in memory therefore it's a better reference with the keyname using a global function as seen below 

// you would use below not with alert or console log 

function eventFuncAlert () {
alert(
    'hello'
)}

document.querySelector('input.btn').addEventListener('click', eventFuncAlert );

//document.querySelector('input.btn').removeEventListener('click', eventFuncAlert)
