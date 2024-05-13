/*39. City Names: Write a function called city_country() that
takes in the name of a city and its country. The function should
return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs,
and print the value that’s returned.*/
function city_country(city, country) {
    var formattedString = "\"".concat(city, ", ").concat(country, "\"");
    return formattedString;
}
var citycountry1 = city_country("Karachi", "Pakistan");
var citycountry2 = city_country("Istanbul", "Turkey");
var citycountry3 = city_country("Tokyo", "Japan");
console.log(citycountry1);
console.log(citycountry2);
console.log(citycountry3);
