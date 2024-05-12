/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a
 car, and make a list that stores several examples. Use your list to print a series of 
 statements about these items, such as “I would like to own a Honda motorcycle.”
 Define an array called 'favoriteTransportation' with car examples*/

 let vehicles: string[] = ["Ford Mustang", "Toyota Corolla", "Toyota Hilux", "Audi e-tron GT", "Honda City", "BMW M5"];

 vehicles.map((items) => console.log(`I would like to own a ${items}`));