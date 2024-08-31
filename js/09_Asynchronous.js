/*
    Asynchronous Javascript: 
        Javascript is single-threaded, meaning it executes on task at a time. However, many tasks (like fetching data
        from a server) can take time, and we don't want our entire application to "freeze" while waiting for these tasks 
        to complete. this is where asynchronous programming comes in.


    Asynchronous programming allows javascript to start and move on to the next one without waiting for the previous task
    to complete.

    Let's go through the main concepts step-by-step: 
        1. setTimeout 
        2. callbacks
        3. promises 
        4. async/await

    
    1. setTimeout and setInterval
        * setTimeout: Runs a function once after a specified dealy. 
        * setInterval: Runs a function repeatedly at a specified interval.
    



*/

// console.log("Start...");

// setTimeout(()=>{
//     console.log("This message is delayed by 2 seconds");
// },2000);    // 2000 milliseconds = 2 sec.

// console.log("End");


//Example of setInterval-------------------------------------------------------------------

// console.log("start program...")

// let count = 0;

// const intervalId = setInterval(() => {
//     count += 1;
//     console.log(`Count: ${count}`);

//     if(count === 5){
//         clearInterval(intervalId); // stop the interval after 5 interation.
//     }
// },1000);

// console.log("stop program...");






//------------------------------------------------------------ 

/*
    callbacks: 
        a callback is a function passed as an argument to another function. It's called (or called back) where an 
        asynchronous operation complete.


*/

// function fetchData(callback){
//     setTimeout(()=>{
//         const data = "Some data fetched from a server";
//         callback(data); // call the callback function when data is ready.
//     },2000); // simulate a 2-second delay.
// }

// function handleData(data){
//     console.log(`Received data: ${data}`);
// }

// fetchData(handleData);




// -----------------------------------------------------------------------

/*
    Promises: 
        A promise is an object representing the eventual completion or failure of an asynchronous operation. 
        A promise can be in one of three states.

            1. pending
            2. Fulfilled 
            3. Rejected


    Understanding resolve and reject in Promises
In JavaScript, a promise represents an operation that hasn't completed yet but is expected to in the future. Promises can either be fulfilled (completed successfully) or rejected (failed).

What Are resolve and reject?
    resolve: A function that you call when the promise is successfully fulfilled. It can take a value (like a string, object, etc.) as an argument, which will be passed to the .then() handler of the promise.
    reject: A function that you call when the promise fails or encounters an error. It can take an error message or an error object as an argument, which will be passed to the .catch() handler of the promise.
    Both resolve and reject are functions provided by JavaScript when you create a new promise. They are not methods you define; they are provided by the JavaScript engine to control the state of the promise.

How resolve and reject Work
    When you create a promise, you pass a function (often called the "executor function") to the Promise constructor. This executor function receives two arguments: resolve and reject.

Here's a simple breakdown of how they work:
    resolve(value): If you call resolve and pass a value, the promise changes its state from "pending" to "fulfilled," and the value is returned to the .then() handler.
    reject(reason): If you call reject and pass a reason (typically an error message), the promise changes its state from "pending" to "rejected," and the reason is returned to the .catch() handler.

*/

// creating an dusing a promise 

    // function fetchData(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const success = false; // simulate success or failure 

    //             if(success){
    //                 resolve("Data fetched successfully...");
    //             }else{
    //                 reject("Failed to fetch data...");
    //             }
    //         },2000);
    //     });
    // }

    // fetchData()
    // .then(data => console.log(data))    // if the promise is fulfilled, data pass here directly from resolve
    // .catch(error => console.log(error));    // if the promise is rejected. data pass here directly from reject.

/*
Explanation:

The fetchData function returns a promise. Inside the promise, we simulate a delay with setTimeout.
If success is true, the promise is resolved with the message "Data fetched successfully."
If success is false, the promise is rejected with the message "Failed to fetch data."
We use .then() to handle success and .catch() to handle errors.

*/

// -------------------------------------------------------- 

/*
    Async/Await: 

        is a modern way to handle asynchronous code. It makes asynchronous code look and behave like synchronous code, 
        which make it easier to read and write. 


Understanding async and await
    async and await are modern JavaScript features that provide a cleaner and more straightforward way to handle asynchronous code, making it look like synchronous code.

What are async and await?
    async: Used to declare an asynchronous function. It always returns a promise. Even if you don't explicitly return a promise, the function will automatically wrap the returned value in a promise.
    await: Can only be used inside an async function. It pauses the execution of the async function until the promise is resolved or rejected.

*/

console.log("Starting programming....")

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; // simulate success or failure 

            if(success){
                resolve("Data fetched successfully...");
            }else{
                reject("Failed to fetch data...");
            }
        },2000);
    });
}


async function handleData() {
    
    try{
        const data = await fetchData();  // wait for the promise to resolve 
        console.log(data);
    }catch(error){
        console.log(error);     // catch any errors
    }
}

// handleData().then(message => console.log(message)).catche(error => console.log(error));
handleData();


console.log("Programming end...")


/* 
Explanation:

* The fetchData function returns a promise, just like before.
* The handleData function is declared as async, which allows us to use the await keyword.
* await fetchData() pauses the execution of handleData until the promise is resolved or rejected.
* If the promise is fulfilled, data is logged. If it’s rejected, the error is caught in the catch block.

*/