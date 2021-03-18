function add() {
    var counter = 0;
    counter += 1;
    return counter;
}

// Call add() 3 times
add();
add();
console.log(add());

//w3school 
var add2 = (function () {
    var counter = 0;
    //return counter;
    function myFunc2() {
        counter += 1;
        return counter;
    }
    return {
        myFunc: myFunc2
    }
})();

console.log(add2.myFunc());
console.log(add2.myFunc());
console.log(add2.myFunc());

// console.log(add2());
// console.log(add2());

//A closure is a function having access to the parent scope, even after the parent function has closed.

