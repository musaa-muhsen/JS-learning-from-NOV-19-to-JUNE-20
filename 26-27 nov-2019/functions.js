
//Most of the time, you can avoid using the new keyword in JavaScript.

//make a variable with a function to return 10 x 3
//functions can be values as wells?
//basic animous function 
/*const calcNum = function(x) {
    return x * 10;
}

console.log(calcNum(20));
*/
//basic array
//let cars = ['volve','saab','jeep']; 
//console.log(typeof cars);


const animals = [
    {name: 'john', species: 'rabbit'},
    {name: 'sarah', species: 'dog'},
    {name: 'dean', species: 'dog'},
    {name: 'james', species: 'fish'},
    {name: 'wally', species: 'cat'},
    {name: 'tom', species: 'fish'}
] 
//console.log(animals[1]); //answer: sarah

//map() method/function 
//The map() method creates a new array with the results of calling a function for every array element.
//cut shorter 
var name = animals.map(function(animalz) {
    return animalz.name
    //return `${animalz.name}  is a ${animalz.species}` 
})
console.log(name)

//condition is the length of the array
// code of block to be excuted is adding the content of names into the empty names variable 
// const names = []
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }
// console.log(names) // out of 6 arrays 
//a basic push function would be = 
let fruits = ['banana','orange','apple', 7];

fruits.push('yoo','yooo2','yooo3');

console.log(fruits);

// filter ===============================
//filter function/method with a function inside it

/*let pickDogOnly = animals.filter(
    function(animalz) {
   return animalz.species === 'dog'
}) */

//same as 

// a function just to find any animal species called dog

/*const dogFunc = function(anima) {
    return anima.species === 'fish' 
}
const dogs = animals.filter(dogFunc)
*/

//console.log(pickDogOnly); // answer function 





//for loop way of filtering the array 
/*const dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog')
    dogs.push(animals[i])
}
*/

//console.log(dogs);