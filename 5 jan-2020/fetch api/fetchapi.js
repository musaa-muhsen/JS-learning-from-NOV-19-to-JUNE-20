const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

const output = document.getElementById('output');

btn1.addEventListener('click', getText1);
btn2.addEventListener('click', getText2);
btn3.addEventListener('click', getText3);


// get local txt ==============================================================================
// 1st then access the txt type the second then access the data. Then catch is the rejection 

function getText1() {
    fetch('test.txt').
    then( function (resp) { 
       // console.log(resp);
        return resp.text(); 
    }).
    then( function (data) { 
        //console.log(data);
        output.innerHTML = data; 
    }).
    catch(function(err) { 
        console.log(err); 
    });
}

// get local JSON ===============================================================================
// json() parses JSON response into native JavaScript objects

function getText2() {
    fetch('posts.json').
    then((resp) => {
        return resp.json();
    }).then((data) => {
       
        let outcome = '';
        data.forEach((post) => {
          outcome += `<li>${post.title} ${post.body} ${post.footer}</li>`;
        });

        output.innerHTML = outcome;

    })
    .catch((err) => {
        console.log(err); 
    });

}


// get external API ======================================================


function getText3() {
    fetch('https://api.github.com/users').
    then(resp => resp.json()).
    then(data => {
       console.log(data)
        let outcome = '';
        data.forEach((post) => {
          outcome += `<li>${post.login}</li>`;
        });

        output.innerHTML = outcome;

    })
    .catch(err => {
        console.log(err); 
    });

}









//  helloWorld = () => {
//     return 'hello' + ' world';
// };

// console.log(helloWorld());