"use strict";

// ES6 allows easier extraction of values from a object using destructuring
let config = {info: "hello", count: 25, isTrue: false},
{info, count, isTrue} = config;

console.log(info);
console.log(count);
console.log(isTrue);

// Destructuring also supports nesting
let person = {name: "Rob",body: {legs: 4}},
{
  body: {legs},
  name
} = person;

// "Rob" 4
console.log(name, legs);

// Destructuring is fail-soft, meaning missing properties will get undefined.
let options = {},
{delay, info} = options;

console.log(delay, info) // undefined undefined

// This does how ever not apply on properties when the parent is missing.
let configuration = {},
{option: {name}} = configuration; // Error


// ES6 destructuring also works on arrays
let anArray = [1, "hello", false],
[first, second, third] = anArray;
console.log(first);
console.log(second);
console.log(third);

// Destructuring has support for nesting on array as well
let names = ["jonas", "rob", ["marcus"]],
[first, [second], third] = names;

// "jonas", "rob", "marcus"
console.log(first, second, third);

// Array literal destructuring is order-independent. But we can
// still choose which elements to pick.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8],
[one, two, , four, , , , eight] = numbers;

// 1, 2, 4, 8
console.log(one, two, four, eight);

// You can use destructuring on mixed array/object as well.
// Using destructturing on mixed array/object becomes handy when handling JSON.

// Destructuring is also possible on Class objects as long as its properties
// are accessable via dot or bracket notation.

// Destructuring can also be used directy on return valus for methods that
// returns an array for example.
let [, areaCode, exchange, lineNumber] =
	/^(\d\d\d)-(\d\d\d)-(\d\d\d\d)$/
		.exec('650-555-1234');

// output: 650, 555, 1234
console.log(areaCode, exchange, lineNumber);

// Destructuring can be used with other ES6 operators such as
// spread and rest operators, we can also use default values.
// We can even use them to destructure function arguments directly
// in the arguments defintion
