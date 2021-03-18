// menu styling 
// const menuStyle = document.getElementsByClassName('.menu');
// menuStyle.style.width = '200px';
// menuStyle.style.height = '500px';
// menuStyle.style.backgroundColor = 'pink';
// menuStyle.style.display = 'block';
// menuStyle.style.position = 'relative';
// menuStyle.style.left = '-300px';

// menu event 

//extracted the objects from the dom
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
//created a bollean of false as a variable
let menuStatus = false;
menu.style.marginLeft = '-300px';

        //menu status is set to false and the condition is checkig if its false which it is. 
        //pushes menu to 0
        // after prevouis event the menu status goes back to true 
        //opsite applies to else if statement 
function menuToggle() {
    if (menuStatus === false) { 
        menu.style.marginLeft = '0px';
        menuStatus = true; 
    } else if (menuStatus === true) {
       menu.style.marginLeft = '-300px';
       menuStatus = false;
    }

}
//event handler 
//menuBtn.onclick = menuToggle;

// menu toggle style two 


// styling in main page 



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }




