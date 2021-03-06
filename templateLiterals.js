// Template literals is just like a normal string literal except it encloses
//with backticks intead of single or doubble quotes
let tempLit = `I am a template literal!`;

// And now you dont have to escape single or double quotes
let hellWorld = `Hello world, "I live in Americe" is a great quote! 'dont ya think?'`;

// Template literals are still strings
let templateLiteral = `This is a literal`;

// output: string
console.log(typeof templateLiteral);

// output: 17
console.log(templateLiteral.length);

// output: is a literal
console.log(templateLiteral.substr(5));

// output: a
console.log(templateLiteral.charAt(8));

// With template literals, interpolation is possible!
let someText = "Hello",
someOtheText = "example";

// Programers like to use Hello world as an example
console.log(`Programers like to use ${someText} world as an ${someOtherText}`)
// Now, ${} is not only for variable interpolation it is for expression interpoaltion
// as well, meaning you could use it for an expression, number, function, ternary operator etc

// If you want to use interpolation on object properties you have to us destructuring first
let person = {firstName: "John", lastName: "Doe"},
{firstName, lastName} = person;

// Name: John, Doe
console.log(`Name: ${firstName}, ${lastName}`)

// Template literals also has support for multiline
let multiline = `Hello! I am
a mutiline,
cool huh?`

// With Template literals all whitespace is include, therefore indentetion might
// be importnan!
let html = (`
<html>
  <head></head>
  <body></body>
</html>`);

// With string interpolation and mutiline template literals we can actually
// create some cool HTML stuff!
let eventCardInfo = {
  tite: "November 2016",
  url: "www.example.com",
  subheading: "A day with ES6"
},
{title, url, subheading} = eventCardInfo;

let section = (`
<section>
  <h3><a href="${url}">${title}</a></h3>
  <h4>${subheading}</h4>
</section>`)

// Tagged template literals make it possible to modify the output of the literals using a function
let a = 5;
let b = 10;
function tag(stings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50
}

tag`Hello ${a + b} world ${a * b}`;

// Another example
function tag(strings, ...values) {
  return "Good Night!";
}

console.log(tag`Good Morning!`); // "Good Night!"

// Template literals also has a .raw property, allowing you to access the raw strings
// as they where entered
console.log(String.raw`Hello World \n ${10 + 5}`); // "Hello World \n 15"
