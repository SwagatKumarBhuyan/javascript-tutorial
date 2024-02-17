// Immediately Invoked Function Expression (IIFE)

// IIFE generally used remove the global scope pollution

// type1 (named iife)

/*
(function chai() {
    console.log(`Db Connected`);
}) ()
*/

// type2 (unnamed iife)

/*
(()=> {
    console.log(`Db Connected`);
}) ()
*/

// type3 (combination of named and unnamed iife)

/*
(function chai() {
    console.log(`Db Connected`);
}) ();   // Here semicolon(;) required

(()=> {
    console.log(`Db Connected Two`);
}) ()
*/

// *** Notes ***
//    After one iife its required to give semicolom (;) for written another or else it gives error


// type4 (parameter iife)
(function chai() {
    console.log(`Db Connected`);
}) ();   // Here semicolon(;) required

((name)=> {
    console.log(`Db Connected Two and ${name}`);
}) ('swagat')