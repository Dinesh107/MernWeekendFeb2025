// printf 
// cout 
// systemoutprintln()
// print
// let studentName = "Varshini";
// console.log("Welcome to js students!!!");
// console.log("i like briyani");

// window.alert("Welcome to js students")


// document.getElementById("myH1").textContent = "Hello varshini!!!"

// document.getElementById("myP").innerHTML = "Hello vaishnavi"

// document.getElementById("myP2").innerText = "This is Dinesh"


// variable = it is container that stores a value

// behaves as if were the value it contains


// declaration let x 
// assignment x = 100;

// let var const 

// let x = 100;
// console.log(x);


// let age = 12;
// let price = 99;
// let gpa = 9.11;
// let online = true;
// let name = "varshini";


// console.log(typeof age);
// console.log(typeof online);
// console.log(typeof name);


// console.log(`You are ${age} years old, the price is ${price} and your cgpa is ${gpa}`);


// let fullName = "Varshini";
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;

// Arithemtic operators - operands (values, variables, etc)
                        // operator ( +, -, *, /, %, ** )
                        
// let student = 10;

// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student % 2;

// student += 1;
// student -= 1;
// student *= 2;
// student /= 2;
// student %= 2;



// console.log(student);

// how to accept user input 

//easyway - window promt
// professional way

// let username = window.prompt("Enter your username");

// console.log(username);


// let username;

// document.getElementById("myBtn").onclick = function() {
//    username = document.getElementById("myText").value;
//    console.log(username);
//    document.getElementById("myH1").textContent = `Hello ${username}, Its Great to study!!!`;
// }


// username
// email  
// password
// phone
// dateofbirth

// type conversion - cahnge the datatype of a value to a another (string, number. boolean)



// let age = window.prompt("How old are you");

// age = Number(age);

// console.log(typeof age, age);


// let x = "0";

// let y = "0";

// let z = "0";

// x = Number(x);

// y = String(y);

// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const - a varaible that can't be changed

// const PI = 3.14159;

// let radius;

// let circumference;

// PI = 63.344;

// radius = window.prompt("Enter the radius of a circle");

// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);


// Condition statements

// if - if a condition is true, execute some code, if not do something else

// let age = 20;

// if (age >= 18) {
//     console.log("You are eligible to vote");
// } 

// if-else -  if a condition is true, execute some code, if not else part will be executed

// let age = 10;

// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// nested if statements or ladder statements

// let mark = 55;

// if (mark <= 10) {
//     console.log("you must improve your study and need to work hard");
// } else if(mark > 10 && mark < 50) {
//       console.log("You are doing good, but you can improve");
// } else if(mark >= 50 && mark < 80) {
//       console.log("Congratulations, you passed the exam");
// } else  {
//     console.log("You are awarded with distinction");
// }

// ternary operator - a shortcut to if{} and else{} statements helps to assign a varaiable based on a consdition 

// condition ? codeIfTrue : codeIfFalse

// let age = 10;

// let message = age >= 18 ? "You're an adult" : "You're a minor";

// console.log(message);


// let purchaseAmount;

// let discoun = 10%;

// swtich -can be an efficient replacement to many else if statement

// let day = 1234;

// switch (day) {
//    case 1:
//        console.log("Monday");
//        break;
//    case 2:
//        console.log("Tuesday");
//        break;
//    case 3:
//        console.log("Wednesday");
//        break;
//    case 4:
//        console.log("Thursday");
//        break;
//    case 5:
//        console.log("Friday");
//        break;
//    case 6:
//        console.log("Saturday");
//        break;
//    case 7:
//        console.log("Sunday");
//        break;
//    default:
//        console.log("Invalid day");
// }



// string methods - allow you to manipulate and work with text (strings)

// let userName = "Premaaa Varshini";

// length property - returns the number of characters in a string

// console.log(userName.length);

// toUpperCase() - converts all the characters in a string to uppercase

// console.log(userName.toUpperCase());

// toLowerCase() - converts all the characters in a string to lowercase

// console.log(userName.toLowerCase());

// trim() - removes whitespace from both sides of a string

// console.log(userName.trim());

// replace() - replaces a specified value with another value in a string

