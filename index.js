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































