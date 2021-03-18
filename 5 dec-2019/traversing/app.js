//traverse means up and down parents and children of nodes 

//Any system or device connected to a network is also called a node. For example, if a network connects a file server, five computers, and two printers, there are eight nodes on the network. Each device on the network has a network address, such as a MAC address, which
// uniquely identifies each device. This helps keep track of where data is being transferred to and from on the network.

//everything in the dom is a node!
//search for 'nodes' on googles not 'node'

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
//different properties attached these nodes by getting child nodes anmd parent nodes 

//get child nodes
val = list.childNodes; //11 including text, so child nodes return a node list 
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //3

// 1 - Element 
// 2 - Attribute (deprecated)
// 3 - text node 
// 8 - comment 
// 9 - document itself 
// 10 - doctype 
//console.log(val);

//get children element nodes 
val2 = list.children;//length(5) child returns a HTML collection no text just the elements //collection of the links 
val2 = list.children[1]; //2nd element 
list.children[1].textContent = 'hello';//no need to console log this code 

//children of children 
val2 = list.children[2].children[0].children[0]; //need to use index child within a child

list.children[3].children[0].id = 'test-link';
val2 = list.children[3].children[0];

//console.log(val2);

//first child
val3 = list.firstChild; // 3 = text node 
val3 = list.firstElementChild; //the html 

//last child 
val3 = list.lastChild;
//val3 = list.lastElementChild.children[0];

//count child elements
val3 = list.childElementCount;//5 children of the ul 

//get parent node 
val3 = listItem.parentNode; //listitem is the li; answer is the ul
val3 = listItem.parentElement;
val3 = listItem.parentElement.parentElement;

//get next sibling 
val3 = listItem.nextSibling; //node style
val3 = listItem.nextElementSibling; //next li
val3 = listItem.nextElementSibling.nextElementSibling; //next next li 

//get prev sibling 
val3 = listItem.previousSibling;
val3 = listItem.previousElementSibling; //null

console.log(val3);