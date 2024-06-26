/*42. Great Magicians: Start with a copy of your program from
 Exercise 39. Write a function called make_great() that modifies
the array of magicians by adding the phrase the Great to each
 magician’s name. Call show_magicians() to see that the list
 has actually been modified.*/
// Step 2: Create the showMagicians function
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Step 3: Create the makeGreat function
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
// Step 4: Create an array of magician names
var magicianNames = ["David Copperfield", "Ricky Jay", "Penn Jillette", "Criss Angel"];
// Step 5: Call makeGreat to modify the array
var greatMagicians = makeGreat(magicianNames);
// Step 6: Call showMagicians to see the modified list
showMagicians(greatMagicians);
