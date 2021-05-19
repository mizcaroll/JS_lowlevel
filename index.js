//.includes() determines whether an array includes a certain value in its entries. Returns a boolean value true or false.
const books = ['Alf', 'Power of now', 'Think Big', 'Alchemist'];
const isInBooks = books.includes('Alf');
console.log(isInBooks) //true

//.contains() CANNOT be used with arrays. can be used to find out whether a node has a child with a specific class. e.g.
const body = document.querySelector('body');
const circle = document.querySelector('.circle');
console.log(body.contains(circle)) //false


/* //.sort() sorts the elements of an array in place and returns a sorted array. Default order is ascending(alphabetical).
const planets = ['Mars', 'Jupiter', 'Earth', 'Pluto'];
console.log(planets.sort()); //["Earth", "Jupiter", "Mars", "Pluto"]

const ages = [45, 108, 6, 12, 70, 26, 2];
console.log(ages.sort((a, b) => a - b)); //[2, 6, 12, 26, 45, 70, 108] */

/* //use the date method to create a countdown to next Christmas
//Date()
const today = new Date()
const Christmas = new Date('2021-12-24T11:50:08.331Z')
const millisecondsToXmas = Christmas - today // 18929934139
const minutes = millisecondsToXmas / 60000;
console.log(minutes) //315498.3785666667
console.log(Math.round(minutes)) //315498


//Syntax for date;
const date = today.getDate() // 19. i.e 19th day of the month.

//Syntax for Day;
const day = today.getDay() // 3. i.e the 3rd day of the week.

//Syntax for fullYear;
const fullYear = today.getFullYear() // 2021. i.e current year.

//Syntax for hours;
const hours = today.getHours() // 11. i.e time now is 11:37 in 24hour system.

//Syntax for IsoString;
const isoString = today.toISOString() // 2021-05-19T11:50:08.331Z i.e. (11:50am) in standardized date format
//console.log(isoString) */

/* //Challenge: You're at a bar with a friend. When you ask them what they'd like to drink, they say 'surprise me'. create a function that picks a random drink from the drinks menu.

const drinksMenu = ['Vodka Tonic', 'White Wine', 'Beer', 'Mocktail'];

function randomDrink(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomDrink(drinksMenu)); //success! */

//JS inbuilt Math objects
//Math.random() - returns a random number from 0 to less than 1.
//Math.floor() - rounds numbers down to the nearest full integer
//Math.ceil() - rounds numbers up to the nearest full integer
//Math.round() - rounds to the nearest integer


//also research .removeEventListener()

/* //.addEventListener()
//syntax: target.addEventLisetener(event, function)
//write code that would log something on the console when someone clicks on the html body element.

const body = document.querySelector('body');

function bodyReact() {
console.log("Someone has clicked inside your web page.");
}

body.addEventListener('click', bodyReact()); */


/* //using 'split' 'map' and 'join' write a function that capitalises the first letter of each word in a sentence. e.g capitalise('nairobi half life') => 'Nairobi Half Life'

//my solution

const testSentence = 'i learnt about includes method yesterday.';

function capitalise(sentence) {
return sentence.split(' ').map(i => i[0].toUpperCase() + i.substr(1)).join(' ');
}

console.log(capitalise(testSentence)); //I Learnt About Includes Method Yesterday. 

//tutor's solution - uses charAt(), therefore dot notation throughout.
//sentence.split(' ').map(i => i.charAt(0).toUpperCase + i.substr(1)).join(' '); */

//using 'split' and 'filter' write a function that counts the number of vowels in a sentence. e.g: getVowelCount("I was born and raised in Nairobi Kenya.") => 12

/* function numberOfVowels(sentence) {
  const letters = sentence.split('');
  const vowels = letters.filter(i => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' );
  return vowels.length;
}

const testSentence = "I was born and raised in Nairobi Kenya.";
console.log(numberOfVowels(testSentence)); */

//NB: i completed this challenge thought my solution was genius and worked brilliantly..
//until i eventually saw the tutor's solution wow. nisawa tu btw lol.
//my takeaway is that single lines of code are cleaner 
//therefore more brilliant and efficient.
//i hadn't yet learnt about includes() method to be fair.
//cleaner solution below:

/* const testSentence = "I was born and raised in Nairobi Kenya.";
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function getVowelCount(sentence) {
  return testSentence.split('').filter(i => vowels.includes(i)).length;
}

console.log(getVowelCount(testSentence)); //14 success!! */


/* //using an array method, write a function that converts an array of cm values as strings, into an array of numbers. e.g getValues(['23cm', 5.6cm', 1000mc']) => [23, 5.6, 1000]

function toInt(arr) {
return arr.map(i => parseFloat(i, 10)); 
}

const testArr = ['23cm', '5.6cm', '1000cm'];
console.log(toInt(testArr)); //[23, 5.6, 1000] success!! */

