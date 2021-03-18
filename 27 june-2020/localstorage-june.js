// key value pairs are called items in localStorage 

console.log(localStorage)//  local storage prototype methods and the length on the parent of the object 
// setItem is to add to local storage 
// getItem is how we get an item from local storage 

localStorage.setItem('name', 'shuan');
console.log(localStorage.getItem('name'))
// we can't save objects directory to local storage the value has to be some kind of string 
// jsonstringify to turn it into json string version of the object 
const book = {title: 'way of kings' , author: 'brandon sanderson'};

localStorage.setItem('mybook', JSON.stringify(book)); // now the key is mybook and the value is book object in a string 

const resultThatIsString = localStorage.getItem('mybook') // get the value via the key name 

let resultThatisObj = JSON.parse(resultThatIsString) // parse it to 

// localStorage.clear() // clears the whole storage

localStorage.removeItem('mybook')

// the difference between local storage and session storage is that local storage 
// will stay until you manually clear it out in your settings or through program and 
// session storage will leave it'll go away once your brower is closed. 

// set session storage item 
sessionStorage.setItem('name', 'Beth');


/*
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
*/



/* =============================================================================== 

// my attempt on a turning a object literal to a array 
function pusherMan (obj) {
    const newArr = [];
    newArr.push(obj)
    
    console.log(newArr)

}
for(const i in resultThatisObj) {
    pusherMan(resultThatisObj[i]);
   
}

var obj2 = {
    name: 'Chris',
    age: 25,
    hobby: 'programming'
  };
  Object.entries(bj2 ).filter(([key, value]) => !!value).map(([key, value]) => key)


function convert(obj2Arg) {
    return Object.keys(obj2Arg).map(k =>  [obj2Arg[k]]);
}

console.log(convert(obj2))



function objToArr(obj){
  var arr = [];

  for (var key in obj){
    arr.push([key, obj[key]]);
  }
  return arr;
}

Object.entries(objectLiteral).filter(([key, value]) => !!value).map(([key, value]) => key)

*/






