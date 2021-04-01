//iterating ODD numbers with a for loop. Hint - initialise i to 1 then increment by 2.

var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);


/* //iterating EVEN numbers with a for loop. Hint - initialise i to 0 then increment by 2.

var myArray = [];

for (var i = 0; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray); */

/* //for lop. most common in JS. initialise, condition, final expression - increment
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray); //[1, 2, 3, 4, 5] success! */

/* //iterate with loops
//while loop. runs while a specified condition is true, stops once its not. e.g populate an array with integers 0-4.

var myArrray =[];
i = 0;
while(i < 5) {
  myArrray.push(i);
  i++;
}
console.log(myArrray);
 */
//update record collection exercise

/* You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.
You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the collection object is used for the tests. */

/* var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// JS Code below stores a copy of the collection object before changes are made to it.
var collectionCopy = JSON.parse(JSON.stringify(collection));

// updateRecords function
function updateRecords(id, prop, value) {
if (value === "") {
  delete collection[id][prop];
} else if (prop === "tracks") {
  collection[id][prop] = collection[id][prop] || [];
  collection[id][prop].push(value);
} else {
  collection[id][prop] = value;
}
  return collection;
}

//test data. 
console.log(updateRecords(5439, 'artist', 'ABBA'));
console.log(updateRecords(2468, 'tracks', 'free'));
console.log(updateRecords(2548, 'artist', 'Bon Jovi'));
console.log(updateRecords(1245, 'tracks', 'Addicted to love'));
//success! */


/* //accessing nested arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];
var thirdTree = myPlants[1].list[2];
console.log(thirdTree); //birch
 */
/* //accessing nested objects
var myStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
var topSecretInfo = myStorage.cabinet["top drawer"].folder2;

console.log(topSecretInfo); //secrets */

/* //checking objects for properties
var ooTd = {
  hat: "Wide-brim",
  blouse: "chiffon",
  shoes: "heels",
  pants: "jeans", 
  watch: "Cartier"
};
function checkObj(checkProp) {
  if (ooTd.hasOwnProperty(checkProp)) { //true or false 
    return ooTd[checkProp]; //returns the value of the found property
  } else {
    return "Not Found";
  }
}
console.log(checkObj("hello")); //jeans

console.log(ooTd["shoes"]);//heels. i'm noticing properties called using bracket notation have to be in quotes */

/* //using objects for lookups e.g. using the switch statement from before

function myAbcs(val) {
  var result = "";
  var lookup = {
    "a": "apple",
    "b": "bird",
    "c": "cat",
    "d": "dundaing",
    "f": "furahiday"
  };
  result = lookup[val];
  return result;
}
  console.log(myAbcs("d")); */

/* //Deleting properties from an object with the delete keyword
var testObj = {
  "hat": "Wide-brim",
  "blouse": "chiffon",
  "shoes": "heels",
  "pants": "jeans", 
  "watch": "Cartier"
}

delete testObj.hat; 
console.log(testObj); //outputs {blouse: "chiffon", shoes: "heels", pants: "jeans", watch: "Cartier"} */

/* //Adding new properties to an object using dot notation and bracket notation
var testObj = {
  "hat": "Wide-brim",
  "blouse": "chiffon",
  "shoes": "heels",
};

testObj.pants = "jeans";
console.log(testObj); //outputs {hat: "Wide-brim", blouse: "chiffon", shoes: "heels", pants: "jeans"} 

testObj["watch"] = "Cartier";
console.log(testObj); //outputs {hat: "Wide-brim", blouse: "chiffon", shoes: "heels", pants: "jeans", watch: "Cartier"} */

/* //we can update object properties using dot notation and the assignment operator
var testObj = {
  "hat": "Wide-brim",
  "blouse": "chiffon",
  "shoes": "heels",
};

testObj.blouse = "cotton";

console.log(testObj); //shows updated object i.e. {hat: "Wide-brim", blouse: "cotton", shoes: "heels"} */

/* //accessing objects through variables
var objCounties = {
  1: "Mombasa",
  16: "Machakos",
  47: "Nairobi"
}

var Joho = 1;
var sandyBeaches = objCounties[Joho]; 
console.log(sandyBeaches); //Mombasa */

/* //Bracket notation is another alternative to accessing objects. However, its use is REQUIRED when property names have spaces in them. e.g.

var testObj = {
  "main course": "burger",
  "side dish": "fries",
  "the drink": "water"
};
var mainDish = testObj["main course"];
var sideDish = testObj["side dish"];

//Accessing objects with dot notation
var testObj = {
  "hat": "Wide-brim",
  "blouse": "chiffon",
  "shoes": "heels",
  "partners": []
};
var hatValue = testObj.hat;
var blouseValue = testObj.blouse; */

/* //JS objects. contain properties and values
var myDog = {
  "name": "Jenny",
  "legs": 4,
  "tails": 1,
  "partners": []
}; */

/* //returning early from a function.
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-1, 2)); //undefined */

/* //Returning boolean values from if statements
//note the following

function isLess(a, b) {
if (a < b) {
  return true;
}
else {
  return false;
}
}
console.log(isLess(10,15)); //true

//In comp science logic, all comparison operators return a true or false value. So the above statement can/should be written simply as

function isLess(a, b) {
  return a < b;
  }
  console.log(isLess(10,15)); //true */

/* //identical options in switch statements. used when you want different cases to have the same result.
function testingSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
  console.log(testingSizes(7)); //logs High */

/* //default option in switch statements
function takeTwoSwitch(val) {
  var answer = "";
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    case "d":
      answer = "dog";
      break;
    default:
      answer = "etcetc"
      break;
  }
  return answer;
}
  console.log(takeTwoSwitch("f")); //outputs etcetc on console by default since we don"t have a that case in our switch statements */

