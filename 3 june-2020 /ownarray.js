function array () {
    let arr = Object.create(array.prototype)
    Object.defineProperty(arr, 'length', {
    value: 0,
    enumerable: false,
    writable: true,
    })
    for (const key in arguments) {
        console.log(key) //0, 1
        // statement below we are looping over two different objects arr object and 
        // how do we get the colon though??? because were creating a property 
        // arguments[0] // why do we use const because the variable is made once within the for in loop // A different property name is assigned to variable on each iteration. 
        arr[key] = arguments[key] + ' extra value' // we're adding arr.0 = function arg value
        //const arr = {};
        //let key;
       // arr[key] = 'value'; // * n amount // the for in loop is creating properties dynamically as part of a bigger object  
        arr.length += 1 // so this is targetting = "length: 2;"" (the third object) 
        }
     // arr.length at this point would be mutated  
    return arr // returning the whole arr object 
 }


    array.prototype.push = function (element) {
        // so order is important as well 
        //console.log([this.length] = 'fu') // array {0: "Jordyn extra value", 1: "Mikenzi extra value", length: "f"}
        // console.log([this.length]) // outcome is an array with one element with the value of 2 
        // console.log(this.length)
        console.log(this)
        this[2] = element; // this is pointing to the array func object so adding a property of the key of 2 and the value passed in by this function  
        console.log(this[2])
        //this[this.length] = element // pin pointing the third element of the array which is at 2 then adding the new element to it 
        this.length++ // increment the total number by 1 
        console.log(this.length)
        return this.length
    }


    array.prototype.push2 = function () {

    }
/*
        array.prototype.pop = function () {
        this.length--
        const elementToRemove = this[this.length]
        delete this[this.length]
        return elementToRemove
        }

        array.prototype.filter = function (cb) {
        let result = array()
        for (let index in this) {
        if (this.hasOwnProperty(index)) {
        const element = this[index]
        if (cb(element, index)) {
        result.push(element)
           }
          }
         }
        return result
        }
*/


let friends = array('Jordyn', 'Mikenzi')


friends.push('goo') // placed at position 2 
//friends.push('Joshy') // place at position 3 

console.log(friends)
// friends.pop() // Jake
// friends.filter((friend) => friend.charAt(0) !== 'J') 
// {0: "Mikenzi", length: 1 }