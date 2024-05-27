let user = new Object();

let person = {}

let employee = {
name:'XYZ',
age:25
}

// console.log("Employee 1 >>>>>", employee)
// employee.designation = "Software Engineer"
// console.log("Employee 2 >>>>>", employee)
// delete employee.age
// console.log("Employee 3 >>>>>", employee)

// console.log("Employee name", employee.name)
// console.log("Employee name", employee['name'])


// //Multiword property
// employee['Is Admin'] = true
// console.log("Employee 4 >>>>>", employee)
// delete employee['Is Admin']
// console.log("Employee 5 >>>>>", employee)
// employee.key = "test"
// let key = prompt("Which property value you want to see....")
// alert(employee.key) //test
// alert(employee[key]) //name : XYZ

// let props = prompt("Which property you want to add....")
// let value = prompt("What value you want to assign to "+props+" ?")
// employee[props] = value
// alert(employee) 
// alert(JSON.stringify(employee)) 

// let p1 = {name:"XYZ",age:30}


function employeeCreation(name,age,designation,salary){
return{
    name,
    age,
    designation,
    salary,
    companyName:"My Firm"
}
}

let employee1 = employeeCreation("abc",30,"Sr. Software Eng.",100000)
let employee2 = employeeCreation("abc",26,"Software Eng",50000)
let employee3 = employeeCreation("abc",24,"Intern",10000)

console.log("Employee 1 >>>>>", employee1)
console.log("Employee 2 >>>>>", employee2)
console.log("Employee 3 >>>>>", employee3)


let arr:number = [1,2,3]  //int : 2bytes MA:2000

arr = [ 1 , 2 , 3]
    2000-2002, 2002-2004, 2004-2006
char *     
arr[0] = 2000 + -1 * 1 = 2000-1 = 1999 //1
arr[1] = 2000 + 1 * 1 = 2002 //2
arr[2] = 2000 + 2 * 1 = 2004 //3


