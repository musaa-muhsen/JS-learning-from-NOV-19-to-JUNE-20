// const sayHello = function() {
//     console.log('hello');
// }


// const sayHello = () => {
//     console.log('hello');
// }

// one line function does not need braces
//const sayHello = () => console.log('hello');

//one line returns 
//const sayHello = () => 'hello';


//return object 
//const sayHello = () => ({msg : 'hello'});

// no need for parentheses if single parameter 
//const sayHello = name => console.log(`hello ${name}`)

//if two or more parameters, parantheses are needed 
// const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);

// sayHello('brad','trav');

const users = ['nathan' , 'john', 'william'];

// const nameLengths = users.map((user) => {
//      return user.length;
// });

//even shorter 
const nameLengths = users.map((user => user.length));

console.log(nameLengths);
