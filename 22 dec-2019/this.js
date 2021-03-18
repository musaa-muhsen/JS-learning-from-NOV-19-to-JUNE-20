//object literalls are fine if you are only dealing with one object
//object literal VVV
//global scope something outside the function?
/*
const brad = {
    name: 'Brad',
    age: 30
}
console.log(brad.age);
*/

//person constructor

function Person(nameP, ageP) {
    this.nameT = nameP;
    this.ageT = ageP;
    //console.log(this) 
}

const brad = new Person('Brad',36);
const john = new Person('Kohn',39);

console.log(brad.nameT);
// ===========================================================


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.ageT = age;
    this.eyeColor = eye;   
    
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
    }

const person1 = new Person('John', 'Doe', 50, 'green');
const person2 = new Person('Kohn', 'Smith', 30, 'blue');

//const fullPerson = [person1.firstName, person1.lastName, person1.ageT ];
//console.log(fullPerson);
console.log(person1.fullName() + person1);




