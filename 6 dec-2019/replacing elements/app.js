//The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.
//vs 
//NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().
//Node defination = In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.


//replacing an element (the title in this case)

//create Element 
const newHeading = document.createElement('h2');

//add id 
newHeading.id = 'task-title';

//new text node 
const textNode = document.createTextNode('Task List');

//append text node to h2 element 
newHeading.appendChild(textNode);
//at this point is a <h2 id='task-title'>Task List</h2>

//get old heading 
const oldHeading = document.getElementById('task-title');

//get parent 
const parentElement = document.querySelector('.card-action');

let replaceEnviroment = parentElement;

//replace action 
// 2 arguments required one followed by a comma  
replaceEnviroment.replaceChild(newHeading, oldHeading);

//remove elements =============================================

const ul_li = document.querySelectorAll('li');//nodelist(5)
//let ul_li = document.getElementsByClassName('collection-item');//HTMLCollection(5) so this gets the classes as a collection 
const _ul = document.querySelector('ul');

//remove list item
//ul_li.remove();//ul_li is not a function??
ul_li[0].remove();

//same as 

//remove child element 
_ul.removeChild(ul_li[3]);

//classes =======================================================

//obtaining the first li 
const firstLi = document.querySelector('li:first-child');
//the first child element of the li:first-child
//const link = firstLi.childNodes[0].nodeType;
const a_link = firstLi.children[0];//a:link

let val;

val = a_link.className; //output of the string 
//add classes 
//link.className = "delete-item secondary-content";
val = a_link.classList;//DOMTokenList(2) first = first class element and so on
val = a_link.classList[0];
a_link.classList.add('test');
a_link.classList.remove('test'); 

//set val equal to a_link 
val = a_link;


/* The classList property returns the class name(s) of an element, as a DOMTokenList object.
This property is useful to add, remove and toggle CSS classes on an element.
The classList property is read-only, however, you can modify it by using the add() and remove() methods.*/

//Attributes =======================================================

val = a_link.getAttribute('href'); //link inside = '#'
val = a_link.setAttribute('href', 'http://google.com');
a_link.setAttribute('title', 'google');
val = a_link.hasAttribute('title');
a_link.removeAttribute('title');

//set val equal to a_link
val = a_link;
console.log(val);

//The title attribute specifies extra information about an element.
//The information is most often shown as a tooltip text when the mouse moves over the element.







