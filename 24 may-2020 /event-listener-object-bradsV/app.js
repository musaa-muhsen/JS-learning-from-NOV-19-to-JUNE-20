
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(eventObj) {
      let val, e = eventObj;
      e.preventDefault();

      // target is in the most important property it represents element itself 
      // target is where onclick is etc as well 
      
      // event target element 
      val = e.target; // returns the actual element // <a class="clear-tasks btn black" href="">Clear Tasks</a>
      e.target.id = 'hello'; // add an id of hello 
      val = e.target.id; // return the value of the id 
      val = e.target.className; // clear-tasks btn black
      val = e.target.classList; // DOMTokenList of all the classes 

      // e.target.textContent = 'F U' // changes the button content to F U 

      // Event type 
      val = e.type // click event if we change to mouseover we will get mouseover 
      
      val = e.timeStamp 
      newVal = Math.floor(val/1000) // make it into actual seconds 

      // Coords event relative to the window 
      // client window 
      val = e.clientY; // vertical axes // higher up the element lower the number 
      val = e.clientX; // horizental axes // left low right high 
     
     // Coords event relative to the element 
     // offset the table 
     val = e.offsetY; // same as window except just relative to the button 
     val = e.offsetX // same as before for the horizental axes 

     
      console.log(val)
       
}


