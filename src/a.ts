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