/* //using an array method, write a function that returns the string elements of an array that have a given length or larger. e.g. getWords(['Florida', 'Dog', 'Phone'])

function checkLength(arr, num) {
  return arr.filter(i => i.length >= num);
}

const testArr = ['Florida', 'Dog', 'Phone'];
console.log(checkLength(testArr, 4)); // (2) ["Florida", "Phone"] success! */

/* //using 'every' write a function that checks whether evry number in an array is a square number. e.g. checkSquares([9, 16, 81] => true)

function checkSquares(arr) {
return arr.every(i => (Math.sqrt(i) % 1 === 0));
}

const testArr = [9, 16, 81];
console.log(checkSquares(testArr)); //true */

/* //using the 'reduce' js method, write a function that will return the total number of characters in an array of strings. e.g. getTotal(['Rabbit', 'Footbal', 'Cracking']) => 22

const Array = ['John', 'Doe', 'is', 'American'];
function getTotal(arr) {
  return arr.reduce((total, value) => total + value.length, 0);
}
console.log(getTotal(Array)); //success! */

/* //using 'some' write a function that checks an array for a 'falsey' value. e.g. checkForFalsey([11, NaN, [], 'Angels']) => true;

const randomArr = [ 45, 'Mary', 0, 'Tom'];

function checkForFalsy(arr) {
  return arr.some(i => !i); //true
}

console.log(checkForFalsy(randomArr));
 */
/* //the 7 falsey values evaluated with the ternary operator
console.log("The 7 falsy values")
0 ? console.log("truthy") : console.log("falsy") // falsy
0n ? console.log("truthy") : console.log("falsy") // falsy
null ? console.log("truthy") : console.log("falsy") // falsy
undefined ? console.log("truthy") : console.log("falsy") // falsy
false ? console.log("truthy") : console.log("falsy") // falsy
NaN ? console.log("truthy") : console.log("falsy") // falsy
"" ? console.log("truthy") : console.log("falsy") // falsy */

/* //Array execrcise. using 'map' js method, write a function that converts farenheit to celcius. e.g: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]

function solution(temp) {
return temp.map(i => 5/9 * (i - 32));
}

const temperature = [23, 140, 212, 41];
console.log(solution(temperature)); //[-5, 60, 100, 5] success!
 */
/* //importing a defualt export
//To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";

//The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

//create an export fallback with an export default
//There is another export syntax, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

//Below are examples using export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}

//The first is a named function, and the second is an anonymous function.

//Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const


//using * to export everything from a file. You have to create an object to store everything in. e.g a new object called capitalizeString in this example

//syntax:
import * as newObject from "./filename.js"
import * as capitalizeString from "./string_function.js"
 */

/* //use export to reuse a code block
// syntax to export variables:

export const foo = "bar";
export const bar = "foo"; */

/* //export & import a function. exercise: 

import { capitalizeString } from "./string_function.js"
const cap = capitalizeString("hello!");
console.log(cap); //HELLO!
 */
/* //importing and exporting functions in javascript
//Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}

//The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}

export { add };

//When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract }; */

/* //getters and setters challenge:

class Thermostat {
  constructor(temp) {
    this._temp = 5/9 * (temp - 32);
  }
get temperature() {
  return this._temp;
}
set temperature(newTemp) {
  this._temp = newTemp;
}
}
const thermos = new Thermostat(76); //in Fahrenheit
//get
console.log(thermos.temperature); //24.44 in Celsius

//set
thermos.temperature = 48;
temp = thermos.temperature;
console.log(temp); //48 in Celsius */

/* // Use getters and setters to Control Access to an Object
//You can obtain values from an object and set the value of a property within an object. Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
//Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer); //anonymous
novel.writer = 'newAuthor'; 
console.log(novel.writer);//newAuthor

//Note the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

//NB: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private. */

//Use class Syntax to Define a Constructor Function challenge:
/* Use the class keyword and write a constructor to create the Vegetable class. The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor. Vegetable should be a class with a defined constructor method. The class keyword should be used. Vegetable should be able to be instantiated. carrot.name should return carrot. */

/* class  Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name); //carrot 

//Use class Syntax to Define a Constructor Function
//ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc. */

/* //In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

//in ES6 The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter'); */

//It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
//NB: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

/* //concise declarative functions challenge: Refactor the function setGear inside the object bicycle. setGear should be a declarative function. bicycle.setGear(48) should change the gear value to 48.

const bicycle = {
  gear : 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
}
bicycle.setGear(48);
console.log(bicycle.gear); //success! */

/* //write concise declarative functions. When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

//With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
 */
/* //Concise Object Literal Declarations Using Object Property Shorthand - Challenge:

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male")); */