/* //switch statements
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
  console.log(caseInSwitch(4)); //outputs delta on console */

/* //correct odering of if statements is very important. NB. if the first if statement condition is met, the program will not check the other statements. E.g the correct order is as follows

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }  
}
console.log(orderMyLogic(3)); //outputs less than 5 of course.
 */
//else if and else statements
/* function testing(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }  
}
console.log(testing(3)); */

/* //Logical And operator
function testLogicalAnd(val) {
  if (val <= 50 && val>= 25) { //here, BOTH conditions MUST be true to satisfy the statement
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10)); //outputs No */

//NB. Logical OR operator || works as you'd imagine. (EITHER conditions could be true to satisfy the statement)

/* //greater than or equal to operator
//NB. greater than >, less than <, less than or equal to <= also work the same as you'd imagine.

function moreOrEqual(val) {
  if(val >= 100) {
    return "100 or over";
  }
  if (val >= 10) {
    return "10 or over";
  }
  return "less than 10";
}
console.log(moreOrEqual(5)); */

/* //inequality operators
function testEquality(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testEquality("99")); //actually returns 'Equal' since != converts types */

//NB. The strict inequality operator !== DOES NOT covert types so it would return 'Not Equal' in the above example.

//equality operators within if statements

/* function testEquality(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not equal";
}

console.log(testEquality(10)); */
//NB. the strict equal sign (===) evaluates to true only if both operands are of the same type and contain the same value. 

/* //if conditional statements

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) { //executes if condition is true
return "Yes, that was totally true..";
  }
  return "Nope, not true. Complete bs"; //executes if condition is false
}
console.log(trueOrFalse(true)); */

/* //simulating the order of items in a queue using arrays
function nextInLine(arr, item) {
  arr.push(item); //adds new item at the end of the array
  return arr.shift(); //removes the first element of the array

}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr)); //outputs Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); //outputs 1
console.log("After: " + JSON.stringify(testArr)); //outputs After: [2,3,4,5,6] */

/* //assigning a returned value to a variable
var changed = 0;
 function change(num) {
   return (num + 5) / 3;
 }
changed = change(10);

console.log(changed);

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(10);

console.log(processed); */

/* //return a value from a function with return statement

function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); //outputs 3 on the console cos the function returns 3 */

/* //global vs. local scope in functions
//we can have local and global variable sharing the same name. In this scenario, the local variable takes precedence over the global variable. e.g below

var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());  //ouputs sweater on the console, and not T-shirt, cos we have called the myOutfit() function so the local variable takes precedence over the global one. However..

console.log(outerWear);//will output T-shirt. i.e. the value of the global variable since we didn't call the function.
 */

/* //local scope and functions
function myLocalScope() {
  var myVar = 5;
  console.log(myVar); //would output 5 on the console
}
myLocalScope();

console.log(myVar); //would output an error: myVar is not defined. cos the program tried to access myVar outside the function */

//NB. global scope variables can be declared outside functions, or within functions but without the var keyword

/* //function parameters
function newFunction(a, b) {
console.log(a - b);
}
newFunction(10, 3); //outputs 7 on the console
 */
/* //functions
function newFunction() {
  console.log("Hello there world!");
}

newFunction();
 */
/* //adding an element to the beginning of an array with unshift function

var myArray = [["John", 23], ["cat", 2], ["Peter", 65]];
myArray.shift(); 
myArray.unshift(["Mbithe",30])
console.log(myArray);
 */
/* //removing the FIRST element of an array with the shift function
var myArray = [["John", 23], ["cat", 2], ["Peter", 65]];
var removedElement = myArray.shift(); //stores removed element in new variable 'removedElement'.
console.log(myArray);
console.log(removedElement); */

/* //removing the last element of an array with pop function
var myArray = [["John", 23], ["cat", 2], ["Peter", 65]];
myArray.pop(); //pop removes the final element of an array
console.log(myArray);
 */
/* //adding elements into arrays with push function
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["Peter", 65]); //push adds elements to the end of an array
console.log(myArray); */

/* //multidimensional arrays
var myArray = [[1,2,3], [4,5,6,], [7,8,9,], [[10,11,12], 13, 14]];
var myData = myArray[2][1]; //would display the value 8 from myArray.
console.log(myArray[2][1]) */

/* //modifying values in arrays
var myArray = [11,20,77];
myArray[1] = 22; //changes the value of index 1 in myArray to 22.
console.log(myArray);
 */
/* //string concatenation exercise using a function
function wordPlay(myNoun, myAdjective, myVerb, myAdverb) {
var result = "";
result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
return result;
}
console.log(wordPlay("dog", "big", "ran", "quickly")); */

/* //using bracket notation to find the nth to last character of a string based on its length
var newName = "Mbithe";
var nthCharacter = newName[newName.length - 3]; //translates to newName[3] i.e 't'
console.log(nthCharacter); */

/* //using bracket notation to find the last character of a string based on its length

var newName = "Mbithe";
var lastCharacter = newName[newName.length - 1]; //translates to newName[5]
console.log(lastCharacter); */

/* //using bracket notation to find the nth character of a string
var nthLetter = "";
var newString = "What should i have for lunch?";

nthLetter = newString[10]; //note that JS index starts from 0.
console.log(nthLetter); */

/* //using bracket notation to find the first letter of a string
var firstLetter = "";
var myName = "Carol";

firstLetter = myName[0];
console.log(firstLetter);
 */

/* //finding the length of a string
var countString = 0;
var myString = "What a fine day for JS"

countString = myString.length;
console.log(countString); */