//switch statements
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
  console.log(caseInSwitch(4)); //outputs delta on console

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