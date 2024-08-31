// Comparison operators are used to compare two values. The result of the comparison is always a boolean (true or false).

// Comparision Operators

   // Equal to (==): Checks if two values are equal. It does not consider the data type.
        
console.log(5 == '5'); // true

   // Strictly Equal to (===): Checks if two values are equal and of the same type.

console.log(5==='5');
   
   // No Equal to ( != ): Checks if two values are not equal. It does not consider the type.

console.log(5 != '5');  // false

   // strictly not equal to ( !== ):

console.log(5 !== '5'); // true

   // greater than ( '>' ): 

console.log(10 > 5); // true

   // greater than or equal to ( >= ): 
   // less than ( < ):
   // less than or equal to ( <= ):


// -----------------------------------------------------------------

//2. logical AND ('&&'): The && operator (logical AND) is used to combine two conditions. It returns true only if both conditions are true.

console.log("--------------------------------------------------------------");

let age = 20;
let hasId = true;

if( age >= 18 && hasId){
   console.log("YOu can enter the club.")
}else{
   console.log("You can not enter the club.");
}



//3. Logical OR (||): The || operator (logical OR) is used to combine two conditions. It returns true if at least one of the conditions is true.

age = 16;
let hasPermission = true;

if( age >= 18 || hasPermission){
   console.log("You can watch the movie.");
}else{
   console.log("You can not watch the movie.");
}


//4. Ternary Operator (?:): The ternary operator is a shorthand way to write an if-else statement. It has the following syntax:
// condition ? expression_if_true : expression_if_false;

age = 18;
let canVote = (age >= 18) ? "Yes, you can vote.":"No, you can not vote.";
console.log(canVote); // yes, you can vote.

