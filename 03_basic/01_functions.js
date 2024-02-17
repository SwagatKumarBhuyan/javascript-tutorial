// function myName(){
//     console.log("g");
//     console.log("u");
//     console.log("d");
//     console.log("u");
// }
// myName()

/********* Function declare type ***********/

// type1
/*
function addTwoNumbers(num1,num2)
{
  console.log(num1+num2);
}
addTwoNumbers(3,4)
*/

// type2
/*
function addTwoNumbers(num1,num2)
{
 let result = num1+num2
 return result
 console.log("hitesh"); // not executed bcz after return statement no values executed
}
const result =addTwoNumbers(3,4)
console.log("Results:", result);
*/

/*
function addTwoNumbers(num1,num2)
{
 let result = num1+num2
 console.log("hitesh"); //  executed 
 return result

}
const result =addTwoNumbers(3,4)
console.log("Results:", result);
*/

// type3
/*
function addTwoNumbers(num1,num2)
{
 return num1+num2
}
const result =addTwoNumbers(3,4)
console.log("Results:", result);
*/

/*
function loginUserName(username){
    return `${username} just logged in`
}
console.log(loginUserName("swagat"));
*/

/*
function loginUserName(username){
    if(username === undefined){
        console.log("please enter a usename");
    }
    return `${username} just logged in`
}
console.log(loginUserName());
*/

/*
function loginUserName(username){
    if(username === undefined){
        console.log("please enter a usename");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserName());
*/

/*
function loginUserName(username = "gudu"){
    if(!username){   // its equals to (username===undefined)
        console.log("please enter a usename");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserName());
*/

/*
function loginUserName(username = "gudu"){
    if(!username){   // its equals to (username===undefined)
        console.log("please enter a usename");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserName("swagat"));
*/

/************** Uses of Rest operator(...) in function ***************/

/*
function calulateCartPrice(num1){
    return num1
}
console.log(calulateCartPrice(100,300,400)); //no printed
*/

/*
function calulateCartPrice(...num1){
    return num1
}
console.log(calulateCartPrice(100,300,400)); // printed
*/

/*
function calulateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calulateCartPrice(100,300,400,5000));
*/

/****** Handle object in function *******/

// type1
const user = {
    username: "swagat",
    price: 200
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// type2
handleObject(
    {
        username: "gudu",
        price: 300
    }
)

// type3
const myNewArray = [200,300,400,500]

function returnSecondValue(getArray)
{
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));

// type4
function returnSecondValue(getArray)
{
    return getArray[2]
}
console.log(returnSecondValue([100,200,400,500]));