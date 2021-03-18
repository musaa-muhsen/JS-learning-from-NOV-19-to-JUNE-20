const user = {
    name: 'Tyler',
    age: 27,
    languages: ['JavaScript', 'Ruby', 'Python', 'huhui'],
    greet() {
        const hello = `Hello, my name is ${this.name} and I know`

        const langs = this.languages.reduce(function (str, lang, i) {
            if (i === this.languages.length - 1) {
                return ` ${str} and ${lang}.`
            } // to get the last one 
            // str is the accumulater which is the string in this context 
            // lang is the current value so its essiantly "" "and array[x]"
            // i = index Optional The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1. 
            // -1 is the last value/item
            // if statement is to add and to the last one using the 

            return `${str} ${lang},`
        }.bind(this), "")

        console.log(hello + langs)
    }
}

user.greet()

// Again the reason for this because with arrow functions, this is determined “lexically”. Arrow functions don’t have their own this. Instead, just like with variable lookups, the JavaScript interpreter will look to the enclosing (parent) scope to determine what this is referencing.



console.log('First')

setTimeout(function () {
    console.log('Second')
}, 0)

new Promise(function (res) {
    res('Third')
}).then(console.log)

console.log('Fourth')