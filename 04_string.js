var greet="Good Morning";
console.log(typeof greet);

console.log("Total no. of chars available in this string variable-greet");
var greetLength= greet.length;
console.log("Lenght of string greet is:",greetLength);

console.log("Find the char by index value");
var charIndex=greet.charAt(3);
console.log("char at index 3 is:",charIndex);

console.log("last char of string");
var lastCharIndex=greet.charAt(greetLength-1);
console.log("last char of string is:",lastCharIndex);

console.log("Find the index by char value");
var indexOfM=greet.indexOf('M');
console.log(indexOfM);

//var indexOfZ=greet.indexOf('Z');
console.log("index of char which is not in string:",greet.indexOf('Z'));

console.log("index of char 'o' in string:",greet.indexOf('o'));
console.log("index of char 'o' in last:",greet.lastIndexOf('o'));

console.log("New string after replace:",greet.replace("Morning","Evening"));
console.log(greet);

console.log("string to Upper case:",greet.toUpperCase());
console.log("string to Lower case:",greet.toLowerCase());

var str="   Madhuri  Rathi   ";
console.log("remove extra char from my string:",str.trim());
console.log("lenght of string after:",str.trim().length);
console.log("Actual length of string:",str.length);

var count=str.length-str.trim().length;
console.log("total extra char removed:",count);

console.log("remove extra char from my string:",str.trimStart());
console.log("remove extra char from my string:",str.trimEnd());

console.log("slice method");
console.log(greet.slice(5,12));//it exclude the last char index i.e 12
console.log(greet.slice(2,5));

console.log("split method");
var splitResult=greet.split(" ");
console.log(splitResult,typeof splitResult,splitResult.length);

console.log("includes method return boolean value");
console.log("check the substring in greet:",greet.includes('Mor'));
console.log("check the substring in greet:",greet.includes('afternoon'));
console.log("check the substring in greet:",greet.includes('o'));

var myFriendsList="Shruti, Pooja, Ashwini, Chan";
console.log(myFriendsList.split(',').length);
console.log(myFriendsList.split(' ').length);
console.log(myFriendsList.length);









