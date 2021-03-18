let my_element = document.createElement('h1');
let my_span = document.createElement('span');

my_element.innerText = 'hello world';
my_element.appendChild(my_span);

my_element.style.fontSize = '3rem';
my_element.style.fontWeight = '200';
my_element.style.border = '3px solid green';
my_element.style.width = '200px';
my_element.classList.add('custom-class');
document.body.appendChild(my_element);

const btnTxt = 'hello world';

function myFunction() {
    const btn = document.createElement('button');
    btn.innerText = btnTxt;

    document.body.appendChild(btn);
} 