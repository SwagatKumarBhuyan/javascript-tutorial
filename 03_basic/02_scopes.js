//  Scope are two types : Block , Global

let a = 300
{
    let a = 10
    const b = 20
    console.log("Inner: ",a);
}
console.log("Outer :",a);

//Notes------In the above whatever written in between {} these are block scope and outside written are global scope //

