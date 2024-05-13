/*43. Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of
magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one
array of the original names and one array with the Great
added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var originalMagicianNames = ["David Copperfield", "Ricky Jay", "Penn Jillette", "Criss Angel"];
// Step 5: Make a copy of the array
var copiedMagicianNames = __spreadArray([], originalMagicianNames, true);
// Step 6: Call makeGreat with the copied array
var greatMagicians = makeGreat(copiedMagicianNames);
// Step 7: Call showMagicians to show the original names
console.log("Original Magicians:");
showMagicians(originalMagicianNames);
// Step 8: Call showMagicians to show the array with "the Great" added
console.log("\nMagicians with 'The Great':");
showMagicians(greatMagicians);