//{name: "Zodiac Hasbro", age: 56, gender: "male"} success!

/* //Write Concise Object Literal Declarations Using Object Property Shorthand
//e.g. the following function passes 2 arguments and returns an object
const getPosition = (x, y) => ({
  x: x,
  y: y
});

//with ES6 can simply be written as..

const getPosition = (x, y) => ({x, y}); */

//creating strings using template literals. We do this using backticks.
//challenge: Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

/* Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
 */

/* const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};


function makeList(arr) {

  const failureItems = []; 

  for ( let i = 0; i < arr.length; i++ )  {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList); //success!!
//console.log(makeList(result.failure)); */


/* //creating strings using template literals. We do this using backticks.
//Pros: You can make multi-line strings. You can add single or double quotes withing your string without having to escape them. You can put variables within the string using the ${variable} placeholder.

const person = {
  name: "Vanessa Taylor",
  age: 33
};

//Template literal with multi-line string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old`;

console.log(greeting); */ /* Hello, my name is Vanessa Taylor!
I am 33 years old */

/* //Using Destructuring Assignment to Pass an Object as a Function's Parameters
//challenge: Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 

console.log(stats);
console.log(half(stats)); //28.015 success!! */

/* //Using Destructuring Assignment with the Rest Parameter to Reassign Array Elements. NB the rest element only works correctly as the last variable in the list.

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
 
  const [ , , ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(source); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr); //(8) [3, 4, 5, 6, 7, 8, 9, 10] */

/* //Using Destructuring Assignment to Assign Variables from Arrays

const [i,j] = [1,2,3,4,5,6];
console.log(i, j); // 1 2

//We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [x,y,,,,z] = [1,2,3,4,5,6,7,8];
console.log(x,y,z); //1 2 6

//Using destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a =8, b = 6;
(() => {
"use strict";
[a, b] = [b, a]; 
}) ();
console.log(a); //6
console.log(b); //8 */

/* //using ES6 destructuring assignment to assign variables from nested objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getKeshosMax(forecast) {
  "use strict";
  const { tomorrow: { max : maxOfTomorrow }} = forecast; //nested destructuring assignment syntax
  return maxOfTomorrow;
}
console.log(getKeshosMax(LOCAL_FORECAST)); //84.6 */

/* //example 2. using destructuting assingnment to assign variables from objects
const  AVG_TEMPS = {
  today: 77.5,
  tomorrow: 79
};

function getKeshosTemp(avgTmp) {
  "use strict";
  const { tomorrow : tempOfTomorrow } = avgTmp;
  return tempOfTomorrow;
}
console.log(getKeshosTemp(AVG_TEMPS)); //79 */

/* //Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object. Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name; //John Doe
const age = user.age; //34

//Here's an equivalent assignment statement using the ES6 destructuring syntax:

const {name, age} = user;

//Above, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is. Also note below 
//using destructuting assingnment to assign variables from objects

const nextUser = { myName: 'Caroline Mbithe', myAge: 20 };

const { myName : a, myAge : b } = nextUser;
console.log(a); //Caroline Mbithe */

/* //Use the Spread Operator to Evaluate Arrays In-Place
//the spread operator as used here spreads out the contents of arr1 into arr2. as opposed to making arr2 equal to arr1.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // spread operator
arr1[0] = 'potato';

console.log(arr2); //(5) ["JAN", "FEB", "MAR", "APR", "MAY"]
console.log(arr1); //(5) ["potato", "FEB", "MAR", "APR", "MAY"] */

//using rest operator with function parameters
/*In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function. */

/* function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); //You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); //You have passed 4 arguments.

//ex 2. using rest operator with function parameters
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
}) ();
console.log(sum(1,2,3,4)); //10

// NB. The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array. */

/* //Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

const increment = (function() {
return function increment(number, value = 1) {
  return number + value;
}
})();
console.log(increment(5, 2)); //7
console.log(increment(5)); //6

//setting default parameters for functions

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); //Hello John
console.log(greeting()); //Hello Anonymous */

/* The default parameter kicks in when the argument is not specified (it is undefined). As in the example above, the parameter name received its default value Anonymous when i didn't provide a value for the parameter. You can add default values for as many parameters as you want. */ 

/* //higher order arrow functions
//using map() and filter() functions withing an array function

const realNumberArray = [4, 5.6, -.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); //(3) [16, 1764, 36] */

/* //arrow functions with parameters
//the below code can be written as an arrow function

var myConcat = function (arr1, arr2) {
return arr1.concat(arr2);
}
console.log(myConcat([1,2], [3,4,5])); // [1, 2, 3, 4, 5]

//now as an arrown function. change var to const for good measure

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5])); //[1, 2, 3, 4, 5] */

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