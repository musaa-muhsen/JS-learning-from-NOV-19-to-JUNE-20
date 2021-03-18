
// returning an object a object literal 
function rabbitBtn(nameArg) {
    this.name = nameArg
    return {
        methOne: () => { console.log(this) },
        methTwo: () => { console.log(this.name) }
    }
}

const rabbi = new rabbitBtn('okja');
rabbi.methOne(); // with a normal function {methOne: ƒ, methTwo: ƒ}methOne: ƒ ()methTwo: ƒ () from the new instance of object named rabbi 

var x = 8;

function newbieFunk(y) {

    console.log(x + y)
}
newbieFunk(10)

// does'nt really matter sometimes if you trying to access from the arrow func or from invocation point 
const ouch = () => {
    console.log(this.x)

}
ouch()

console.log(myBro())

function myBro() {
    const oneVar = 1;
    const twoVar = 3;

    return {
        oneVar,
        twoVar
    }
}


const obvious = () => ({
    a: 1,
    b: 2,
})

const { a, b } = obvious();

console.log(b)


