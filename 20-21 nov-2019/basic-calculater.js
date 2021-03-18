


function calc() {
// also there is 
let x = parseFloat(document.querySelector('#value1').value);
let y = parseFloat(document.querySelector('#value2').value);
//let x = parseInt(document.querySelector('#value1').value);
//let y = parseInt(document.querySelector('#value2').value);
let op = document.querySelector('#operator').value;
let calculater;

if (op == 'add') {
    calculater = x + y;
} else if (op == 'min'){
    calculater = x - y;
} else if (op == 'div'){
    calculater = x / y;
} else if (op == 'mul') {
    calculater = x * y;
}

document.querySelector('#result').innerHTML = calculater;
}














//functions more of VVVVVVV 
function para(a,b) {
    return a * b;
}
console.log(para(4,5));



const paraTwo = (a,b) => console.log(a * b);
paraTwo(5,4);




const paraThree = (a,b) => a * b;

console.log(paraThree(4,5));
