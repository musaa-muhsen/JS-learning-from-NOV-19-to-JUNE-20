let i = 0; //start point let used to be more flexible 
// empty array
let images = [];
// time for set time out
const time = 3000; // 1000 = 1s

//[i] is 0 because setting it to the first image 
//image list for array 
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';

// const nameValue = document.slide.src;
// console.log(nameValue);

//change image 
function changeImg() {
    //getting the image value/object start at 0 i and images variables together 
    document.slide.src = images[i];

// an if statement in the function 
// minus one because the array starts at 0 and the length property will look at it as 4 
// if the condtion is true at the last index increment by one 
//if it's at the last index you want to reset it to 0


    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // for the duration of this function we use the set time out function 
    //The "setTimeout" function is only executed once. If you need to repeat execution, use the setInterval() method.
    //Use the clearTimeout() method to prevent the function from running.
     setTimeout('changeImg()', time);

}




window.onload = changeImg;

//HTML name Attribute
//The name attribute specifies a name for the element.
//This name attribute can be used to reference the element in a JavaScript.
//For form elements it is also used as a reference when the data is submitted,