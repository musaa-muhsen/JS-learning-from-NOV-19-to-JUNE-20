this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
    x: 81,
    getX: function () { return this.x; }
};
const module2 = {
    x: 900,
    getX: function () { return this.x; }
};
console.log(module.getX());
//  returns 81

const retrieveX = module.getX;
console.log(retrieveX) // getX: function () { return this.x; } so this is now popped out of the object scope and into its own value that is in the global scope 
console.log(retrieveX());//  when pressed this returns 9; the function gets invoked at the global scope
const me = Object.create(module2);

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module2); // so ƒ () { return this.x; } is bound with the module object now and then its put in a variable value of "boundGetX"
console.log(boundGetX) //ƒ () { return this.x; } // this a value that is floating in the global scope, therefore the "this" keyword pointing in the global scope still 
console.log(boundGetX()); //  returns 81 // module = {x: 81, getX: function () { return this.x; }};


const boundGetX2 = retrieveX.bind(me); // so ƒ () { return this.x; } is bound with the module object now and then its put in a variable value of "boundGetX"
console.log(boundGetX2);

// figure this out go to the bind issue again then mozzila version of call 