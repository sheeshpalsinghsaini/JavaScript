# JavaScript

1. JavaScript is a Synchronous single threading langugae.

there are two main component of javascript program.
    1. Memory component [ define all variable and function here ] 
    2. code component [ where code execute line by line ]


2. In javascript all variable define by undefined by default or initial value in memory component.
   and function define as it is in memory component.

3. when javascript function invoke then new javascript context create[memory and code creation]

4. javascript program has call stack where in bottom it has Global execution context, all other function 
    execution context create on top of this.[ main programm run in global execution context]

## Call Stack 
    - call stack also known as 
        1. Execution context stack
        2. program stack 
        3. control stack 
        4. Runtime stack 
        5. machine stack 

    this call stack maintain the order of execution.




-------------------------------------------------

    What is Hoisting in javascript?
        Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope (either global or function scope) during the compilation phase, before the code is actually executed. This means that you can use functions and variables before they are declared in the code

        Key Points about Hoisting:
            Variable Hoisting:
                var: Variables declared with var are hoisted to the top of their scope, but only their declaration is hoisted, not their initialization. The initial value is undefined until the line where the variable is actually initialized is reached.

                let and const: These are also hoisted, but unlike var, they are not initialized with undefined. Instead, they are in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing them before their declaration results in a ReferenceError.


                console.log(a); // undefined
                var a = 5;

                console.log(b); // ReferenceError: Cannot access 'b' before initialization
                let b = 10;


            Function Hoisting:

                Function Declarations: Entire function declarations are hoisted, meaning you can call the function before it appears in the code.
                Function Expressions: If a function is defined using an expression (e.g., assigned to a variable), only the variable declaration is hoisted, not the function itself.

                foo(); // Works fine, outputs "Hello, World!"
                function foo() {
                console.log("Hello, World!");
                }

                bar(); // TypeError: bar is not a function
                var bar = function() {
                console.log("Hello, again!");
                };


                console.log(foo) // print whole function as it is.


----------------------------------------------------

    Not define: when there is no memeory allocation for that variable, mean there is no variable of that name.
    undefine: memeory is allocated but value is not assigne, javascript assign this by default value to that variable.



    TDZ: 
        The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when variables declared using let or const are accessed before they are declared in the code. The TDZ is the time between entering a scope (e.g., a block or function) and the point where the variable is declared and initialized.

        How TDZ Works:
            When the JavaScript engine encounters a block of code, it "hoists" the declarations of variables and functions to the top of their respective scope.
            For variables declared with let and const, the engine knows about their existence, but they are not initialized. This uninitialized state exists from the start of the block until the line where the variable is actually declared and initialized.
            During this period, the variable is in the TDZ, and any attempt to access it results in a ReferenceError.

                        {
                        console.log(x); // ReferenceError: Cannot access 'x' before initialization
                        let x = 10;
                        console.log(x); // 10
                        }


        Why TDZ Exists:
            The TDZ exists to enforce the proper use of let and const. It prevents developers from using variables before they are explicitly declared, which can lead to more predictable and safer code.
            This is different from var, where the variable is hoisted and initialized to undefined, potentially causing unexpected bugs if used before initialization.

      TDZ and Functions:
            TDZ also applies to variables declared with let or const in function parameters and in block scopes like loops:

            function example() {
                console.log(y); // ReferenceError
                let y = 20;
                }

                example();


-----------------------------------------------------------

#    Scope in JavaScript

##      Scope refers to the context in which variables and functions are accessible. There are three main types:

        Global Scope: Variables declared outside any function or block have a global scope. They can be accessed from anywhere in the code.
        Function Scope: Variables declared inside a function are only accessible within that function.
        Block Scope: Introduced with ES6, variables declared with let or const inside a block {} are only accessible within that block.

##      Lexical Environment

            A Lexical Environment is a structure that holds variable bindings and the reference to its outer environment. It consists of two parts:

                Environment Record: This holds the actual variable and function declarations.

                Outer Lexical Environment Reference: This is a reference to the lexical environment of the outer (parent) scope.

                Every time a function is executed, a new lexical environment is created.
                The Scope Chain

                The Scope Chain is a chain of lexical environments. When trying to access a variable, JavaScript starts by looking in the current lexical environment. If it doesn’t find the variable, it moves to the outer lexical environment, and so on, until it reaches the global environment.




        function outerFunction() {
        let outerVar = 'I am outside!';

        function innerFunction() {
            let innerVar = 'I am inside!';
            console.log(outerVar); // Can access outerVar
                }

                innerFunction();
                console.log(innerVar); // Error! Can't access innerVar
            }

            outerFunction();



