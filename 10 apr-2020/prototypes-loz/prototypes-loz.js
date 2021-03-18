// function Apple(xArg, y, color, score) {
//     this = { x: 10 };

//     this.x = xArg;

//     //return this; // can also be added but there is no need basically returning all the this's?
// }
// new Apple(xArg);

//eat and throw are not unique to any one particular Apple so they can be put in the prototype 

//constructors and prototypes

function Apple(color, weight) {
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
    throw0: 'hello',
    throw: function () { return this; }
};

const apples = [];


const apple1 = new Apple('red', 99);
const apple2 = new Apple('green', 110);
const apple3 = new Apple('yellow', 201);

console.log(apple1.throw()); // returns the Apple as a object with everything including prototype

apples.push(apple1, apple2, apple3);

console.log(apples[1].throw0);

// apples.forEach(function (apple) {
//     document.getElementById('content').innerHTML += `color: ${apple.color} | weight: ${apple.weight} <br>`;
// });
// const object = {a: 1, b: 2, c: 3};

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);

for (apple in apples) {
    document.getElementById('content').innerHTML += `color: ${apples[apple].color} | weight: ${apples[apple].weight} <br>`;
    //console.log(apples[apple].color, apples[apple].weight);


}

//console.log(apple1); //Apple {color: "red", weight: 99}
//console.log(apple1.eat()); // eat the apple // without returning this
//console.log(apple1.whatSize()); //Apple {color: "red", weight: 99}





// the . is the member access operator to access the callable object 

// classes 

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return this;
    }
}

mycar = new Car('Ford');
mycar2 = new Car('Honda');
console.log(mycar);
console.log(mycar2);
//console.log(mycar.present('hello'));
