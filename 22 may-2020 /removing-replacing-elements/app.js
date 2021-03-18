// replace the h5 with a h1 element 

const h1 = document.createElement('h1')
const stringContent = document.createTextNode('Hello World');
h1.appendChild(stringContent)
h1.id = 'task-title'
h1.style.color = 'red';

// get the parent 
// const cardAction = document.getElementsByClassName('card-action'); // returns a HTMLcollection 
const cardAction = document.querySelector('.card-action');

// get the old heading 
const oldTitle = document.getElementById('task-title');

cardAction.replaceChild(h1, oldTitle) // new, old 

// remove element

const lis = document.querySelectorAll('ul.collection li'); // node list of the lis 
const list = document.querySelector('ul.collection'); // <ul class="collection"> </ul>

// remove list item 
const zero = 0
lis[zero].remove() // removes nodes 

const three = 3;
list.removeChild(lis[three])// list = ul 

// CLASSES & ATTR 


const firstLi = document.querySelector('li:first-child');
const xlink = firstLi.children[0]

let val;

// classes 
val = xlink.className; // delete-item secondary-content // use className also when creating elements in this context it will overwrite the existing one  
val = xlink.classList; // domTokenList like a nodelist of classes in a array form so length etc 
val = xlink.classList[0]; // delete-item
val = xlink.classList.add('test')
val = xlink.classList.remove('test')

// attributes 
val = xlink.getAttribute('href'); // get the attribute from the li 
xlink.setAttribute('href','https://google.com'); // replace attribute 
xlink.setAttribute('title', 'google'); // same as replacing when creating a new attribute 
val = xlink.hasAttribute('src') // false // check if it does have a attribute 
xlink.removeAttribute('title');
val = xlink

console.log(val)



