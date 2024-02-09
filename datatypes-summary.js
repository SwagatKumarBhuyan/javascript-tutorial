// Primitive (7 types)

//   1.string (const number="456")
//   2.number (const score=100)
//   3.boolean (const isLoggedin=false)
//   4.null (const outsideTemp=null)
//   5.undefined (let userMail)
//   6.Symbol (for give unique value) (const id= Symbol("123"))
//   7.BigInt (const bigNumber=456786789567n)

// Reference(Non-primitive)

// 1.Array  (const heros= ["hero","gudu","dabu"])
// 2.Objects 
  let myObj={
    name:"swagat",
    age:24,
  }
// 3.Functions
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);