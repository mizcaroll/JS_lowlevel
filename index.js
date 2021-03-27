//removing the last element of an array with pop function
var myArray = [["John", 23], ["cat", 2]];
myArray.pop;
console.log(myArray);

/* //adding elements into arrays with push function
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["Peter", 65]);
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