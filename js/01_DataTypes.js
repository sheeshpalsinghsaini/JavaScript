// In JavaScript, data types represent the different kinds of values you can work with.

/* 
    1. String: 
    - A string is a sequence of characters (letters, numbers, symbols) enclosed in quotes. You can use single ('), double ("), or backticks (`) for strings.
    - Usage: Strings are used for text, like names, messages, or any other words or characters

*/
let myName = "Alice";
let greeting = 'Hello, world!';
let message = `My name is ${myName}`; // Using backticks for template literals

console.log(myName);
console.log(greeting);
console.log(message);


/* 
    2. Number: 
    - A number can be an integer (whole number) or a floating-point number (a number with a decimal point).



*/ 

let age = 25; // integer
let price = 19.88; // floating-point number 

console.log(age)
console.log(price);

/*
    Boolean: 
        - A boolean represents one of two values: true or false.
        - Usage: Booleans are used in conditions or decisions, like whether something is true or false.

*/

let  isRaining = true; 
let isSunny = false;
console.log(isRaining)
console.log(isSunny)




/*
    Null : 
        - null is a special value that represents "nothing" or "no value." It's intentionally assigned to a variable to indicate that it doesn't have a value.
        - Usage: Use null when you want to explicitly set a variable to have no value.

*/

let result = null; // means the result is intentionally empty or unknown.
console.log(result);


/**
    Undefined: 
        - undefined means that a variable has been declared, but it hasn't been assigned a value yet.


 */

let data;
console.log(data); // output: undefined, because data has no assigned value.


/**
    BigInt: 
        - BigInt is a special type used for very large integers that are beyond the limit of the regular Number type. It's created by appending an n to the end of an integer.
        - Use BigInt when you need to work with numbers larger than the safe limit for regular numbers.
 */
let largeNumber = 2458927459827340592845024n;
let anotherBigInt = BigInt(932845729384572384520934875029834);

console.log(largeNumber);
console.log(anotherBigInt);

let name = "John"; // String
let age2 = 30; // Number
let isStudent = false; // Boolean
let address = null; // Null
let phoneNumber; // Undefined
let largePrime = 1234567890123456789012345678901234567890n; // BigInt

console.log(name, age2, isStudent, address, phoneNumber, largePrime);
