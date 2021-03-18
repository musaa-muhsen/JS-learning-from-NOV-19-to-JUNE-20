// fetch('vp5.json')
//   .then(response => {
//    console.log(response)
//   })
  //.then(data => console.log(data))
  //.then(data => console.log(data))


// fetch('v2p5.json')
// .then((resp) =>{
//    return resp.json();
// }).then((outcome) =>{
//      console.log(outcome);
// });

// simple callback 

const add = function(a,b) {
    return a + b;
}

const multiply = function(a,b) {
  return a * b;
}

const sentenceAndAnswer = function(a,b) {
     return `Here are the numbers = ${a}, ${b}`;
}

const calc = function(num1, num2, callback) {
  return callback(num1,num2)
}

const answer = calc(2,4,sentenceAndAnswer)

console.log(answer)




//var foo = function( a, b, c ) {}; // a, b, and c are the parameters

// foo( 1, 2, 3 ); // 1, 2, and 3 are the arguments