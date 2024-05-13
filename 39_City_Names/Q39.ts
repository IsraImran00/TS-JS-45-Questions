/*39. City Names: Write a function called city_country() that 
takes in the name of a city and its country. The function should
return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, 
and print the value that’s returned.*/

function city_country(city: string, country: string): string{
    let formattedString = `"${city}, ${country}"`;
    return formattedString
}

let citycountry1 = city_country("Karachi", "Pakistan");
let citycountry2 = city_country("Istanbul", "Turkey");
let citycountry3 = city_country("Tokyo", "Japan");

console.log(citycountry1);
console.log(citycountry2);
console.log(citycountry3);


