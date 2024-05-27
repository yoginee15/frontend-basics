let a = {}; //1000
let b = {name:'Bob'} // 2000

a==b //1000 == 2000 //false

const c = {} // 6000
let d = {} // 7000

c==d //false

c.name = 'John' // 6000 => name = 'John'
c.age = 20


//
{}
new Object()

c = {school:'xyz'}



let string1 = 'Hello'
string1="Hello World"

let string2 ="Hello World"

string1 == string2 //true

const string3 = string1

string2 == string3 // true

string3 = string2 // 

string2==string3==string1 //true


let obj1= {} // 1200
const obj2 = obj1

obj1 = undefined;

obj2= null


obj1 == obj2 //true

obj2.name = 'John'

obj1.name // John





let user = {name:'xyz',organisation:{'name':'TCS',size:1000}}
    |
    |
// 20000 = {name:'xyz',organisation:3000}

//3000 ={'name':'Tech M',size:1000}

// for in loop
// Object.assign
let userClone = Object.assign({},user)

userClone //{name:'xyz',organisation:3000}

userClone.organisation.name='Tech M'

user.organisation.name //

let userClone2 = {}

for(key in user){
    if(typeof key == 'object'){
        
    }
    userClone2[key] = user[key]
}

//userClone2 = {name:'xyz',organisation:3000}






function printMe(obj){
    console.log("this",this)
    for(key in obj){
        console.log("Key :" + key +" => Value :"+ value)
    }
}

let user1 = {name:'xyz',organisation:{'name':'TCS',size:1000}}
let user2 = {name:'abc',organisation:{'name':'Cognizant',size:1000}}






















