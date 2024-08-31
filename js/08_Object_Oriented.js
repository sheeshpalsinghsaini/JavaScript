/**
 *  Object-Oriented Javascript: 
 *      Javascript is an object-oriented programming language, meaning it uses objects to represent and manipulate data.
 *      Let's explore the key concepts: 
 *          - prototypes
 *          - this keyword
 *          - inheritance
 *          - classes
 */


/**
 *    1. Object-Oriented javascript: 
 *          - In javascript, every object has a prototype
 *          - it share property and method created by the same constructor[or created by same class or function].
 */

// Constructior function 

function Animal(name){
    this.name = name;
}

// adding a method to Animal's prototype

Animal.prototype.speak = function(){
    console.log(`${this.name} makes a noise`);
};

// creating two different objects
const dog = new Animal('Dog');
const cat = new Animal('Cat');

// both dog and cat use the speak method bcz they share the same prototype
dog.speak();
cat.speak();


/**
 *      this keyword:
 *          - this keyword refers to the object that is currently calling the method. the value of this depends on the 
 *            context in whcih is used.
 */

const person ={
    name: 'Alice',
    greet(){
        console.log(`Hello, my name is ${this.name}.`)
    }
}

person.greet();

/**
 *  Inheritance: 
 *      - inheritance allows one object to acquire properties and methods from another. Javascript uses prototypes to 
 *        achieve inheritance.
 */

function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.describe = function(){
    console.log(`this is a ${this.type}`);
};


function Car(type, brand){
    Vehicle.call(this, type); // call the parent constructor
    this.brand = brand;
}

// set up inheritance 
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


const myCar = new Car('Car', 'Toyota');

myCar.describe();
console.log(myCar.brand);

/**
 *      Class: 
 *          javascript also has a class syntax that provides a cleaner and more intuitive way to create object that handle inheritance.
 */

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} make a noise 2`)
    }
}

class Dog extends Animal {
    speak(){
        console.log(`${this.name} barks.`)
    }
}

const myDog = new Dog('Buddy');
myDog.speak();  // output: "Buddy barks."


/**
 * 
 *  we can create object of both using class and function
 *  
 *      Recommended Approach for Learning:
            Start with Classes:

            Focus on learning the class syntax, constructors, methods, inheritance, and other OOP principles.
            Practice by creating small projects, such as a "To-Do List" app or a simple game, to reinforce these concepts.
            Explore Constructor Functions Later:

            Once you are comfortable with classes, explore how functions can also be used as constructors.
            This will help you understand JavaScript's flexibility and prototype-based nature more deeply.
 * 
 * 
 * 
 * 
 * OOPs: Object-Oriented Programming is a programming paradigm that uses "object" to represent data and methods. 
 *       the four main oop concepts are
 *          1. Encapsulation
 *          2. Abstraction 
 *          3. Inheritance 
 *          4. Polymorphism
 * 
 *  1. Encapsulation: 
 *      is the concept of bundling data (properties) and methods(function) that operate on the data a single unit, typically 
 *      an object. It also involves restricting direct access to some of the objects's components, which can help protect the
 *      integrity of the data. 
 * 
 */

class Person {
    constructor(name, age){
        this._name = name;  // private-like property (by convention)
        this._age = age;    // private-like property ( by convention) 
    }

    getName(){
        return this._name;
    }
    setName(name){
        this._name = name;
    }
    getAge(){
        return this._age;
    }
    setAge(age){
        if(age > 0){
            this._age = age;
        }else{
            console.log("Please enter a valid age.")
        }
    }
}

const alicePerson  = new Person('Alice', 30);
console.log(alicePerson.getName());     // output: Alice
console.setAge(-5); // please enter a vlid age.



/**
 *  Abstraction: 
 *      means hiding complex implementation details and showing only the necessary features of an object. This helps reduce 
 *      complexity and allows focusing on the object's usage.
 * 
 */

class Car{
    constructor(brand){
        this.brand = brand;
    }

    start(){
        console.log(`${this.brand} car is starting...`);
    }

    drive(){
        console.log(`${this.brand} car is driving...`);
    }

    stop(){
        console.log(`${this.brand} car has stopped...`);
    }

}

const myToyotaCar = new Car('Toyota');
myToyotaCar.start();
myToyotaCar.drive();
myToyotaCar.stop();
/*
Explanation:

The Car class provides an abstraction of a car's behavior with methods like start, drive, and stop.
The internal workings of how the car starts or drives are hidden from the user; they only interact with the methods.
*/



/*
    1. Inheritance: 
        Inheritance is a mechanism where one class (child or subclass) can inherit properties and methods from another 
        class (parent or supperclass). It helps reuse code and establish a natural hierarchy between objects.


*/

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a sound.`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`);
    }
}

const myDog2 = new Dog("Buddy");
myDog2.speak();

/*
    Polymorphism: 
        Polymorphism allows objects of different classes to be treated as objects of a common superclass. In JavaScript,
        polymorphism is often achieved through method overriding, where a subclass provides a specific implementation of
        a method that is already defined in its superclass

*/

class Shape {
    draw() {
      console.log('Drawing a shape.');
    }
  }
  
  class Circle extends Shape {
    draw() {
      console.log('Drawing a circle.');
    }
  }
  
  class Square extends Shape {
    draw() {
      console.log('Drawing a square.');
    }
  }
  
  const shapes = [new Shape(), new Circle(), new Square()];
  
  shapes.forEach(shape => shape.draw());
  // Output:
  // Drawing a shape.
  // Drawing a circle.
  // Drawing a square.
  