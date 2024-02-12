//Constructor

//import { Console } from "console"

function student(name, subject)   //constructor with params
{
    this.name=name;
    this.subject=subject;
}

let student1=new student('sasi','math')
let student2=new student('sa','science')

console.log(student1.name)
console.log(`${student2.name}${student2.subject}`);
//console.log(`${person2.first_name} ${person2.last_name}`);