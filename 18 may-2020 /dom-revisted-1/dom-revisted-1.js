// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
//The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.

//https://www.w3schools.com/js/js_htmldom.asp

// using the programming language (JS) in combination with the browser aka the DOM  
// so the DOM is a structured representation of an HTML document
// it can be thought of kind of as a tree of nodes/elements created by browser 
// javascript can be uesd to read/write/maipulate the DOM elements/nodes 
// the dom is object oriented meaning that each node has its own set of properties and methods that we can change, we can add, we can remove
// Now the browser gives us a window object and inside that we have a document object.
// the document object represents just that the loaded document or web page 
// then we have the root element underneath which is the html element/node/tag
// then we have the body tag/elements and head tag/elements which are siblings because they are on the same level 

// What is the DOM? The DOM is a W3C (World Wide Web Consortium) standard.

// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects:

// node is really for adding elements to the tree and when finding existing nodes lets refer to it as elements 

// docVal meaning document value we are looking at 
let docVal, val;
//Web APIs -> Document Object Model (DOM) -> DOM interfaces -> Document 

/*
The Document interface represents any web page loaded in the browser and serves as an entry point into the
 web page's content, which is the DOM tree. The DOM tree includes elements such as <body> and <table>, 
 among many others. It provides functionality globally to the document, like how to obtain the page's 
 URL and create new elements in the document.
*/

docVal = document; // gives us the whole document object????


docVal = document.all // The Document interface's read-only all property returns an HTMLAllCollection rooted at the document node. In other words, it returns the entire contents of the page.
docVal = document.head // The head read-only property of the Document interface returns the <head> element of the current document.
docVal = document.body
docVal = document.doctype //<!doctype html>
docVal = document.domain //127.0.0.1
val = document.URL // http://127.0.0.1:5500/dom-revisted-1.html?task=Walk+the+dog //the whole thing the protocol/port/page 
val = document.characterSet; //UTF-8
val = document.contentType; // text/html so maybe if it was a xml page it would be different 

// you can select elements without using selectors but it's not advised 
val = document.forms // HTMLCollection of forms 
val = document.forms[0] // the form element itself // read only??
val = document.forms[0].id // returns the id of task-form 
val = document.forms[0].method // get method returned 

val = document.links // HTMLcollection of all the links
val = document.links[0] // gives us the first <a> link tag
val = document.links[0].id
val = document.links[0].className //Returns the value of element's class content attribute 
val = document.links[0].classList //Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

val = document.images // HTMLCollection []

val = document.scripts
val = document.scripts[0]

const scripts = document.scripts;

const scriptsArr = Array.from(scripts)

scriptsArr.forEach(sources => console.log(sources.getAttribute('src')));


// console.log(scriptsArr)