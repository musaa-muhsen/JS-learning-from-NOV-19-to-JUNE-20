//returning multiple in javascript 
// first version more old school 
//return as a array containing values
function getFirstValue() {
    return 'hello';
}

function getSecondValue() {
    return 'world';
}

function getValues() {
    return [getFirstValue(), getSecondValue()];
}
// then to access them 

var value = getValues();
var first = value[0];
var second = value[1];

console.log(first, second)

// the functions into variables then return them together instead of individually
/*
function allTogether() {
    const func1 = function () {
        return 'hello';
    }
    const func2 = function () {
        return '  wrold';
    }
    return {
        func1, func2
    }

}
*/
// es6 version 
allTogether = () => {
    const func1 = () => 'hello';
    const func2 = () => ' wrold';
    return {
        func1, func2
    }
}

const hello = allTogether().func1(),
    world = allTogether().func2(),
    helloWorldBitch = hello + world;
console.log(helloWorldBitch);


/*
async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
  */

//Array.prototype.map()


const array1 = new Array('jim', 'bob', 'tom', 'kong')
/*
const arrayMap = array1.map(function (i) {
    return `${i} bob` //(4) ["j bob", "b bob", "t bob", "k bob"]
})
*/
// even shorter 
const arrayMap = array1.map((i) => `${i} bob`)
console.log(arrayMap)