In this example:

    outerVar is in the outer function’s scope and can be accessed by the innerFunction.
    innerVar is in the inner function’s scope and cannot be accessed by outerFunction.

This demonstrates how the scope chain works, with the inner function having access to variables in its outer lexical environment


Note: 

    In JavaScript, variables declared with var are function-scoped or globally scoped, but not block-scoped. This means that if you declare a var inside a block (like inside an if statement or a for loop), it can still be accessed outside that block within the same function.

    if (true) {
    var blockVar = "I'm inside an if block";
        }
        console.log(blockVar); // This will work and print the value of blockVar


----------------------------------

## BLOCK SCOPE & Shadowing in JS

Block Scope means that variables declared within a block {} are only accessible inside that block. This applies to variables declared with let and const, but not var.

if (true) {
    let blockScopedVar = "I'm inside a block";
    console.log(blockScopedVar); // Works
}
console.log(blockScopedVar); // Error! blockScopedVar is not defined

In this example, blockScopedVar is only accessible inside the if block because it was declared with let. Outside the block, trying to access it results in an error.

------------------
Shadowing occurs when a variable declared in an inner scope (e.g., within a block or a function) has the same name as a variable in an outer scope. The inner variable "shadows" the outer one, meaning the inner variable is the one that will be accessed within that scope.

let outerVar = "I'm in the outer scope";

function shadowingExample() {
    let outerVar = "I'm shadowing the outer variable";
    console.log(outerVar); // "I'm shadowing the outer variable"
}

shadowingExample();
console.log(outerVar); // "I'm in the outer scope"

In this example:
    The outerVar inside shadowingExample() shadows the outerVar in the global scope.
    Inside the function, when you log outerVar, it refers to the inner outerVar.
    Outside the function, the original outerVar is unaffected.

----------
Block Scope with Shadowing Example

let outerVar = "Outer";

if (true) {
    let outerVar = "Inner";
    console.log(outerVar); // "Inner" (Shadowing the outerVar)
}

console.log(outerVar); // "Outer" (Original outerVar)

The outerVar inside the if block shadows the outerVar from the outer scope.
Inside the block, outerVar refers to the inner one. Outside, the outer outerVar remains unaffected.




# Closures in JavaScript

Closures are a fundamental concept in JavaScript where an inner function has access to variables in its outer function’s scope, even after the outer function has finished executing. This allows the inner function to "remember" and access the environment in which it was created.

Key Points:
    Inner function access: The inner function can access variables from its outer function.
    Persistent state: Even after the outer function has returned, the inner function still has access to those variables.

--------
function outerFunction() {
    let outerVar = "I'm from outer function";

    function innerFunction() {
        console.log(outerVar); // Accessing outerVar from the outer function
    }

    return innerFunction;
}

const myClosure = outerFunction(); 
myClosure(); // "I'm from outer function"


Use Cases:

    Data Privacy: Closures can hide variables from the global scope, protecting them from being accessed directly.
    Stateful Functions: You can create functions that maintain a private state across multiple invocations.
