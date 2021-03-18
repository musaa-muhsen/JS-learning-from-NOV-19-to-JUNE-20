//getting an element 
/*
let val;

val = document.getElementById('task-title');

//get things from the elements 
val = document.getElementById('task-title').id; //task-title
val = document.getElementById('task-title').className; //task-title

//change styling 
document.getElementById('task-title').style.background = "black";
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '10px';
//document.getElementById('task-title').style.display = 'none';

//change content 
document.getElementById('task-title').textContent = '<b>task list</b>';
//document.getElementById('task-title').innerText = 'list';
//document.getElementById('task-title').innerHTML = '<span id="span1" style="color: red;">hello</span> world';

//document.getElementById('span1').style.fontSize = '3rem';


//NOT GOT PRACTISE TO KEEP "getElementById" every time 
//so instead put it into a variable to be used once 

const taskTitle = document.getElementById('task-title');

//as before but more effienct 

taskTitle.style.background = 'black';
taskTitle.style.color = '#fff'; //white 
taskTitle.style.padding = '10px';
//etc 
*/

//querySelector 
//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
/*

val = document.querySelector('#task-title');
val = document.querySelector('.task-title');
val = document.querySelector('h5');

document.querySelector('li').style.color = 'red';
//same as 
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red'
document.querySelector('li:nth-child(3)').style.color = 'pink';
document.querySelector('li:nth-child(4)').textContent = 'hello world';
document.querySelector('li:nth-child(odd)').style.backgroundColor = "green";

//when put in a variable

const oneSelection = document.getElementById('ul li');

console.log(val)
*/

//multiplace selectors

//textContent vs innerText
//textContent gets the content of all elements,
// including <script> and <style> elements. In contrast, innerText only shows “human-readable” elements.


/*
//document.getElementsByClassName

element_li = document.getElementsByClassName('collection-item'); // HTMLcollection(5)

console.log(element_li);


element_li[0]; //first li
element_li[0].style.color = 'red';
let val = element_li[3].textContent = 'f u' //textContent can see all the elements and innertext only display whatever visible

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems)
*/
/*
//HTML DOM getElementsByTagName() Method 
//works the same as above 

const all_LiElements = document.getElementsByTagName('li');
console.log(all_LiElements[0]);
all_LiElements[0].style.color = 'red';
all_LiElements[0].textContent = 'u f';

//html collection is not an array 
//to convert html collection to an array use the "array from method" 


lis = Array.from(all_LiElements); 
lis.reverse();

lis.map(function(li, index){
    console.log(li.className); 
    li.textContent = `${index} : hello`

});
console.log(lis);
//reverse(); is an array method 
*/

//document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');


//no need to convert to Array.from as its already a nodelist 

//inputing index and hello into the list 
items.forEach(function(item, index) {
    item.textContent = `${index}: Hello`;
})

const liOdd = document.querySelectorAll('ul.collection li.collection-item:nth-child(odd)');
const liEven = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)');

liOdd.forEach(li => li.style.background = '#ccc');


//same as 
// you can still do a for loop with a html collection, because you can still access the length 
 
for (let i = 0; i < liEven.length; i++) {
      liEven[i].style.background = '#f4f4f4';
}

console.log(items)









