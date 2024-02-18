//********** if statement **********/

// const isUserLoggedIn = true
// if (2=="2") {
//     console.log("executed");
// }

// const temperature = 40
// if (temperature < 50) {
//     console.log("temperature is less than 50");
// }
// console.log("temperature is greater than 50");

/*************** if-else **********/
/*
const temperature = 40

if (temperature > 40) 
{
    console.log("temperature is less than 50");
}
else
{
    console.log("temperature is greater than 50");
}
console.log("executed");
*/


/*
const score=200
if (score > 200) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // not executed bcz it outside of scope
*/

/*
const balance = 1000
// if (balance > 500) console.log("execute");
if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 500){
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}
*/

/*
const userLoggedIn =true
const debitCard = true
const valueDebited = true

if (userLoggedIn && debitCard && valueDebited) {
    console.log("Allow");
}
*/


const loggedInFromGoggle = false
const loggedInFromEmail = true

if (loggedInFromGoggle || loggedInFromEmail) 
{
    console.log("user logged in");
}