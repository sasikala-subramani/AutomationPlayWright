// Encapsulation example
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},
        Address is: ${this.add}`);
    }
}
 
let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails();



/* Output: Output: In this example, we simply create a person Object using the constructor, 
Initialize its properties and use its functions. We are not bothered by the implementation details.
 We are working
 with an Object’s interface without considering the implementation details. 

 

*/