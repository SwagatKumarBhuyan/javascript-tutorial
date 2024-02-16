// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // (Interview question)

// let myCreatedDate = new Date(2023,0,25)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,25,5,3)
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.getTime());

// let myTimeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long",
})
