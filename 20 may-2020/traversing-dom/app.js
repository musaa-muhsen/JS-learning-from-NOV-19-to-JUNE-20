// traversing up or down the DOM using these properties?
let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('ul.collection li.collection-item:first-child')

val = listItem;
val = list;

// get child nodes // don't use 
val = list.childNodes; // returns a node list which you will be able to see all the text nodes aka line breaks 
val = list.childNodes[1].nodeName; // #comment which is <!-- TEST COMMENT --> 
val = list.childNodes[1].nodeType; // 8 
val = list.childNodes[0].nodeType; // 3 // white space 
val = list.childNodes[3].nodeType; // 1 // element 

// nodeTypes full list 
// 1 - Element 
// 2 - Attribute (deprecated)
// 3 - Text Node 
// 8 - comment 
// 9 - document itself 
// 10 - doctype 

// looking at nodes children as seen as elements 
 
// get children elements nodes // for the most part we will be working with the elements so children is recommended 
val = list.children; // htmlCollection of 5 justs the li's elements 
val = list.children[0]; // gives us the first li element 
list.children[1].textContent = 'Hello';


// CHILDREN OF CHILDREN 

val = list.children[3].children // HTMLCollection of one then to target it use below
val = list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0] // a.delete-item secondary-content


 val = list.firstChild; // #text acts like childNodes 
 val = list.firstElementChild; // to get the actual first elements use this 

 // same as above but just for the last child 
 val = list.lastChild;
 val = list.lastElementChild;
 console.log(val)

 // count child elements 
 val = list.childElementCount; // 5 as there is 5 lis inside of the ul 

 // get parent node
// listItem has targetted the first li  
val = listItem.parentNode; // the whole ul itself 
val = listItem.parentElement; // does the same thing 
val = listItem.parentElement.parentElement; // the card div which is the parent  

// anything with element init is good! 

// as well as parents and siblings we have siblings // so siblings would be inline with the other li's
// get next sibling
val = listItem.nextSibling; // #text // nodes again  
val = listItem.nextElementSibling; // element 
val = listItem.nextElementSibling.nextElementSibling.textContent = 'F U'


// get prve sibling
val  = listItem.previousSibling.previousSibling//  <!-- TEST COMMENT -->

 val = listItem.previousElementSibling // on first would be null 

// get prev sibling and go back one 
 val = listItem.nextElementSibling.previousSibling 

//using nodes is quite powerfull 