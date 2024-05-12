"use strict";
/*Dinner Guests: Working with one of the programs from Exercises
 14 through 18, print a message indicating the number of people
  you are inviting to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestArr = ["Saima", "Imran", "Maha", "Mehak"];
let canNotattend = "Mehak";
let newGuest = "Hasan";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Daniyal");
let middleGuest = "Javeria";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Ali");
console.log(guestArr);
console.log(guestArr.length + " " + "peoples" + " " + "are invited to dinner.");
