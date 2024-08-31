

/*
1. If-Else Statement: 
    - The if-else statement is used to execute a block of code based on whether a condition is true or false.
    if (condition) {
        // code to execute if condition is true
    } else {
        // code to execute if condition is false
    }

*/

let age = 20;

if(age >= 18){
    console.log("You are an adult.");
}else{
    console.log("You are a minor.");
}

/**
 * 2. Switch Statement: 
 *  - The switch statement is used to perform different actions based on different conditions. It's useful when you have multiple conditions to check.
 * 
 */

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
    default: 
        console.log("Weekend");
    

}

/**
 *  3. Loops: loops allow you to repeat a block of code multiple times.
 *      
 *      a. For Loop: 
 *          The for loop is commonly used when you know how many times you want to repeat a block of code.
 */

    for(let i=0; i < 5; i++){
        console.log("Iteration number: "+i);
    }

// 4. while loop: 
console.log("---------------------------------")
    let i = 0;

    while( i<5){
        console.log("Iteration number: "+i);
        i++;
    }


// Do-While Loop
console.log("----------------------------");
i=0;
do{
    console.log("Iteration number: "+i);
    i++;
}while(i<5);


/**
 * Controlling the Flow of Programs
 *  -break;
 *  -continue;
 */