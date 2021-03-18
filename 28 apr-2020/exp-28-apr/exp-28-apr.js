let bob = function (num, str) {
    console.log('static-jam', num, str, this, this.movie);
    return true;
}
// 3 properties are 2 strings and 1 property which is a function/method 
let bill = {
    name: 'Bill Murray',
    movie: 'Lost in Translation',
    myMethod: function (fn) {
        //fn(2, 'hello');
        let n = arguments[1];
        let s = arguments[2];
        joker = fn.bind(this, [n, s]);
        //fn.call(bill, n, s);
        console.log(joker())
        console.log(joker)
    }
}
//bob(1234, 'string-is-yo') //static-jam 1234 string-is-yo Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} undefined
bill.myMethod(bob, 4, 'ciao');
// bob is this 
//=========================================================================================
//=========================================================================================


function product(name, price) {
    this.name = name;
    this.price = price;
    // function testThis() {
    //     return this;
    // }
    //return testThis
}

// the call() method explicity calls a function with some kind of constructor 
// this might be the Product constructor function is the "this" value in Product.call(this,name price) 
function Food(name, price) {
    this.category = 'food';
    return product.call(product, name, price);
    //const testThis = () => this //Uncaught ReferenceError: Cannot access 'testThis' before initialization at new Food

}

const theFood = new Food('cheese', 6)
console.log(theFood)
console.log(theFood.category);
// expected output: "cheese"


// I want bob 