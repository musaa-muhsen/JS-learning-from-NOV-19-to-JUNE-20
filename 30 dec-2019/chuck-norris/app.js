btn = document.querySelector('.get-jokes-btn');

btn.addEventListener('click', getJokes);
function getJokes(e) {

    const number = document.querySelector('input[type="number"]').value;
   
    const xhr = new XMLHttpRequest();

    //link the number needed from the input number 
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}` , true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';

            if(response.type === 'success') {
                //value is used because that is what is needed on the newley converted api object 
                response.value.forEach(function(joke){
                  output += `<li>${joke.joke}</li>`;
                });
              
            } else {
               //append to the output
               output += '<li>sorry no content</li>';
            } 
            document.querySelector('.jokes').innerHTML = output;
        }
    }


    xhr.send();

    e.preventDefault();
}



// what is an API?
//Application Programming Interface 
//contract provided by one peice of software to another 
//strucutured request and response 
//above is an API that takes a request and reponds with jokes







// console.log(`readyState	${xhr.readyState}`);
  


//'input[type="number"]'
//x.setAttribute("type", "number");
