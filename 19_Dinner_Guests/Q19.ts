/*Dinner Guests: Working with one of the programs from Exercises
 14 through 18, print a message indicating the number of people
  you are inviting to dinner.*/


 let guestArr: string[] = ["Saima", "Imran", "Maha", "Mehak"];
 let canNotattend: string = "Mehak";
 let newGuest: string = "Hasan";
 guestArr[guestArr.indexOf(canNotattend)] = newGuest;
 guestArr.unshift("Daniyal");
 let middleGuest: string = "Javeria";
 let middleIndex = guestArr.length / 2;
 guestArr.splice(middleIndex, 0, middleGuest);
 guestArr.push("Ali");
  console.log(guestArr);


 console.log(guestArr.length + " " + "peoples" + " " + "are invited to dinner.");