// destructuring assignment 
let a, b, log;

[a,b] = [100,200];

// rest aka spread operator
// rest pattern //The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
[a,b,c,...rest] = [100,200,300,400,500];

console.log(a,b,c,rest);

//parenthuses to make an expression 
//objects below 
({ a , b } = {a: 100, b: 200, c: 300, d: 400, e: 500});
// with rest destructuring 
({ a , b, ...rest } = {a: 100, b: 200, c: 300, d: 400, e: 500});
//console.log(rest);// 300 400 500

// array destructuring 

// const people = ['John' , 'Beth', 'Mike'];

// [person1, person2, person3] = people;

// console.log(person1, person2, person3);


function getPeople() {
    return ['John' , 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

//object destructuring 
//objects contain animous functions 

const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: () => {
        console.log('hello');
    }

}
//old school way es5
const name = person.name,
      age = person.age,
      city = person.city;


//const {name, age, city , gender, sayHello} = person;

person.sayHello();
console.log(name, age)


