// What do you do when you want to have your properties take variables?
//https://medium.com/front-end-weekly/javascript-object-creation-356e504173a8 
//  javascript objects need not have quotes around properties. 
// computed property name aka 'have an expression be computed as a property name on an object'

//This fails to substitute fruit_var with fruit
const fruit_var = 'fruit';
const fruits1 = { fruit_var: 'Apple', vegetable: 'Carrot' };
console.log(fruits1) //{fruit_var: "Apple", vegetable: "Carrot"}

// es6 way 
const fruit_var_es6 = 'fruit';
const fruits2 = { [fruit_var_es6]: 'Orange', vegetable: 'Potato' }
console.log(fruits2)

// old school way 
var eatables = { vegetable: 'Carrot' }
var fruit_var_old = 'fruit'
eatables[fruit_var_old] = 'Apple'
console.log(eatables) // {fruit: 'Apple', vegetable: 'Carrot'}

// Not only that, you can even do javascript computations using computed property names

const fruit_var_fat = 'FAT'
var eatables10 = { [fruit_var_fat]: 'Apple', [fruit_var_fat + ' Cake']: 'yummy' }
console.log(eatables10);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Before Computed Property Names, because the property name on the object was a variable (key), you’d have to create the object first, then use bracket notation to assign that property to the value.

function worldFuncOld(key, value) {
    let obj = {}
    obj['hello'] = 10;
    obj[key] = value // add value to the object key 

    return obj
}
console.log(worldFuncOld('Country', 'CHINNA!'))



// changing the key and using it with a function
function worldFunc(key, value) {
    return {
        [key]: value
    }
}

const world1 = worldFunc('Country', 'Japan')
const world2 = worldFunc('Country', 'CHINA')
console.log(world2)


// rabit hole shit 



