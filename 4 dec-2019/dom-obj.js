let val;

val = document;
val = document.all; // htmlallcollection(59)
val = document.all[2]; //charset="UTF-8"
val = document.all.length; //59
val = document.head;
val = document.body;
val = document.doctype;
val = document.contentType;
val = document.characterSet;
val = document.URL;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0].id;//no id 
val = document.links[0].className; //no classes 
val = document.links.classList; //to get spefic classes 


val = document.images; //no images

val = document.scripts; //html collection with a length of 2
val = document.scripts[1];
val = document.scripts[0].getAttribute('src');
//console.log(val)
/*
HTML Attributes
All HTML elements can have attributes
Attributes provide additional information about an element
Attributes are always specified in the start tag
Attributes usually come in name/value pairs like: name="value"
*/
//Array from() Method
//The Array.from() method returns an Array object from any object with a length property or an iterable object.


let myArr = Array.from('hello');

let myScripts = document.scripts;
let scriptsArr = Array.from(myScripts);
scriptsArr.map(function(aScript){
  console.log(aScript.getAttribute('src'));
});




