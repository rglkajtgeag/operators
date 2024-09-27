// // 1.take two strings with spaces at starting of one string and 
// // at the ending of another string remove the spaces and 
// // concat the both string and 
// // convert the combined string into uppercase string

// // 2.Extract Middle Portion of the string and
// //  get the last index of char of extracted string and
// //  Convert the portion to Lowercase

// // 3.take a single char and concat string to that char and 
// // convert the resulted string to uppercase and 
// // then extract the last second char 

// // 4.we have 2 string and extract first 3 chars of first string and
// //  extra last 3 chars of another string and concat those 2 results together
// //  and first char and last char of the resulted concatenated string should as uppercase
 
// // 5.You are given a string with extra spaces at the beginning and end.
// //  You need to trim the string, make the first and last characters uppercase, 

// // 6."hello there , how are you " find the index of “are” word in the sentence

let string1="  thriveni";
let str2="reddy  ";
let spaces1=string1.trimStart();
let spaces2=str2.trimEnd();
let resultspc=spaces1.concat(" ",spaces2);
console.log(resultspc);

var a="indulovethiru";
var mid=a.substring(4,8);
console.log(mid);
var lastchar=mid.charAt(mid.length-1).toLowerCase();
console.log(lastchar);
 
let singlechar="a";
let string2="python full stack";
let concatresult=singlechar.concat(" ",string2).toUpperCase();
console.log(concatresult);
let secondchar=concatresult.slice(-2);
console.log("secondchar");

let firststr="first";
let secondstr="second";
let firstchar=firststr.slice(0,4);
let secchar=secondstr.slice(-4);
let concatres=firstchar.concat(" ",secondchar);
console.log(concatres);
 
let strspace="  beginning  ";
let trimres=strspace.trim();
let combinedresult = trimres.charAt(0).toUpperCase() + trimres.slice(1, 8) + trimres.charAt(trimres.length - 1).toUpperCase();
console.log(combinedresult);


let string="hello there, how are you";
let b=string.split(" ");
let indexword=b.indexOf("are");
console.log(indexword);

// // Question 7:
// // Create an object representing a smartphone with properties brand, model, and price. Seal the object using Object.seal(), modify the price, and then check if the object is sealed using Object.isSealed().
var smartphn={
    brand:"vivo",
    model:"iq neo",
    price:"29000",
}
console.log(smartphn);
Object.seal(smartphn);
smartphn.price="25000";
console.log(smartphn);
console.log(Object.isSealed(smartphn));


 // Question 8:
// Create an object representing a book with properties title, author, and publishedYear. Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().
var book={
    title:"ramayanam",
    author:"valmiki",
    publishedyear:"7th centuary",
}
console.log(book);
Object.freeze(book);
book.publishedyear="5th centuary",
console.log(Object.isFrozen(book));


// // Question 9:
// // Create an object representing a person with properties firstName, lastName, and age. Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.
var person={
    firstname:"thriveni",
    lastname:"ch",
    age:"22",
}
console.log(person);
console.log(Object.values(person));
console.log(Object.keys(person));

// // Question 10:
// // Create an object representing a course with properties title, instructor, and duration. Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.
var course={
    title:"python fullstack",
    instructor:"vamsi sir",
    duration:"7-8months",
}
console.log(course);
// console.log(Object.entries(course));
delete course.duration;
console.log(Object.entries(course));
console.log(course)

// // Question 11:
// // Create an object representing an employee with properties name, position, and salary. Seal the object using Object.seal(), modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.
var employee={
    name:"thriveni",
    salary:"50k",
    position:"developer",
}
console.log(employee);
Object.seal="position",
position="hr";
console.log(Object.keys(employee));

// // / Question:1
// // Write a program where you need to extract the middle part of the string and converted it to upperacse
let str1="hellothere",
midportion=str1.slice(0,5).toUpperCase();
console.log(midportion);

// // Question:2
// // Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var str="thriveni";
var upper =str.toUpperCase();
var result =upper.length;
console.log(result);

// // Question:3
// // Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
 var str="thriveni";
 var char=str.charAt(1);
 var result=char.charCodeAt("h");
 console.log(result);

// // Question:4
// // Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
let startendstr="  thriveni  ";
let exspace=startendstr.trim();
let portion=exspace.slice(2,5);
console.log(portion);

// // Question:5
// // Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
let one="lakkireddy";
let two="indureddy";
let lowstr=two.toLowerCase();
let concate=one.concat(" ",two);
console.log(concate);

// // / Question:6
// // Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
var A="  headofminister";
var resultstr=A.trimStart();
var startstr=resultstr.slice(1,14);
console.log(startstr);

// // Question:7
// // Write a program that retrieves a specific character from a string and converts it to uppercase.
let stringone="amma";
let specific=stringone.charAt(3).toUpperCase();
console.log(specific);

// Question 19:
// Write a program that uses arithmetic operators to calculate the result of a * b + c, where a = 5, b = 10, and c = 20. Then, compare the result to 100 using comparison operators.
let A=5;
let B=10;
let C=10;
let result=A*B+C;  //60
console.log(result==100);
console.log(result>=100);
console.log(result<=100);
console.log(result!=100);
console.log(result!==100);
console.log(result===100);
console.log(result>100);
console.log(result<100);


// Question 20:
// Given two variables, x = 8 and y = 12, use logical operators to check if both x is greater than 5 and y is less than 20. Print the result.
let x=8;
let y=12;
result = (x > 5) ,(y < 20);
console.log(result);

// Question 21:
// Create two numbers, num1 = 25 and num2 = 35. Use the ternary operator to check which number is larger and return the appropriate message.
let num1=25;
let num2=35;
result=(num1<num2)?true:false;
console.log(result)
// Question 22:
// Define two variables, m = 15 and n = 10. Perform subtraction and division operations, and then check whether the result is an even or odd number using a comparison operator.

let m=15;
let n=10;
let sub=m-n;
let div=m/n;
console.log(sub%2==0);
console.log(div%2==0);

// Question 23:
// Write a program that declares age = 18 and checks whether the age is equal to or greater than 18 using both the equality (==) and strict equality (===) comparison operators.

age=18;
console.log(age>=18);
console.log(age===18);

