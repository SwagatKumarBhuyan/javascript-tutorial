// ******** for of loop **********

// basic syntax
/*
for (const iterator of object) {
    
}
*/

/*
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(`Value is ${num}`);
}
*/

/*
const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each Char is ${greet}`);
}
*/


//  Maps

const map = new Map()

map.set('In' , 'India') 
map.set('UK' , "United Kingdom") 
map.set('JP' , "Japan") 
// map.set('In' , 'India') // not execute bcz in map only unique value applicable
// console.log(map);
for (const [key , value] of map) {
    console.log(` key is ${key} and value is ${value} `);
}