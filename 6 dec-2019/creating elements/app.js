//adding another li to the list 
//using const because we're not re assigning these variable. So we're adding IDs/classes/methods/properties on them, but we're not actually read declaring it so it's fine to use const

//The createElement() method creates an Element Node with the specified name.
const li = document.createElement('li');

//add class 
li.className = 'collection-item'; //same as li in the list 

//add id
li.id = 'new-item';

//add attribute 
li.setAttribute('title', 'newItem');

//create text node //node is like leafs 
const textNode = document.createTextNode('hello world');

//append text node 
li.appendChild(textNode);

//appending link (btn)----------------------------------- 

//create new a:link element 
const link = document.createElement('a');

//add classes 
link.className = "delete-item secondary-content";

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li 
li.appendChild(link);

//apend li as a child to ul 
document.querySelector('ul.collection').appendChild(li);

console.log(li);