// console.log(userName.replace("Prema", "P"));

// split() - splits a string into an array of substrings

// console.log(userName.split("-"));

// concat() - joins two or more strings together



// let firstName = "Varshini";
// let lastName = "Perma";

// console.log(firstName.concat(" ", lastName));


// charAt()

// console.log(userName.charAt(2));

// indexOf()

// console.log(userName.indexOf("a"));

// lastIndexOf()

// console.log(userName.lastIndexOf("a"));



// string slicing - create a substring fro  a portion of another

// string.slice(start, end)

// const fullName = "Prema Varshini";

// let firstName = fullName.slice(0, 4);

// let lastName = fullName.slice(6);

// console.log(firstName);

// console.log(lastName);

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);


// email = varshini@gmail.com;


// method chaining - 


// without chains

// let username = window.prompt("Enter your username");

// username = username.trim();

// let letter = username.charAt(0);

// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// with chains

// let username = window.prompt("Enter your username");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);


// logical operator - used to combine or manipulate boolean values(true or false)

// AND = &&
// OR = ||
// NOT = !

// const isSummer = true;

// if(!isSummer) {
//     console.log("It's summer!!");
// } else {
//     console.log("It's not summer yet");
// }

// = assignment operator 
// == coamparison operator (comapare if values are equal)
// === strict equality operator (coampare if values & datatype are equal)
// != inequality operator -it will return true if two values are not equal
// !== strict inequality operator

// const PI = 3.14;

// if(PI == "3.14") {
//     console.log("this is PI");
// } else {
//     console.log("this is not PI");
// }

// const PI = 3.14;

// if(PI === "3.14") {
//     console.log("this is PI");
// } else {
//     console.log("this is not PI");
// }


// != inequality operator -it will return true if two values are not equal

// const PI = 3.14;

// if(PI != "3.14") {
//     console.log("this is not PI");
// } else {
//     console.log("this is PI");
// }

//!== strict inequality operator

// the value are same and datatype also same it will return false

// const PI = 3.14; 

// if(PI != 3.14) {
//     console.log("this is not PI  false");
// } else {
//     console.log("this is PI true");
// }

// loops 

// while loop - entry control loop
// do while loop - exit control loop 
// for loqop - enter control loop

// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// for(let i = 1; i <= 10; i++) {
//     if(i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++) {
//     if(i == 5) {
//         break;
//     }
//     console.log(i);
// }

// console.log("Happy new yearr!!!!");


// funtions - a section of reusable code

// declare code once, use it whenever you want,

// call the function to excute that code

// function happyBirthday(username, age) {
//     console.log("Happy Birthday!!!! to you");
//     console.log("Happy Birthday!!!! to you");
//     console.log(`Happy Birthday!!!! to dear ${username} youu`);
//     console.log("Happy Birthday!!!! to you");
//     console.log(`you are ${age} years old`);
// }

// happyBirthday("Vaishnavi", 20);
// happyBirthday("varshni", 21);


// variable scope = where a varaible is recognized and accessible (local vs global)

// let x = 1;

// func1();
// func2();

// function func1() {
//     let x = 2;
//     console.log(x); 
// }

// function func2() {
//     let x = 3;
//     console.log(x); 
// }



// array =  variable like structure that can hold more than 1 value;

//let fruits = ["apple", "orange", "banana"];

//fruits.push("Kiwi");
// fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

// let numofFruits = fruits.length;
// console.log(numofFruits);

// let index = fruits.indexOf("apple");
// console.log(index);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for(let fruit of fruits) {
//     console.log(fruit);
// }



// spread operator = ... allows an iterable usch as an array or string to expanded itno seprate  elements (unpacks the elements)


// let numbers = [1, 2, 3, 4, 50, 100, 500];

// let max = Math.max(...numbers);
// console.log(numbers);
// console.log(max);


// let fruits = ["apple", "orange", "banana"];

// let vegetables = ["carrots", "tomatos", "beetroot"];

// let allFruitsAndVegetables = [...fruits,...vegetables, "eggs", "bread"];

// console.log(allFruitsAndVegetables);

// rest parametrs - bundles seprate elements into arrays

// function openFridge(...foods) {
//     console.log(...foods);
// }

