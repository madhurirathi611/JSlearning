function squareOfWordLength(word) {
    console.log(`1.1 Given string: ${word}`);
    str=word.length;
    console.log(`1.2 Length of string : ${str}`);
    var squareOfLength=str**2;
    return squareOfLength;   
}
console.log(`-----1. Find the length of string and its square for a given string-----`);
var resultOfSquare=squareOfWordLength("JavaScript");
console.log(`1.3 Square of length: ${resultOfSquare}`);
console.log("--------------------------------------");
var resultOfSquare=squareOfWordLength("Google Chrome");
console.log(`1.3 Square of length: ${resultOfSquare}`);
console.log("--------------------------------------");
var resultOfSquare=squareOfWordLength("Smart Developer");
console.log(`1.3 Square of length: ${resultOfSquare}`);

console.log(`__________________________________________________________________`);
console.log(`-----2. write a function with no argument and no return value-----`);
function operatiorOnString(){
   var str="I am Angular Developer";
    console.log(`Given a string: ${str}`);
    var strLength= str.length;
    console.log(`2.1 Length of string:${strLength}`);
   var totalWord=str.split(" ").length;
    console.log(`    Total no. of words: ${totalWord}`);
    var result=strLength/totalWord;
    console.log(`    Result after division: ${result}`);
    var result=strLength*totalWord;
    console.log(`2.2 Result after multiplication: ${result}`);

}
operatiorOnString();
