//event bubbling
/*
document.querySelector('.card-title').addEventListener('click',
 function() {
   console.log('card title (xs)')
 }
 )

 document.querySelector('.card-content').addEventListener('click',
   function() {
     console.log('card content (s)')
   }
 )

 document.querySelector('.card').addEventListener('click',
   function() {
     console.log('card (m)')
   }
 )

 document.querySelector('.col').addEventListener('click', biggest)

 function biggest() {
  console.log('column (l)')
}
*/

//Event DELEGATION 

/*
// eventlistener directly on to the delete item class 
//can't use nodelist because its a multiple a:links 
const delItem = document.querySelector('.delete-item');
//console.log(delItem)
delItem.addEventListener('click', deleteItem);
//have to call the function in order for the js script to run properly 
function deleteItem() {
   console.log('delete item');
 }
*/
document.body.addEventListener('click', deleteItem);

//not the best way to do it
/*
function deleteItem(e){
  if(e.target.parentElement.className === 'delete-item secondary-content') {
    console.log('delete item');
    //e.target.parentElement.parentElement.remove();
  }
}
*/
//The classList property is read-only, however, you can modify it by using the add() and remove() methods.

 function deleteItem(e) {
   if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
   }
 }
 
//The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
//A descendant can be a child, grandchild, great-grandchild, and so on.