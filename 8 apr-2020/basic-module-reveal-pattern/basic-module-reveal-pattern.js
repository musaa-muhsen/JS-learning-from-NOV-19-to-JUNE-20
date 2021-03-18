var log = console.log;
/* basic IIFE which stands for 'immedantly invoked function expression'
const testife = (function () {
    alert(1);
})();
or 
(function() {
    alert(1)
})();
*/

// private because you can't access it outside the module 
// make an iife blueprint below 
/*
(function() {
  // declare private vars and functions 
 return {
  // declare public vars and functions 
 }
})();
*/

// IIFE that Return Functions

const DOMCtrl = (function () {
    let text = 'hello world';

    const changeText = function () {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function () {
            changeText();
            console.log(text);
        }
    }

})();


DOMCtrl.callChangeText();
//log(DOMCtrl.text);

// revealing module pattern ============================

// The main difference is the instead of returning our own public functions like we did here you basically 
// map and object literal and you map to private functions that you want to reveal. And that's why it's call the revealing pattern because you can reveal 
// certain methods from your module.

const ItemCtrl = (function () {

    let data = [];

    function add(item) {
        data.push(item);
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    // function itemFind(item, id) {
    //     return item.id === id;
    // }


    return {
        addYo: add,
        get: get
    }
})();


ItemCtrl.addYo({ id: 1, name: 'John' });
ItemCtrl.addYo({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(2));

// creating objects 
/*
const objectBitch = new Object('hello');
const stringBitch = 'hello';
console.log(typeof objectBitch)
console.log('hello')
*/
// singleton pattern for one instance ===========================================================

const YoSingleton = (function () {
    let instance;

    function createInstance() {
        const object = new Object({ name: 'hello', age: 11 });
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                // if there is no existing single instance is invoked 
                instance = createInstance();
            }
            return instance;
        }
    }
}());

const instanceA = YoSingleton.getInstance();
log(instanceA)