------
function createCounter() {
    let count = 0;
    
    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


In this example:
    createCounter returns an inner function that increments and returns count.
    Even after createCounter is done executing, the returned function continues to access and modify the count variable, thanks to the closure


Closures are powerful for creating functions with persistent data and are widely used in JavaScript for encapsulating behavior and creating more modular, reusable code.

----------------------
# What is an IIFE (Immediately Invoked Function Expression)?

An IIFE is a function in JavaScript that runs as soon as it is defined. It's a way to execute a function immediately without needing to call it explicitly.

How It Works:

    Syntax: (function() { /* code */ })();
    The first set of parentheses (function() { /* code */ }) defines the function.
    The second set of parentheses () immediately invokes the function.

(function() {
    console.log("I am an IIFE!");
})();


Why Use IIFE?

    Avoids Polluting Global Scope: Variables inside the IIFE can't be accessed from outside, keeping the global scope clean.
    Creates a Private Scope: Useful in loops or when you need to capture a specific state.

for (var i = 1; i <= 3; i++) {
    (function(x) {
        console.log(x); // x is 1, 2, 3
    })(i);
}




-----------------------
# setTimeout + Closures 

    - first understand some conscepts.

    1. Call Stack
        The Call Stack is where JavaScript keeps track of what function is currently running. It's like a stack of plates: the last function to be called is on top and runs first, then the next, and so on.
    2. Web APIs
        Web APIs are features provided by the browser (like setTimeout, DOM manipulation, AJAX calls, etc.). When you call a function like setTimeout, it's sent to these Web APIs, which handle the operation without blocking the Call Stack.
    3. Callback Queue
        The Callback Queue is where functions that are ready to run (like after a setTimeout finishes) are placed. They wait here until the Call Stack is clear.
    4. Event Loop
        The Event Loop is a mechanism that constantly checks the Call Stack and the Callback Queue. If the Call Stack is empty, it takes the first function from the Callback Queue and runs it on the Call Stack.


    How They Work Together:
    Execution: Your code runs in the Call Stack.
    Async Task: If there's an asynchronous task (setTimeout, fetching data, etc.), it's sent to the Web APIs.
    Completion: Once the async task is done, its callback function is moved to the Callback Queue.
    Event Loop: The Event Loop moves the function from the Callback Queue to the Call Stack when the Call Stack is empty, so it can be executed.


    console.log("Start");

        setTimeout(function() {
            console.log("Delayed message");
        }, 2000);

        console.log("End");


"Start" and "End" are logged immediately from the Call Stack.
The "Delayed message" is handled by the Web API, then sent to the Callback Queue, and finally executed after 2 seconds when the Event Loop finds the Call Stack empty.

------------------------
Understanding How setTimeout Works Behind the Scenes
When you use setTimeout, JavaScript doesn't pause your entire program. Instead, it schedules the function to run later while allowing the rest of your code to continue. Here's how it works:

    Call Stack: Your code runs on the call stack, where functions are executed one by one.

    Web APIs: When setTimeout is called, the timer is managed by the browser's Web APIs (not directly in the call stack). The function is offloaded to these Web APIs while the rest of your code continues to execute.

    Callback Queue: After the timer ends, the function you passed to setTimeout is placed in the callback queue.

    Event Loop: The event loop continuously checks if the call stack is empty. When it is, it moves the function from the callback queue to the call stack to be executed.

--------------------
Understanding Closures with setTimeout

Imagine you have a function that wants to do something after a delay, like printing a message to the screen. JavaScript’s setTimeout lets you do that.

function showMessage() {
    let message = "Hello, World!";
    
    setTimeout(function() {
        console.log(message); // This runs after 1 second
    }, 1000);
}

showMessage();


What's Happening?

    Closure: The function inside setTimeout remembers the message variable, even though showMessage finishes running. This "remembering" is what we call a closure.
    After 1 second, the function inside setTimeout runs and logs "Hello, World!".


Common Mistake with Loops:
    When using setTimeout inside a loop, you might expect different values, but often you get the same value.

for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // You might expect 1, 2, 3 but get 4, 4, 4
    }, 1000);
}


Why?
    var doesn’t create a new value for each loop iteration; all the functions refer to the same i.


## Solution with Closure

for (var i = 1; i <= 3; i++) {
    (function(x) {
        setTimeout(function() {
            console.log(x); // Now it correctly logs 1, 2, 3
        }, 1000);
    })(i);
}

Here, an IIFE (Immediately Invoked Function Expression) creates a new x for each loop, so each setTimeout has its own x value.
This is closures in action, making sure each delayed function remembers its correct value.



------------------
# How IIFE Solves the setTimeout + Closure Problem (4, 4, 4):

When you use var in a loop with setTimeout, all the callbacks share the same variable due to how closures work with var. This results in all setTimeout calls using the final value of the loop variable (i), which is why you see 4, 4, 4.

for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Logs: 4, 4, 4


------
for (var i = 1; i <= 3; i++) {
    (function(x) {
        setTimeout(function() {
            console.log(x);
        }, 1000);
    })(i);
}


IIFE: (function(x) { /* code */ })(i);

    The IIFE is immediately invoked with i as an argument (x).
    This creates a new scope for each loop iteration.

