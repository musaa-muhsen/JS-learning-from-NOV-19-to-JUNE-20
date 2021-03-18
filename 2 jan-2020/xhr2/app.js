
const btn = document.getElementById('button');

btn.addEventListener('click', loadData);

function loadData() {

  // create an XHR Object 
  let xhr = new XMLHttpRequest();

  // any object has properties and methods assocciated with it, OPEN is a method as well
  xhr.open('GET', 'data1.txt',true);

 
  //optional - used for spinners/loaders
  // xhr.onprogress = function() {
  //     console.log(xhr.readyState);
  // }
  
   
  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
    }
  }
  xhr.send(); 

}




    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
