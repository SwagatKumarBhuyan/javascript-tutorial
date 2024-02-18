const programming = ["js", "py", "ja", "re"]

// programming.forEach(function(val1){
//     console.log(val1);
// })

// programming.forEach( (item) => {
//     console.log(item);
// })


// programming.forEach( (item, index, arr) => {
//         console.log(item, index, arr);
//     })


const myCoding = [
    {
        languageName: "javascript",
        price: 33000
    },
    {
        languageName: "java",
        price: 30000
    },
    {
        languageName: "python",
        price: 32000
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})