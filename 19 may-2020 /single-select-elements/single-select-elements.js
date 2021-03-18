// SINGLE ELEMENT SELECTOR 

// it's going to grab the first one in the dom node list // in programming it selects the last one in an array etc

// getElementById('String that specifies the ID value. Case-insensitive.')

let val;
val = document.getElementById('task-title') //gets the whole element include the tag
// val = document.getElementById('task-title').id // gets just the id 
val = document.getElementById('task-title').className // same as id 


// styling anything you can do in CSS you can do with JS
// val = document.getElementById('task-title').style.background = 'black'
// val = document.getElementById('task-title').style.color = '#fff'
// val = document.getElementById('task-title').style.padding = '30px !important' // doesn' work use css to add !important or setAttribute
document.getElementById('task-title').setAttribute('style', 'color: blue; background: yellow; padding: 30px !important; ') // can't set multiple setAttribute styles only one 

const taskList = document.getElementById('task-title');

taskList.addEventListener('click', () => taskList.style.display = 'none')

// change content 

// innerText vs textContent 
// textContent sees all text even hiddens ones 
// text content ignores the styling and js and shows ALL the content (minus the tags etc) but innerText
// will would should be visible for screen is if the styling added display: none; then it won't show but 
// with textContent it will and that is the main differance   

// textContent returns the text content of all elements, while innerText returns the content of all elements, except for <script> and <style> elements.
// innerText will not return the text of elements that are hidden with CSS (textContent will)


val = document.getElementById('task-title').innerText = 'TASK LIST' //(property) HTMLElement.innerText: string
val = document.getElementById('task-title').textContent //(property) Node.textContent: string
//val = document.getElementById('task-title').innerHTML = '<span style="color: red">Task Lizt</span>' // to insert HTML

// document.querySelector() // very powerful much like jQuery can select anything with the right tags 

console.log(document.querySelector('#task-title')); // gets the element by the ID
console.log(document.querySelector('.card-content div'));
console.log(document.querySelector('h5')) // get the first node of h5 


document.querySelector('ul.collection li:nth-child(2)').style.color = 'blue'
document.querySelector('ul.collection li:last-child').style.background = 'pink'
document.querySelector('ul.collection li:nth-child(odd)').textContent = 'fuck you'
