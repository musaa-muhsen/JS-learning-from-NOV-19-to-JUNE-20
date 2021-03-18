
class Person {
    constructor(firstName, lastName) {
        this.firstNameT = firstName;
        this.lastNameT = lastName;   
    }

    greetings() {
        return `welcome ${this.firstNameT} ${this.lastNameT}`;
    }
}

//sub class of person 

class Customer extends Person {
    constructor(firstName, lastName, phoneP, membershipP) {
       super(firstName, lastName);

       this.phoneT = phoneP;
       this.membershipT = membershipP
    }
    static getMembershipCost() {
        return 500;
    }
}


const person1 = new Customer('John', 'Doe', '555-555-555', 'basic');

console.log(person1.greetings());

console.log(Customer.getMembershipCost());