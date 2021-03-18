[a, b, c, ...rest] = [100, 200, 300, 400, 500];

//objects literals, parenthuses to make an expression 
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest); //{c: 300, d: 400, e: 500}

// array destructuring 
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

//array returned from function 
function getPeople() {
    return ['John', 'Beth', 'Mike'];
}
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// Object Destructuring 

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
}

// old es5 
//const name = person.name, age = person.age, city = person.city;

// new es6 destructuring 
const { name, age, city, sayHello } = person;
console.log(name, age, city);

sayHello();


//object within a object 
const hello = { a: { b: 1 } };
console.log(hello);

//example of destructing in real usage 
// fetch(api)
// .then (data => {
//    const {temperature, summary} = data.currently;
// });