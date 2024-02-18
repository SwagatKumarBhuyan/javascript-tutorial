// ************** for loop ***************

/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    }
*/


/*
for (let i = 0; i <= 10; i++) 
{
    const element = i;
    if (element == 5) {
        // console.log("5 is prime number");
    }
    console.log(element);
    }
    */


    /*
    for (let i = 0; i <= 10; i++) {
        console.log(`Outer loop value: ${i}`);
        
        for (let j = 0; j <= 10; j++) {
            // console.log(`Inner loop value: ${j} and inner loop  ${i}`);
            console.log(i + '*' + j + ' = ' + i*j );
        }
    }
    */


    /*
    let myArray = ["Hanuman" , "Mahadev" , "Bishnu"]
    console.log(myArray.length);
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        console.log(element);
    }
    */

    // ******** Break and Return and Continue statement **********

    for (let i = 0; i <= 10; i++) 
   {
    const element = i;
    if (element == 5) {
        console.log('Detected 5');
        // break
        // continue
        return
    }
    console.log(`value of i is: ${element}`);
    }