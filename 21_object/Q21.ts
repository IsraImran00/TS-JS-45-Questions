/*21. They think of something you could store in a TypeScript
 Object. Write a program that creates Objects containing these 
 items.*/

// Define the type for food object
type FoodType = {
    name: string;
    price: string;
    description: string;
}

// Create an array of objects
let foods: Array<FoodType> = [];

// Create food objects and push them into the array
const food1: FoodType = {
    name: " Tikka",
    price: "500",
    description: "Chicken Tikka"
};
foods.push(food1);

const food2: FoodType = {
    name: "Burger",
    price: "650",
    description: "Zinger Burger"
};
foods.push(food2);

const food3: FoodType = {
    name: "Dessert",
    price: "400",
    description: "Kunafa"
};
foods.push(food3);

console.log(foods);