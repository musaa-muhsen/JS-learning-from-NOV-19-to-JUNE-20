//old school way above 

/*
function PersonV2(firstName, lastName) {
    this.firstNameT = firstName;
    this.lastNameT = lastName;
}

const person2 = new PersonV2('John','Doe');

console.log(person2);
*/
//same as before 
class PersonB1 {
     constructor(firstName, lastName){
         this.firstNameT = firstName;
         this.lastNameT = lastName;
     }
     greeting() {
         return `hello there my name is ${this.firstNameT} ${this.lastNameT}`;
     }
     getsMarried(newLastName) {
         this.lastNameT = newLastName;
     }
     //The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

     static addNumbers(x,y) {
         return x + y;
     }
}

const mary = new PersonB1('Mary', 'Smith');

mary.getsMarried('Thompson');

//console.log(mary.greeting());

//console.log(PersonB1.addNumbers(3,2));

//sub classes ==============================================================