Closure: The function inside setTimeout now has its own version of x (1, 2, or 3) captured by the IIFE.

    So, after the loop finishes, each setTimeout callback correctly logs 1, 2, and 3 because they each have their own x value preserved by the closure.

Summary:
The IIFE creates a private scope for each loop iteration, effectively capturing the value of i in x, and thus ensuring that each setTimeout callback has the correct value.

--------------------------

# What are Anonymous Functions? What are First Class Functions?

## Anonymous Functions

Anonymous functions are functions that do not have a name. They are often used as arguments to other functions or assigned to variables.
They are often used when a function is needed only once or temporarily, like in a callback.
const greet = function() {
    console.log("Hello, World!");
};

greet(); // "Hello, World!"

Here, function() is an anonymous function because it doesn’t have a name. It’s stored in the variable greet.
--------------

## First-Class Functions

In JavaScript, first-class functions mean that functions are treated as first-class citizens. This means:

    Functions can be assigned to variables.
    Functions can be passed as arguments to other functions.
    Functions can be returned from other functions.

function sayHello() {
    return "Hello!";
}

function greetUser(greetingFunction) {
    console.log(greetingFunction());
}

greetUser(sayHello); // "Hello!"


In this example, sayHello is passed as an argument to greetUser, demonstrating that functions are first-class citizens.
-------------
Difference Between Function Parameters and Function Arguments:

    Parameters are the variables listed in a function’s definition.
    Arguments are the actual values passed to the function when it is invoked.

function add(a, b) { // 'a' and 'b' are parameters
    return a + b;
}

add(5, 10); // 5 and 10 are arguments
--------------

# Callback Functions in JavaScript:

A Callback Function is a function that is passed as an argument to another function and is executed after the first function has completed its operation. This is common in asynchronous programming, like handling events or performing operations after a delay.

function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    let name = "Alice";
    callback(name);
}

processUserInput(greet);

Here, greet is a callback function that gets executed inside processUserInput.
---------------

# How Event Listeners Work:

Event Listeners are functions that wait for a specific event (like a mouse click or a key press) to happen on an element and then execute a callback function when that event occurs.

document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button was clicked!");
});


This code listens for a "click" event on the button with the ID myButton. When the button is clicked, the anonymous function (callback) runs.
-----------------

# Blocking the Main Thread:

In JavaScript, the Main Thread is where the code is executed, including rendering the UI and handling user events. If a task takes too long (like a complex calculation or a network request), it can block the main thread, making the UI unresponsive.

while (true) {
    console.log("Blocking the main thread!");
}

This infinite loop will block the main thread, preventing anything else (like rendering the UI or handling user input) from happening.
------------------

# Higher-Order Functions in JavaScript

A Higher-Order Function is a function that either:

    Takes one or more functions as arguments, or
    Returns a function as its result.

Higher-order functions allow for more abstract and flexible code, making JavaScript a powerful tool for functional programming.

----------
function greet(name) {
    return "Hello, " + name;
}

function processUserInput(callback) {
    let name = "Alice";
    console.log(callback(name));
}

processUserInput(greet);

Explanation: processUserInput is a higher-order function because it takes the greet function as an argument.
             greet is a call back function.

-----------
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

let double = createMultiplier(2);
console.log(double(5)); // 10

--------------
Why Use Higher-Order Functions?

    Code Reusability: You can create more abstract functions that work with a variety of specific cases.
    Functional Programming: They are a core concept in functional programming, allowing for cleaner, more concise, and more expressive code.


Common Higher-Order Functions in JavaScript:

    Array methods like map, filter, and reduce: These are higher-order functions because they take other functions as arguments to process array elements.

let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6]


Explanation: map is a higher-order function because it takes a function as an argument and applies it to each element of the array.
-----------------

# map, filter and reduce


1. map() Method

The map() method creates a new array by applying a function to each element of an existing array. It doesn't modify the original array.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]

Explanation: Each element in numbers is multiplied by 2, resulting in a new array [2, 4, 6, 8].

------------
2. filter() Method

The filter() method creates a new array with all elements that pass the test implemented by the provided function. It also doesn’t change the original array.

let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]


Explanation: filter() checks each element of numbers, and only those that are even (num % 2 === 0) are included in the new array [2, 4].

--------------
3. reduce() Method

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 10


Explanation: reduce() starts with the initial value 0 (the second argument) and adds each element of numbers to this accumulator, resulting in 10.