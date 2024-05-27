console.log("Hello world")

// let a=2,b=3;

// const sum = a + b
// console.log("Addition of "+a+ " & "+b +" is " + sum)

let number1 = prompt("Enter first number")
let number2 = prompt("Enter second number")
const isAddition = confirm("Are you sure you want to perform addition?")
if(isAddition){
    number1 = +number1
    number2 = +number2
}
const sum = number1 + number2
alert("Addition of "+number1+ " & "+number2 +" is " + sum)