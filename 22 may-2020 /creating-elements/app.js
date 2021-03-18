let val = document.querySelector('ul.collection');
val = val.children[0] // we're finding here so we can't use const 
console.log(val)

// notice im using const and it's fine because we're not re assigning these variables, we're adding stuff to them like classes, IDs, methods properties etc on them. but we're not actually re-declaring it so its fine to use const   
// create element 
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id 
li.id = 'yo'

li.setAttribute('title', 'hello')


// create a text node and append 
li.appendChild(document.createTextNode('Hello World'))
// could also make the content above into a variable so = const stringVariable = document.createTextNode('hello world')  appendChild(stringVariable)
// appendChild just means you want to put something in of something


// create new link element  
const link = document.createElement('a');
link.setAttribute('href', '#')
link.className = 'delete-item secondary-content';


// const i =  document.createElement('i');
// i.className = 'fa fa-remove';
// link.appendChild(i)

link.innerHTML = '<i class="fa fa-remove"> </i>' // or you could use innerHTML because we're not adding createTextNode to add icon html 

// so this appends the whole element to the ul 
// append li as child to ul (placed as the last element)
document.querySelector('ul.collection').appendChild(li);

li.appendChild(link)

console.log(li)

// any attribute you want 