// ES6 introduced two new features to make objects more concise - Shorthand Properties and Shorthand Method Names.
// With Shorthand Properties, whenever you have a variable which is the same name as a property on an object, when constructuring the object, you can omit the property name.

function formatMessage(name, id, avatar) {
    return {
        /*
        old way 
        name: name,
        id: id,
        avatar : avatar 
        // no need for the name/key and variable/value if they are the same 
        */
        name,
        id,
        avatar,
        timestamp: Date.now(),
        // old school of adding a method 
        save: function () {
            // old way  
        },
        saveNew() {
            // new way 
        }
    }
}

console.log(formatMessage())