// if this.isHuman is created out the scope os person object would it look for it?
/*
function personTest(isHuman) {
    this.isHumanProp = isHuman
}

personTest.prototype.proHuman = 'testOne';
const testOne = new personTest(true)
console.log(testOne.proHuman)

//const person = {
function printIntroduction() {
    //a = testOne
    console.log(`My name is. Am I human? ${this.isHumanProp}`);
}

//};
printIntroduction.call(testOne)
*/
//const bitchTest = 'printIntroduction'
//console.log(person[bitchTest]());
//console.log(me)


//================================================================================================
//================================================================================================


//console.log(2 + (-1)) //1
//console.log(3 + (-2)) //1
console.log(1 - (-1)) //2 so you take away a negative one from postive one it's kind of like a see-saw
// Minus and minus = a plus
// take away a minus from a plus 
console.log(500 - -1) // so you are taking a negative one away from a postive boosting it's number 
console.log(10 + (-1)) // you have got a positive ten and you add a negaitve making it weaker adding weakness to he the positive 
console.log(2 - -1)


//================================================================================================
//================================================================================================
//With arrow functions the this keyword always represents the object that defined the arrow function.
// So in short, with an arrow function 'this' represents the owner of the function.

function global(a) {
    console.log(this)
    const bitch = () => {
        console.log(this)
    } // 'this' is pointed here when invoked 
    a = bitch
    a(); // the arrow function gets invoked from it's made which is in the local scope
    //console.log(bitch) // just the function itself
    //bitch()  
}

new global()

//================================================================================================
//================================================================================================

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

function global2() {
    console.log(this)
    function hello() {
        console.log(this.hello) // becuase it been invoked on the global scope from 
    }
    hello()
}

function funkyCon() {
    return this.hello = 'hello world';
}
funkyCon()
new global2()//'this' is looking here when invoked 

//================================================================================================
//================================================================================================
