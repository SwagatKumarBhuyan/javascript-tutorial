// const wpUser = new Object()  //singleton object
const wpUser = {} // non-singleton
wpUser.id = "123abc"
wpUser.name = "swagat"
wpUser.isLoggedIn = false

// console.log(wpUser);

// ******* Declare a object inside a object **********

const fbUser = {
    email: "tablu@.com",
    fullname: {
        userfullname: {
              firstname: "gudu",
              lastname: "bhuyan",
        }
    }
}

// console.log(fbUser.fullname);
// console.log(fbUser.fullname.userfullname.lastname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"} 

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
] 

users[1].email
console.log(wpUser);

// ********** get the value and stored into a array ********

console.log(Object.keys(wpUser));
console.log(Object.values(wpUser));

// ************ entries methode specify a single key and his value into single array *******
console.log(Object.entries(wpUser));

// *********** To check object has the property *********
console.log(wpUser.hasOwnProperty('isLoggedIn'));