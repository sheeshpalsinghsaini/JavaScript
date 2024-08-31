// important methods
/**
 *  1. forEach(): 
 *      - Executes a provided function once for each array element.
 *      - When you wnat to perform an action on each element of an array ( e.g logging values).
 */

const numbers = [1, 7, 3, 8, 5];
numbers.forEach(number => console.log(number));

/**
 *  map(): 
 *      - create a new array by applying a function to each element of the original array.
 *      - When you want to transform each element of an array(e.g doubling values).
 * 
 */

// const number = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);

/**
 *  1. filter(): 
 *      - create a new array with all elements that pass a test implemented by a function.
 *      - when you want to filter elements from an array (e.g finding all even numbers).
 */

const evens = numbers.filter(numbers => numbers%2 == 0);
console.log(evens);


/**
 *  reduce(): 
 *      - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 *      - when you want to accumulate a value from all elements (e.g summing numbers).
 */

const sum = numbers.reduce((accumulator, currentValue) => accumulator+ currentValue,0);
console.log(sum);

/**
 *      sort(): 
 *          - sorts the elements of an array in place and return the sorted array.
 *          - when you need to sort elements (e.g sorting numbers or string alphabetically).
 *          - in place modifie, means change actual array.
 */

numbers.sort((a, b) => a-b);
console.log(numbers);


/**
 *  find(): 
 *      - returns the first element in the array that satisfies a provided testing function.
 *      - when you need to find a single element based on a condition (e.g finding the first even number).
 * 
 */

const firstEven = numbers.find((number) => number%2 ==0);
console.log(firstEven);

/**
 *  some(): 
 *      - checks if at least one element in the array passes a test implemented by a function.
 *      - when you want to know if any element meets a certain condition (e.g checking if there are any even numbers).
 */

const hasEven = numbers.some(number => number%2==0);
console.log(hasEven);

/**
 *  every():
 *      - checks if all elements in the array pass a test implemented by a function.
 *      - when you want to confirm that all elements meet a certain condition (e.g checking if all numbers are even)
 */

const allEven = numbers.every(number => number%2==0);
console.log(allEven); // false bcz all elements are not even