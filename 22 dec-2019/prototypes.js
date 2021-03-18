//Object.prototype
//Person.prototype
//PROTOTYPES = they are objects that have properties ans methods that can be accessed via a range of different objects and its all down to how that object is constructed 
function Apple(colorP,weightP) {
    this.colorT = colorP;
    this.weightT = weightP
}
//when you have an instance of something such as the constructor is the blueprint for an object and an instance a copy of that object so when we run that function it returns an object that is an instance it's a 
//copy and on the instance level it needs to be unique you need to be able to identify this object from other objects its properties and so forth you even have unique methods but typically you don't find that
//so we want to attach a prototype object to our constructure and what this does is when we attach this prototype object we are in fact defining a shared object so now all of our apple objects ob the instance level 
//for each copy has its own properties and potentially unique methods so everything that is unique to that object is on the instance level 
//so prototypes are object they are shareble objects, they share their properties and their methods so that you can access those members via the instances that were created 
//so if i were to use "this" keyword in the prototype object it points back to that initial instance that invoked it, that is why it's useful and unique to javascript and it saves alot of memory 

const apple1 = new Apple("red",22);
const apple2 = new Apple("green",12);
const apple3 = new Apple("purple", 55);
//below there are some members meaning some properties and methods that are not unique to this object for example eat and throw 
//a shared object for shared members 

//eat and throw methods they are not unique to each of those apple objects, so there is no need to have eat and throw methods 
// Person constructor
/*
//same as 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

//calculate the age from the birthday 
   Person.prototype.calculateAge = function() {
    //the Date.now is going to give us right now is the time stamp time and then we're going to substract the referenced time property in Person 
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//get full name method
Person.prototype.getFullName = function() {
   return `${this.firstName} ${this.lastName}`;

}
//to add a new last name method
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

//the instantances created 
const john = new Person('John' , 'Doe', '11-10-1981');
const mary = new Person('Mary', 'Smith', 'March 20 1978');

mary.getsMarried('Doe');
console.log(mary.getFullName());


let nums = [1,2,-8,3,-4,7];
//console.log(nums);



//NET NINJA version ================================================
/*
function User(email,name) {
    this.email = email;
    this.name = name;
    //this.online = false;
}
User.prototype.logIn = function() {
    this.online = true;
    console.log(`${this.email} has logged in`);

 }
User.prototype.logOut = function() {
    this.online = false;
    console.log(`${this.email} has logged out`);
}


const userone = new User('johndoe@gmail.com' , 'John Doe');
const usertwo = new User('marysmith@gmail.com', 'Mary Smith');


console.log(userone);
console.log(usertwo.logOut());

*/
/*
let animal = {}
animal.name = 'Leo'
animal.energy = 10
console.log(animal)
*/
