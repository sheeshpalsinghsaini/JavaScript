
/**
 *  Object: 
 *      an object is a collection of properties, where each property has a name (key) and a value. Objects are used to store related data and functionality together in a structured way.
 */


let person = {
    personName: "John",
    age: 30,
    isStudent: false
}

console.log(person);

/**
 * Dot Notation vs. Bracket Notation 
 *      You can access or update properties of an object using either dot notation or bracket notation.
 */


// 1. Dot Notation: Accesses or updates a property using a dot (.) followed by the property name.

    console.log(person.personName)
    person.age = 31;
    console.log(person.age);

// 2. Bracket Notation: Accesses or updates a property using brackets ([]) with the property name as a string.

    console.log(person["personName"]);
    person["age"] = 32;
    console.log(person["age"]);

/**
 * When to Use Dot vs. Bracket Notation:
        Dot Notation: Use it when you know the exact name of the property and it doesn’t contain special characters or spaces.
        Bracket Notation: Use it when the property name is dynamic or contains special characters.
 */

//Object Destructuring: allows you to extract specific properties from an object and assign them to variables.

let {personName, age} = person;

console.log(personName);
console.log(age);


// Renaming Vraible in Destrucuring: 

    let {personName: fullName, age: years} = person;
    console.log(fullName);
    console.log(years);



// Spread Operator(...) in Objects: allow to create a shallow copy of an object or to merge multiple objects together.

let copyOfPerson = {...person}; // create a shallow copy of person.
console.log(copyOfPerson);


// example of mergin objects: 

    let address = {
        city: "New York",
        country: "USA"
    };

    let personWithAddress = {...person, ...address};

    console.log(personWithAddress);
    