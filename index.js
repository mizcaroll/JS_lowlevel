 //arrow functions with parameters
//the below code can be written as an arrow function

var myConcat = function (arr1, arr2) {
return arr1.concat(arr2);
}
console.log(myConcat([1,2], [3,4,5])); // [1, 2, 3, 4, 5]

//now as an arrown function. change var to const for good measure

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5])); //[1, 2, 3, 4, 5]

/* //use arrow functions to write anonymous functions
var today = function() {
  return new Date();
}
console.log(today);

//e.g the anonymous function above could be written as an arrow function like this

const watevs = () => new Date();

console.log(watevs); // NB this tutorial's code did not give the current date on console. sijui mbona. but the code below from stack overflow did so :P 

let todayy = new Date().toISOString().slice(0, 10)

console.log(todayy) */

/* //preventing object mutation using Object.freeze()
function freezeObj() {
  "use strict"
  const MATH_CONSTANTS = {
    PI: 3.14
  };

Object.freeze(MATH_CONSTANTS);

  try {
MATH_CONSTANTS.PI = 99;
  }
  catch( ex ) {
console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj(); //ouputs TypeError: Cannot assign to read only property 'PI' of object '#<Object>' at freezeObj */

/* //re-assigning elements of an array declared with const. a.k.a mutating an array declared with const

const arr = [5,4,3];

// arr = [7,8,9]; will output an error. the correct way is..
arr[0] = 7;
arr[1] = 8;
arr[2] = 9; 

console.log(arr); //success! */

//"use strict"; line in javascript either globally or inside a function helps you catch coding mistakes. it will return errors if you don't strictly specify either var, let or const when declaring a variable.

/* //nested conditional ternary operator
//write a function that checks whether a number is positive, negative or 0.

function checkSign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(-7));  */

/* //conditional ternary operator. is like a one-line if-else expression
//styntax. condition ? statement-if-true : statement-if-false;

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
console.log(findGreater(5, 20)); //b is greater

//ex 2
function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(5, 20)); //false */

/* //parseInt() with Radix. Radix specifies the base of the number in the string e.g. base 2 would be binary. our default is base 10.
//syntax parseInt(str, radix)
//example. convert 10011 (base 2) to integer

function convertToInteger(str) {
  return parseInt(str, 2);
  }

console.log(convertToInteger("10011")); //outputs 19 */

/* //using pasreInt() to convert strings to integers

function convertToInteger(str) {

return parseInt(str);
}
 
var test = convertToInteger("42"); //outputs 42. didn't work when i tried to pass a literal string 'forty two' smh you wonder. bet i'll find out why badae

console.log(test); */


/* //generating random whole numbers within a range
//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
var myRandom = randomRange(5, 15);
console.log(myRandom); //success! */

/* //Generating random whole numbers using Math.floor()
function randomWholeNum() {

  return Math.floor(Math.random() * 10); //this expression will return a random number btwn 0 and 9. 
}
console.log(randomWholeNum());

//similarly, Math.floor(Math.random() * 20) would give a random number btwn 0 and 19. */

/* //Generating random decimal numbers/fractions using Math.random()
function randomFraction() {

  return Math.random(); 
}
console.log(randomFraction());
//Math.random will always return a number between 0 and 1. it could be zero but never 1. */

//profile lookup challenge

/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

/* var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    } 
  }
    return "No such conctact";
    }

var data = lookUpProfile("Harry", "likes");
var next = lookUpProfile("Sherlock", "stories");

console.log(data);// (3)["Hogwarts", "Magic", "Hagrid"]
console.log(next); //No such property */

/* //A do while loop will run the code AT LEAST ONCE and then check the condition. is how its diffrent from a while loop.
//iterating with do while loop

var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)

console.log(i, myArray); // outputs 11 [10] successfully. even though i is not less than 5 cos do while loop executes at least once. */

/* // using nested for loops to access nested arrays
//in this example we will create a function to mutiply all the numbers/elements in the nested array

function multiplyAll(arr) {
  var product = 1;

  for (var i=0; i < arr.length; i++) {
    for (var j =0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product); //5040 success! */


/* //iterate through an array with for loop
//Use a for loop to add the value of each element of the myArr array to total.
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i]; 
}
console.log(total); //20 success! */

/* //counting backwards with a for loop. e.g decrement by 2. Initialise with 10 for even numbers.
var myArray = [];

for (var i = 10; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray); // (5) [10, 8, 6, 4, 2]

//counting backwards with a for loop. e.g decrement by 2. Initialise with 9 for odd numbers.
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray); // (5) [9, 7, 5, 3, 1] */

/* //iterating ODD numbers with a for loop. Hint - initialise i to 1 then increment by 2.

var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray); */

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