// function getFood(...foods) {
//    return foods;
// }

// const food1 = "briyani";

// const food2 = "dosa";

// const food3 = "idly";

// const food4 = "curd rice";


// openFridge(food1, food2, food3, food4);


// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// callbacks = a function that is passed as an argument to another function


// used to handle async operations

// hello(wait, leave, goodbye);


// function hello(callback1, callback2, callback3) {
//         console.log("Hello World");
//         callback1();
//         callback2();
//         callback3();
// }

// function leave() {
//     console.log("Leave");
// }

// function wait() {
//     console.log("waittt");
// }

// function goodbye() {
//     console.log("Goodbye");
// }


// function sum(callback, x, y) {
//    let result = x + y;
//    callback(result);
// }

// function displayConsole(result) {
//    console.log(result);
// }


// sum(displayConsole, 5, 10);


// Foreach() - method used to iterate over the elemnets of an array and apply a specified function call back to ech elemnts

// array.froEach(callback);
// element, index, array

// let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2)
// }

// function display(element) {
//     console.log(element);
// }


// let fruits = ["apple", "orange", "banana", "kiwi"]

// fruits.forEach(upperCase);
// fruits.forEach(display);


// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function display(element) {
//     console.log(element);
// }

// map - accepts a callback and applies that function to each element of an array, then return a new array


// let numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// console.log(squares);

// const cubes = numbers.map(cube);
// console.log(cubes); 


// function square(element, index, array) {
//     return Math.pow(element, 2);
// }

// function cube(element, index, array) {

//     return Math.pow(element, 3);
// }

// filter - method creates a new array with all elements that pass the test implemented by the provided function


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element) {
//     return element % 2 === 0;
// }

// reduce - method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

// const prices = [5, 10, 20, 30, 40, 50, 60];

// const totalPrice = prices.reduce(sum);

// console.log(`TotalPrice: ${totalPrice.toFixed(2)}`);


// function sum(accumulator, element) {
//    return accumulator + element;
// }


// arrow functions - a concise way to write function

// () => {}
// const hello = function() {
//  console.log("Hello World");
// }

// const hello = (name) => { console.log(`hello ${name}`);
// const hello = (name) => console.log(`hello ${name}`);
// }

// hello("Vaishnavi");


/// destructuring - Extract values from arrays and objects 
// then assign them to varaibles in a convenient way 
// [] - to perform array destructuring
// {} - object destructuring

// Example 1

// Swap the value of two variables

// let a = 2;
// let b = 4;

// [ a, b ] = [b , a];

// console.log(a);
// console.log(b);

// SWAP the 2 Elements in an array

// const colors = ["blue", "green", "yellow", "orange", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);

// Assign array elements to variables


// const colors = ["blue", "green", "yellow", "orange", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);

// console.log(secondColor);

// console.log(thirdColor);

// console.log(extraColors);

// example 4

// Extract Values from objects

// const person1 = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// }


// const person2 = {
//     name: "Jane Doe",
//     age: 25,
//     city: "Los Angeles"
// }


// const {name, age, city} = person1;

// console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// const {name: newName, age: newAge, city: newCity} = person2;

// console.log(`Name: ${newName}, Age: ${newAge}, City: ${newCity}`);

// Closure - the function defined inside of another of function

// the inner function access to the variable and scope of the outer function.

// allow for private varibles and for state maintenance.
// used frequently  in js framework: react, vue, angular
// we can encapusate the varaile and make it private

// function outer() {
//     let message = "Hello varshini";
//     function inner() {
//       console.log(message);
//     }
//     inner();
// }

// message = "Goodbye";

// outer();



// function createCounter() {
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(`Count incresed to ${count}` );
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount}
// }



// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount()); // 3

// console.log(counter.count); // 0

// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//        score+= points;
//        console.log(`+${points} pts`);
       
//     }
//     function decreaseScore(points) {
//        score-= points;
//        console.log(`-${points} pts`);
       
//     }
    
//     score = 12333233;
    
//     function getScore() {
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore}
// }

// const game = createGame();



// game.increaseScore(5);
// game.increaseScore(6);

// game.decreaseScore(3);

// console.log(game.getScore()); // 12333236