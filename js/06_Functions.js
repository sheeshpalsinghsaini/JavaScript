/**
 * Functions: Understand function declarations, expressions, arrow functions, and hoisting. Explore more complex concepts like closures and function scopes.
 *  - hoisting, closures and function scope explain in previous notes[js.md] please refer that one.
 * 
 * 
 * 
 * 
 * Functions are one of the core building blocks in JavaScript. They allow you to group a block of code together, which you can then execute whenever you need. 
 * Let's explore the different ways to define and use functions in JavaScript:
 * 
 *  
 *  1. Function Declarations: 
 *          defines a function with a name, and it can called anywhere in your code after it's declared.
 * 
 *      function functionName(paramerters){
 *                  // code to be executed...
 *              }
 */

function greet(){
    console.log("Hello, World");
}

greet();    // Hello, World


/**
 *  2. Function Expressions: 
 *      A function expression defines a function and assigns it to a variable. Unlike function declarations, function expressions are not hoisted,
 *       meaning you can't call them before they are defined.
 * 
 *      const functionName = function(parameters){
 *              // code to be executed...
 *          }
 */

const greet2 = function(){
    console.log("Hello, world");
}

greet2();


/**
 *  3. Arrow Functions: 
 *          Arrow functions are a more concise way to write function expressions. They also have a different behavior for the this keyword compared to regular
 *           functions, which is more advanced but important in certain contexts
 * 
 *      syntax: 
 *          const functionName = (parameters) => {
 *              // code to be executed
 *          }
 * 
 * 
 * 
 */

const greet3 = () => {
    console.log("Hello, world");
}
greet3();

/**
 * Arrow Functions with One Parameter and Single Line:
 *      If an arrow function has only one parameter and a single line of code, you can omit the parentheses around the parameter and the curly braces
 */

const greet4 = name => console.log(`Hello, ${name}`);
greet4("SheeshpalSinghSaini");

/**
 Key Differences Between the Types:
    Function Declarations:
        Can be called before they are defined in the code.
        Standard way to define reusable code.
    Function Expressions:
        Must be defined before they are called.
        Stored in a variable, which can be useful in certain programming patterns.
    Arrow Functions:
        More concise syntax.
        Do not have their own this context, which can be beneficial or problematic depending on the situation.
        Best used for simple, short functions, particularly as callbacks.
 */