"use strict";
/*24. More Conditional Tests: You don’t have to limit the number
 of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result
 for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater
 than and less than, greater than or equal to, and less than or
 equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Tests for equality and inequality with strings
//  Comparison Operators === , !==
const country1 = "Pakistan";
const country2 = "Saudia Arabia";
console.log(country1 === country2);
console.log(country1 !== country2);
// 2. Tests using the lower case function
const mixedCaseString = "Hello Isra";
console.log(mixedCaseString.toLowerCase() === "hello isra");
console.log(mixedCaseString.toLowerCase() === "helloisra");
// 3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 22;
const num2 = 30;
// Equality 
console.log(num1 === num2);
// Inequality 
console.log(num1 !== num2);
// Greater Than 
console.log(num1 > num2);
// Less Than 
console.log(num1 < num2);
// Greater Than or Equal To 
console.log(num1 >= num2);
// Less Than or Equal To 
console.log(num1 <= num2);
// 4. Tests using "and" and "or" operators
const Condition1 = true;
const Condition2 = false;
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
// 5. Test whether an item is in a array
const Weather = ["Summer", "Winter", "Autumn", "Spring"];
console.log("Item in array test:", Weather.includes("Winter"));
// 6. Test whether an item is not in a array
console.log("Item not in array test:", Weather.includes("Rainy"));
// let Fruits = ["Apple", "Bnanana", "Cherry", "Stawberry", "Mango"]
// console.log('Apple' === Fruits[0], "Apple is in Friut array/list.\n");
// let array: string[] = ["Apple", "Banana", "Orange", "Litchi"];
// console.log("Item in array test:", array.includes("Orange"));
