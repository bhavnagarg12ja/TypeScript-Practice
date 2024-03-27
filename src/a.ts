const x: number = 1;
console.log(x);

//Learn how to give types to function arguments in TypeScript.
function greeting(name: string): void {
    console.log("Hello " + name);
}
greeting("harnoor");

//Learn how to assign a return type to a function in TypeScript.
function sum(a: number, b: number): number{
    let c:number = a + b;
    return c;
}
console.log(sum(2,3));

//Understand Type Inference in TypeScript.
function isLegal(age:number): boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}
console.log(isLegal(30));

//Learn to work with functions as parameters in TypeScript.
function runAfter(fn: () => void):void{
    setTimeout(fn,1000);
}
runAfter(function(){
    console.log("hi there");
})

//Interfaces
//Problem: Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User {
    firstName : string;
    lastName : string;
    email : string;
    age : number;
}
function isLegaal(user: User):boolean{
    if (user.age > 18) {
        return true; // Return true if the user is legal
    } else {
        return false; // Return false if the user is not legal
    }
}

 console.log(isLegaal({
    firstName : "qweds",
    lastName : "hajhk",
    email : "hi@gmail.com",
    age : 12
 }))

 //implementing interfaces
 //Interfaces have another special property. You can implement interfaces as a class.
 interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("harkirat", 22);
console.log(e.name);
console.log(e.age);
(e.greet("hi there"));

//Types
//Union
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202

//intersection
type Employee1 = {
    name: string;
    startDate: Date;
};
  
type Manager = {
  name: string;
  department: string;
};
  
type TeamLead = Employee1 & Manager;
  
const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
console.log(teamLead);

//Arrays
//Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User1 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User1[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));