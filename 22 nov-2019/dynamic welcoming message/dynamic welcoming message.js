

let getBody = document.body;

// same as 
//let getBody = document.querySelector('body');

//creating an empty element
//let newElement = document.createElement('h1');

//makes the date method into an object 
let date = new Date();
//then add the hours function/method 
let currentHour = date.getHours();

// empty variable
let createTxtMsg;


if (currentHour >= 0 && currentHour < 4) {
    createTxtMsg = 'Early morning, sleep time.';
} else if (currentHour >= 4 && currentHour < 12) {
    createTxtMsg = 'Good morning!';
} else if (currentHour >= 12 && currentHour < 17) {
    createTxtMsg = 'Good afternoon!';
} else if (currentHour >= 17 && currentHour < 20) {
    createTxtMsg = 'Good evening!';
} else if (currentHour >= 20 && currentHour < 24) {
    createTxtMsg = 'Good night!';
} else {
    createTxtMsg = "Are you from a different planet?"
}
console.log(createTxtMsg);

//HTML elements often consists of both an element node and a text node.
//To create a header (e.g. <h1>), you must create both an <h1> element and a text node:

let newElementTitle = document.createElement('h1');  // Create a <h1> element

let createEleTxt = document.createTextNode(createTxtMsg); // Create a text node

newElementTitle.appendChild(createEleTxt);// Append the text to <h1>

getBody.appendChild(newElementTitle);// Append the <h1> && text to the body object

//zero for getElementsByTagName('h1)[0] to get the first one
//document.getElementsByTagName("H1")[0].setAttribute("class", "democlass"); 

newElementTitle.setAttribute('class','welcome');
newElementTitle.setAttribute('id', 'yes');
newElementTitle.style.cssText = 'text-align: center; font-size: 60px; font-family: arial;';
//innerText
//textContent
//innerHTML
//createTextNode

console.log(getBody);


//.setAttribute("name", "helloButton");
//.setAttribute("disabled", ""); stops it???? doesnt work

// other test
/*
getBody.setAttribute('class','body');
getBody.style.cssText = "background-color: yellow;color: red;";
function myFunction() {
    const x = document.getElementsByTagName('style')[0];
    document.getElementById('demo').innerHTML = x.innerHTML;
}
*/





//Node defination 
/*Any system or device connected to a network is also called a node. For example,
 if a network connects a file server, five computers, and two printers,
 there are eight nodes on the network. Each device on the network has a network address, 
 such as a MAC address, which uniquely identifies each device. 
 This helps keep track of where data is being transferred to and from on the network.

A node can also refer to a leaf, which is a folder or file on your hard disk. In physics, 
a node, or nodal point, is a point of minimum displacement or where multiple waves converge, 
creating a net amplitude of zero.*/

