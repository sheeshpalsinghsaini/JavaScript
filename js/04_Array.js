/**
 * An array is a special type of object in JavaScript that allows you to store multiple values in a single variable. These values can be of any type, including numbers, strings, objects, or even other arrays.
 * 
 * -  Each element is stored in a specific position, starting from index 0.
 */

let fruits = ["Apple","Banana","Cherry"];
console.log(fruits);

// Common Array Methods

    // 1. Push: adds one or more elements to the end of an array.

    fruits.push("Orange");
    console.log(fruits);


    // Pop: Remove the last element from an array. 

    lastFruit = fruits.pop();
    console.log(lastFruit);
    console.log(fruits);


    // shift: remove the first element from an array.

    let firstFruit = fruits.shift();
    console.log(firstFruit);
    console.log(fruits);


    // unshift: addds one or more elements to the beginning of an array. 

        fruits.unshift("Apple");
        console.log(fruits);



// Array Destructuring: is a convenient way to extract values from an array and assign them to variables in one step.

    let newFruits = ["Apple","Banana","Cherry"];
    let [fruit_01, fruit_02, fruit_03] = newFruits;
    
    console.log(fruit_01)
    console.log(fruit_02)
    console.log(fruit_03)

// Skipping Elements with Destructuring: you can skip elements in an array when destructuring.

    let [, ,thirdFruit] = newFruits;
    console.log(thirdFruit);