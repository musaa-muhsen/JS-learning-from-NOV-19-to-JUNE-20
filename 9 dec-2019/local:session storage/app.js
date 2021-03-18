//set local storage item 
//The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.
//The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

//================== The localStorage property is read-only. ===============================
// localStorage.setItem('name','john');
// localStorage.setItem('age', '30');

//there  is a few ways to strore data in the browser another way is sessions
//set session storage item 
//const itemContent = sessionStorage.setItem('name', 'beth')

//remove from storage 
//localStorage.removeItem('name');

//get from storage 
// const name = localStorage.getItem('name');
// const age =  localStorage.getItem('age');
// console.log(name, age);

//clear local storage 
//localStorage.clear()

//clear session storage 
//sessionStorage.clear();

//id of task is the input tag with the writing 
//form to a task to local storage 
//the problem with the version below is that gets replaced, so we can only store one task at a time 
/*
document.querySelector('form').addEventListener('submit', 
function(e) {
    const task = document.getElementById('task').value;
    localStorage.setItem('task' , task);
    //alert('task saved')
    e.preventDefault();
});
*/

//better version 
//this version we create an array of tasks and store that as a string 

// 1)set the action to fire off when the submit btn is pressed 
//The submit event fires when a <form> is submitted.

/*
document.querySelector('form').addEventListener('submit', 
function(e) {
    // 2)extracting the input tag 
    const task = document.getElementById('task').value;

    //3)create a variable of tasks
    let tasks;
    //4)if the key pair has nothing init the return empty 
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        //5) if there is data the JSON will come as a string which needs to converted into an object thus using JSON.parse 
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //6)Add a new item to an array as an object
    tasks.push(task);
    
    //7) bringing it all together by combining the key value pair in a "setItem" method 
    localStorage.setItem('tasks', tasks);
    e.preventDefault();
    
    
});
*/

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
    let tasks;
  
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});

//A common use of JSON is to exchange data to/from a web server.
//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.

//Syntax 

//Syntax for SAVING data to localStorage:
window.localStorage.setItem("key", "value");

//Syntax for READING data from localStorage:
var lastname = localStorage.getItem("key");

//Syntax for REMOVING data from localStorage:
localStorage.removeItem("key");