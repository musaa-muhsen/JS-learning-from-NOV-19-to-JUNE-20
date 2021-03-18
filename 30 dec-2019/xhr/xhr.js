let btn = document.getElementById('button');
let div = document.getElementById('output');

btn.addEventListener('click' , loadData);


function loadData() {

const xhr = new XMLHttpRequest(); //create an XHR Object

xhr.open('GET', 'data.txt', true); // syntax open(method, url, async), open is used to specify the type of request we want to make, the URL/file name we want to link it to 


//optional - used for spinners and loaders //The onprogress event occurs when the browser is downloading the specified audio/video.
xhr.onprogress = function() {
   // syntax object.onprogress = function(){myScript}; 
   console.log(xhr.readyState);
}

xhr.onload = function() { //onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.). //The load event fires when a given resource has loaded.
    if(this.status === 200) {  // Returns the status-number of a request   
    //console.log(this.responseText); //Returns the response data as a string
    div.innerHTML = `<h1> ${this.responseText} </h1>`
    }
}

xhr.send(); // Sends the request to the server, // Used for GET requests

}


// console.log(xhr.readyState)

// status = Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// readyState = Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

//old school way of doing above 
/*
xhr.onreadystatechange = function() {
    if(this.status === 200 && this.readyState === 4) {
        console.log(this.responseText);
    }
}
*/