/* Favorite Fruit: Make a array of your favorite fruits, and then
 write a series of independent if statements that check for
 certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite
_fruits.
• Write five if statements. Each should check whether a certain
kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like
 bananas!*/
// Make an array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["Strawberry", "Mango", "Orange"];
// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement.
if (favorite_fruits.includes("Strawberry")) {
    console.log("I like Strawberries!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I Like Mangoes!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I like Oranges!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes!");
}
else {
    console.log("Grapes are not in my favorite fruits list.");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("I like Kiwis!");
}
else {
    console.log("Kiwis are not in my favorite fruits list.");
}
