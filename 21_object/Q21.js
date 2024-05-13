/*21. They think of something you could store in a TypeScript
 Object. Write a program that creates Objects containing these
 items.*/
// Create an array of objects
var foods = [];
// Create food objects and push them into the array
var food1 = {
    name: " Tikka",
    price: "500",
    description: "Chicken Tikka"
};
foods.push(food1);
var food2 = {
    name: "Burger",
    price: "650",
    description: "Zinger Burger"
};
foods.push(food2);
var food3 = {
    name: "Dessert",
    price: "400",
    description: "Kunafa"
};
foods.push(food3);
console.log(foods);
