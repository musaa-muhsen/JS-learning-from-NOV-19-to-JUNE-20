// destructuring with functions  

function getValues() {

    const getFirstValue = () => 'hello',
        getSecondValue = () => 'world';

    //return {
    // first: getFirstValue(),
    // second: getSecondValue(),
    //};

    return [getFirstValue(), getSecondValue()]
}

// old way with objects
//console.log(getValues().first + getValues().second);

// objects property key way 
// const { first, second } = getValues();
// console.log(first)

// old way with arrays //the function itself almost resemebles an object when access the array returned  
const firstOldArr = getValues()[0];
console.log(firstOldArr);

const [first, second] = getValues();

console.log(first, second)

//====================================================================================================================================
//====================================================================================================================================


const sayHello = (obj) => `hello my name is ${obj.firstName} ${obj.lastName}`;

console.log(
    sayHello({ firstName: 'Tom', lastName: 'Ford' })
)

//====================================================================================================================================
//====================================================================================================================================


