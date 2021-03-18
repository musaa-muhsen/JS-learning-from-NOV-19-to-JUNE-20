//define ui variables
//form container 
const form = document.querySelector('#task-form');

//ul tag
const taskList = document.querySelector('.collection');

//bottom btn (black one)
const clearBtn = document.querySelector('.clear-tasks');

//the one with the label of "filter tasks"
const filter = document.querySelector('#filter');

//the one with the input field inside the form 
const taskInput = document.querySelector('#task');

//avoid putting the events in the global scope so put it in a function 
loadEventListeners();

//load all event listeners 
function loadEventListeners() {

    //for the li to be put on the ui it needs another event listener to be called and the function is below 
    //DOM load event right on the document 
    document.addEventListener('DOMContentLoaded' , getTasks);

    //add task event 
    form.addEventListener('submit' , addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    //clear task event, the .clear-tasks button (the black one)
    clearBtn.addEventListener('click', clearTasks);

    //filter tasks event 
    filter.addEventListener('keyup', filterTasks);
}  

//get tasks from LS
function getTasks() {
    let tasks;
    //just to check if there is a key/value to work with 
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //loop through the tasks that are there 

    tasks.forEach(function(task){
      const li = document.createElement('li'); //create li
      li.className = 'collection-item'; //add class
      li.appendChild(document.createTextNode(task)); //create text node and append to the newlet created li 
      const linkBtnX = document.createElement('a'); //create link element 
      linkBtnX.className = 'delete-item secondary-content'; //add class
      linkBtnX.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(linkBtnX); //append linkBtnX to li
      taskList.appendChild(li); //taskList is the ul 

    });

}




//add task event (a handler function?) ==============================
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task!')
     } 
    //create li element 
    const li = document.createElement('li');
    //add a class to the li
    li.className = 'collection-item';
    //create text node and append it to the li 
    li.appendChild(document.createTextNode(taskInput.value));

    //create new link element with the variable of "linkBtnX"
    const linkBtnX = document.createElement('a');
    // add class 
    linkBtnX.className = 'delete-item secondary-content';
    //add icon by html class tags (for materialize)
    linkBtnX.innerHTML = '<i class="fa fa-remove"></i>'; 
    //append/add the linkBtnX to the li element 
    li.appendChild(linkBtnX);
    
    //append/add the li to ul 
    taskList.appendChild(li);
    
   //so whatever gets typed in "li.appendChild(document.createTextNode(taskInput.value));" will be passed this new function, so it's a function within a function within a function 
   //the function itself is below
   storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';
    //console.log(taskList)
    e.preventDefault();
}
    //store task to localstorage===================================================
    //just remember
    //Syntax
    //localStorage.getItem(keyname)
    //keyname is the string specifying the name of the KEY you want to get the value of
    //the if else statement is to see if there is any tasks in local storage to be looked at, so it's a function within a function for local storage
    //set to an empty array is = 'tasks = []'
    //just remember
    //local storage can only store string
    function storeTaskInLocalStorage(task) {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
        tasks = [];
        } else {
        //if there is value Create Object from JSON String in order to be manipulated
        tasks = JSON.parse(localStorage.getItem('tasks'))
        }
       //"task" is the parameter which arguement will be the the value inside the text node aka textContent aka input tag 
        tasks.push(task);
        
       //bringing the key value pair together via the setItem method  
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }



//remove a individual task ====================================
//The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.

//1)when the user presses the x btn which is targeted, this is done by finding the class name of 'delete-item'
//2)if the target is clicked the condition statement is shown (which is inside another if statement) 
function removeTask(e) {
   if(e.target.parentElement.classList.contains('delete-item')) {
      if(window.confirm('Are you sure!')) {
        e.target.parentElement.parentElement.remove();

        //remove from LS 
        //as there is no id/class for the li we use the js element 
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
   }   
}

//remove from LS
 function removeTaskFromLocalStorage(taskItemLi) {
    //console.log(taskItemLi); //gives you the target 
    let tasks;
    
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        
        if(taskItemLi.textContent === task) { //basicley does it match itself 
              tasks.splice(index,1);
        }
    });

    //set local storage again after all of above is done thus the setitem will return an empty textContent 
     localStorage.setItem('tasks', JSON.stringify(tasks));       
 }

//clear tasks ===================================
//taskList is the ul 

function clearTasks() {
     //taskList.innerHTML = "";

     //another way of doing it could be to loop through with a while loop and then remove each one.
    //faster
    //taskList.firstChild is the first li of the ul
    //so basicly the while loop is the first child deleting itself 
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    //clear from LS
    clearTasksFromLocalStorage();
}

//clear tasks from LS function ===============================

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

//The while loop loops through a block of code as long as a specified condition is true.
//while loop syntax 
/*
while (condition) {
//code block to be executed 
}
*/
//so this keyup event is now part of a function 
//filter tasks ==============================

function filterTasks(e) {

    //1)This would give get us what we are typing 
    const text = e.target.value.toLowerCase();
    //2)get all the list items (li), remember that querySelectorAll returns a nodelist, so we can loop through each array object?/ or element via foreach etc
    document.querySelectorAll('.collection-item').forEach(
        function(task) {
          //3)use the currentValue being processed in the array and change it into a variable BUT also retain the currentValue to be used again 
          //also below just means li > text 
          const item = task.firstChild.textContent;
          //4) -1 is because if you use index of the character you're searching for is nothere then its's equal to negative 1 
          //4)so we want to say if it's not equal to negative 1 then we want that task to show  
          //indexOf method returns -1 if the value to search for never occurs.
          if(item.toLowerCase().indexOf(text) != -1) {
             task.style.display = 'block';
          } else {
             task.style.display = 'none';
          }
        }
        );
}

//for each Syntax
//array.forEach(function(currentValue, index, arr), thisValue)
//index is 1,2,3 etc 

//textContent aka nodetextcontent 
//The textContent property of the Node interface represents the text content of the node and its descendants.

//persist to local storage ===========================
//local storage is part of js 