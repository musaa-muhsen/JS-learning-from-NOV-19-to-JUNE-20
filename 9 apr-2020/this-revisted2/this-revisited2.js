var log = console.log;

// const object = {};

// object['prop'] = this;
// object['embed'] = {};

// object['embed']['embed'] = true;
// object['embed']['method'] = function () {
//     return this;
// };

// log(object.embed.method());

const object = {
    prop: this,
    embed: {
        embed: true,
        method: function () { return this; }
    }
}

log(object.embed.method());

//object constructor function. ==============
// In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


myFather.nationality = ['baby1', 'baby2'];
//myFather.nationality = { carName: 'volvo', carColor: 'red' };

console.log(myFather);


//call method ====================================================
//function printName 


