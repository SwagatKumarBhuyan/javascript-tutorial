//  Scope are two types : Block , Global

/*
let a = 300
{
    let a = 10
    const b = 20
    console.log("Inner: ",a);
}
console.log("Outer :",a);
*/

//Notes------In the above whatever written in between {} these are block scope and outside written are global scope //

/********* Nested Scope********/

/*
function one() 
{
   const username = "swagat"

   function two(){
    const website = "youtube"
    console.log(username);
   }
//    console.log(website); // not executed bcz it outside of scope two

two()

}

one()
*/

if (true) {
    const username = "swagat"

    if (username === "swagat") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); // not executed bcz it outside of scope two 
}
// console.log(username); //not executed bcz it outside of scope one


// ************* Interesting ***********

addOne(5)          // Executed 
function addOne(num){
    return num+1
}


addTwo(5)          // Not executed bcz here we declare function by a object
const addTwo = function(num)
{
    return num+2
}