//A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.
//Methods are stored in properties as function definitions.
//The name:values pairs in JavaScript objects are called properties:
//function in a object literal 
const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    // firstName: "hello",
    // lastName: "world"
    //the parameter takes in the arguement when called later //this can called by using key and parathensis 

   getsMarried: function(newLastNameP) {
        this.lastName = newLastNameP
    }
}

//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. //done by using the object name 
const mary = Object.create(personPrototypes);
//prototypes properties 
mary['firstName'] = 'Mary';
mary['lastName'] = 'Williams';
mary['age'] = 30;

//below is calling the value and the function contained inside and using the 'newLastNameP' as the arguement also adding the function in "personPrototypes" to the new object just like the properties above 
mary['getsMarried']('Thompson');

console.log(mary.greeting());


//other way of using Object.create() be defining the the value within a object by using brackets followed by a comma 
const brad = Object.create( personPrototypes, {
     firstName: {value: 'Brad'},
     lastName: {value: 'Traversy'},
     age: {value: 36} 
});

//console.log(brad);
console.log(brad.greeting());