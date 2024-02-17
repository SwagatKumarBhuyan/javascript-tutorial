/*
const user = {
    username: "swagat",
    price: 200,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to our website`);
    }
}

user.welcomeMessage()

user.username = "gudu"
user.welcomeMessage()

*/

/*
const user = {
    username: "swagat",
    price: 200,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to our website`);
        console.log(this);
    }
}
*/

/*
const user = {
    username: "swagat",
    price: 200,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to our website`);
    }
}
console.log(this);
*/


// function chai() {
//     console.log(this);
// }
// chai()


// function chai() {
//     let username = "swagat"
//     console.log(this.username);
// }
// chai()  // output undefined bcz we cant use this in a object 


// const chai = function () {
//     let username = "swagat"
//     console.log(this.username);
// }
// chai()  //  output undefined bcz we cant use this in a object 


/************* Arrow function (=>)**********/

// const chai =  () => {
//     let username = "swagat"
//     console.log(this.username);
// }
// chai() //  output undefined bcz we cant use this in a object 

/*
const chai =  () => {
     username = "swagat"
    console.log(this);
}
chai() // output will be empty paranthesis({})
*/


// Basic Arrow function

/*
const addTwo = (num1 , num2) => {
     return num1 + num2 
}
console.log(addTwo(8,9));
*/

// Implicit Arrow Function

// const addTwo = (num1 , num2) =>  num1 + num2 
// console.log(addTwo(8,9));

// const addTwo = (num1 , num2) =>  (num1 + num2)
// console.log(addTwo(8,9));


//Explicit Arrow Function

const addTwo = () => ({username: "swagat"})
console.log(addTwo());
