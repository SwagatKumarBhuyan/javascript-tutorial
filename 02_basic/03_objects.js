// singleton

// ****** Interview question (Take a symbol and insert into object and print value) ****
const sym1= Symbol["key1"]

// object literals
const jsUser = {
    name: "swagat",
    "full-name": "swagat kumar bhuyan",
    [sym1]: "key1",
    age: 24,
    location: "puri",
    gmail: "swagat@gmail.com",
    isLoggedIn: false,
    lastLosinDays: ["Monday" , "Sunday"],
}

// console.log(jsUser.gmail);// (not right way)

// console.log(jsUser["gmail"]);
// console.log(jsUser["full-name"]);
// console.log(jsUser[sym1]);

// ******* To change any key value in object ******

jsUser.gmail = "gudu123@.com"
// console.log(jsUser["gmail"]);

// ******** After freeze no value will be changed *******

// Object.freeze(jsUser)
// jsUser.gmail = "my1234@.com"
// console.log(jsUser["gmail"]);
// console.log(jsUser);


// Add function in object

jsUser.greeting = function(){
    console.log("Hello World");
}
jsUser.greetingTwo = function(){
    console.log(`Hello World, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());