// const userEmail = "swagat@com"  // Try to check here by ("", [] )

// if (userEmail) {
//     console.log("Got Email");
// }else
// {
//   console.log(" Dont't Get Email ");
// }


// *************** Notes ************* //

// falsy values - ( false , 0 , -0 , BigInt , null , undefined , NaN )

// truthy values - ( Except falsy values all are truthy values)
// some interesting truthy values - ( "0" , 'false' , [] , {} , function(){} )

/*
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is Empty");
}
*/

/*
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}
*/


//*********** Nullish Coalescing Operator (??): (null , undefined) ***********//

let val1;
val1 = 5 ?? 10             //  5
val1 = null ?? 10          //  10
val1 = undefined ?? 10     //  10
val1 = null ?? 5 ?? 10     //  5


// *********** Ternary Opeartor ***************//

// condition ? true : false (syntax)

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("true") : console.log("false")