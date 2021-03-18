// more functions!!!!!!!!!!!

const func1 = (num1, num2, num3) =>
    num1 * num2 * num3;
console.log(func1(2, 2, 2));
// to return a arrow function with using return don't use brackets also can be on seperate lines as well

const nums1 = 1, nums2 = 2, nums3 = 3;

const func2 = (a, b, c) => {
    return a + b + c;
}

console.log(func2(nums1, nums2, nums3));


// ===================================================
// ===================================================

function greeting(name) {
    console.log('Hello ' + name);
}
var personsName = 'Joe';
greeting(personsName);

// ===================================================
// ===================================================

function add() {
    let i = 0;
    let totalSum = 0;

    for (i; i < arguments.length; i++) {
        //totalSum += arguments[i];
    }
    console.log(arguments)

    console.log(totalSum)
}

add(1, 1, 1, 1, 1, 'hello', 998, 'blob')
// arguements object 
//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
//the arguements object allows you to access all of the arguements that are passed into a function with an array like syntax so you can actually access these arguements using indexes  

function func10(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    // expected output: 3
}

func10(1, 2, 3);

// A bit of a trick question. Did I get you? No parameters, so we use empty parenthesis. We’re not returning anything, just logging. So there is no shortcut for the statement:
const sayHi = () =>
    console.log('Hio');
// consoling with brackets or without brackets  
// when consoling with arrow functions you can use brackets with consoling as well as not because  there is need for brackets because you are not returning anything just logging
sayHi()

const o1 = 1, o2 = 2, o3 = 3;

const funcTen = (a, b, c) => {
    a = o1; b = o2; c = o3;
    return a * b * c
}
console.log(funcTen());


// ===================================================
// ===================================================
// passing in functions 

const f1 = () => 'hello', f2 = () => ' ', f3 = () => ' world';

const funcAll = (a, b, c) => {
    a = f1(); b = f2(); c = f3();
    return a + b + c
}

console.log(funcAll())