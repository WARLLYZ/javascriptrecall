

// 1. How do we assign a value to a variable? 
//     We use an "=" then assign the value.
// 2. How do we change the value of a variable? 
//     i would use the assignment operator "=" and then the new value of the variable
// 3. How do we assign an existing variable to a new variable? 
//     i would use the assignment operator "=" after the name of the new variable then the name of the existing variable
// 4. Remind me, what are declare, assign, and define? 
//    In JavaScript, declaring a variable means creating a variable and giving it a name, while defining a variable means assigning a value to it 
// 5. What is pseudocoding and why should you do it? 
//    Pseudocoding is a valuable tool for anyone who is developing algorithms or programs, and can help you to write better, more efficient code. 
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it 
//     I would say around 30% of your time thinking about how to solve a problem before you start writing code.


//b strings

let firstVariable = "Hello World";
firstVariable = 7;
let secondVariable = firstVariable;
secondVariable = "Hello again";

//the value for my first car was changed to 7 btw
console.log(firstVariable);

let yourName = "Daniel-nathen Yamamoto";
let greeting = "Hello, my name is " + yourName;
console.log(greeting);

//c boolean

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' === 'Name');
console.log(a + b === c); 
console.log(a * a === d);
console.log(e === 'Kevin');
//all logs should be true above ^^

//d the farm
let animal = "cow";
if (animal === "cow") {
    console.log("mooooo");
}
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}

// committing 

//drivers ed

let age = 18
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

//loop basics 
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  for (let i = 10; i <= 400; i++) {
    console.log(i);
  }
  for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }

  //get even
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + " <-- is an even number");
    } else {
      console.log(i);
    }
  }
  //give me five 
  for(let i = 0; i <= 100; i++)
{
  if(i % 5 == 0 && i % 3 == 0)
    {
    console.log(`I found a ${i}. Three is a crowd! High five!`);} 
  else if (i % 3 == 0)
    {
    console.log(`I found a ${i}. Three is a crowd!`);} 
  else if (i % 5 == 0)
    {
    console.log(`I found a ${i}. High five!`);
}}
//savings account 
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);

//doubleing the pay
let bonusPay = 0;

for (let i = 1; i <= 100; i++) {
  bonusPay += i * 2;
}
console.log(bonusPay);


//arrays and control flow 

// What are the things in an array called? 
        //In an array, the individual items are typically called elements or items
// Do Arrays guarantee those things will be in order?
        // Yes, arrays are a type of data structure that typically guarantees the order of its elements.
// What real-life thing could you model with an array?
        // You could have cars , airplanes , numbers modeled with an array.

// easy does it
var quotes = ["life is like a box of chocolates", "for azeroth!", "its a meee marioooo!"];
console.log (quotes)

const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
randomThings[1]
console.log(randomThings[0])
// Change the value of "Hello"to "World"
randomThings[2] = "world"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

//change values 
// Given the following array: 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
ourClass[2]
console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
console.log(ourClass)
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)

//mix it up

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Azeroth");
myArray.shift();
myArray.unshift("Bob marley");
myArray.pop();
myArray.reverse();

console.log(myArray);

//biggie smalls

let num = 101;
if(num < 100)
{
    console.log("little number");}
else if (num > 100)
{
    console.log("BIG NUMBER");}

//monkey in the middle

let number = 4
if(number < 5)
{
    console.log("little number");} 
else if (number > 10)
{
    console.log("BIG NUMBER");} 
else
{
    console.log("Monkey");}

//whats in your closet

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
  
    console.log("Kristyn is rocking that ${kristynsCloset[2]} today!");
    kristynsCloset.splice(6, 0, "raybans");
    kristynsCloset[5] = "stained knit hat";
  
    thomsCloset[0][0];
    thomsCloset[1][0];
    thomsCloset[2][0];
  
    console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][2]}`);
    thomsCloset[1][2] = "Footie Pajamas"

// FUNCTIONS
//print greeting

const printGreeting = (name) =>
{
    return `Hello there, ${name}`;}

console.log(printGreeting("Slimer"));

//print cool
const printCool = (name) =>
{
    return `${name} is cool!`;
}
console.log(printCool("Captain Reynolds"));

//cal cube
const calculateCube = (num) =>
{
    return num * num * num;
}
console.log(calculateCube(5));

//is vowel
function isVowel(x) {
    X = x.toLowerCase();
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u';
  }
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (const vowel of vowels) {
    console.log(isVowel(vowel));
  }
  console.log(isVowel('b'))

//get two lengths 

const getTwoLengths= (wordOne, wordTwo) =>{
    let lengthList = [];
    lengthList.push(wordOne.length);
    lengthList.push(wordTwo.length);
    return lengthList;}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//get multiple lengths

const getMultipleLengths = (wordsList) =>{

let wordsLengthList = [];

for(let i = 0; i < wordsList.length; i++)
    {
        wordsLengthList.push(wordsList[i].length);
    }
return wordsLengthList;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//max of three

const maxOfThree = (num1, num2, num3) =>
{
var biggestNumber = num1;
    if(num2 >= biggestNumber){
        biggestNumber = num2;
    }
    if (num3 >= biggestNumber){
        biggestNumber = num3;
    }
    return biggestNumber;
}
console.log(maxOfThree(6,9,1));

// pring longest word
const printLongestWord = (arr) =>
{
    let wordsString = "";
    for(let i = 0; i < arr.length; i++)
    {
        if(wordsString.length < arr[i].length)
        {
          wordsString = arr[i];wordsString}}
    return wordsString;}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//objects 

const user = 
{
    userName: "Nathen Yamamoto",
    email: "nathen@nathen.nathen",
    age: 22,
    purchased: []
};
console.log(user.email);

user.email = "mynewemail@email.com";
console.log(user.email);

user.age++;

user.location = "NYC";

user.purchased.push("carbohydrate");
user.purchased.push("peace of mind");
user.purchased.push("Merino Jodhpurs");
console.log(user.purchased[2]);

user.friend = 
{
    friendName: "Michael Jordan",
    age: 30,
    location: "Los Angeles",
    purchased: [] };

console.log(user.friend.friendName);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("a latte");
console.log(user.friend.purchased[1]);

for(let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

for(let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

const updateUser = () => {
    user.age++;
    user.userName.toUpperCase();
}

const oldAndLoud = (person) => {
    person.age++;
    person.userName.toUpperCase();
}
oldAndLoud(user);
console.log(user);