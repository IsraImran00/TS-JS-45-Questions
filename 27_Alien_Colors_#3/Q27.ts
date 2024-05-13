/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4
 into an if-else chain.
• If the alien is green, print a message that the player earned 5
 points.
• If the alien is yellow, print a message that the player earned
 10 points.
• If the alien is red, print a message that the player earned 15
 points.
 • Write three versions of this program, making sure each message
  is printed for the appropriate color alien.*/

// Version 1 - Alien is green
let alienColorVersion1: string = "green";
if (alienColorVersion1 === "green"){
    console.log("The player earned 5 points.");
}
else if(alienColorVersion1 === "yellow"){
    console.log("The player earned 10 points.");
}
else if(alienColorVersion1 === "red"){
    console.log("The players earned 15 points.");
}

// Version 2 - Alien is yellow
let alienColorVersion2: string = "yellow";
if(alienColorVersion2 === "green"){
    console.log("The player earned 5 points.");
}
else if(alienColorVersion2 === "yellow"){
    console.log("The player earned 10 points.");
}
else if(alienColorVersion2 === "red"){
    console.log("The player earned 15 points.");
}

// Version 3 - Alien is red
let alienColorVersion3: string = "red";
if(alienColorVersion3 === "green"){
    console.log("The player earned 5 points.");
}
else if(alienColorVersion3 === "yellow"){
    console.log("The player earned 10 points.");
}
else if(alienColorVersion3 === "red"){
    console.log("The player earned 15 points.");
}
