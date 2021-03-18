//person constructor 

function Person(firstName, lastName) {
    this.firstNameT = firstName;
    this.lastNameT = lastName;
}
//greeting method prototype
Person.prototype.greeting = function() {
    return `Hello there ${this.firstNameT} ${this.lastNameT}`;
}

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

//call() is a function that allows us to call another function from somwhere else in the current context.
//function.call(thisArg, arg1, arg2, ...) //thisArg is optional

//customer constructor 

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
//Creates a new object, with the specified prototype.
//Inherit the Person prototy[e methods, (brads comment)
//syntax Object.create(proto, [propertiesObject])
Customer.prototype = Object.create(Person.prototype);

//make Customer.prototype constructor return Customer() seems important but don't know why  
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-555', 'standard-member');

console.log(customer1); //greeting() does not work without inheriting the prototype

//Customer greeting, ovveride the first greeting prototype 
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}
console.log(customer1);

//===============================================================================
//below are all object literals 
/*
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName + "," + this.city + "," + this.country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe",
    city: "Manchester",
    country: "England"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  var x = person.fullName.call(person1); 
  console.log(x);
  */ 