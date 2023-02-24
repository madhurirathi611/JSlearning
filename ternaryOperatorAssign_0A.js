console.log("------------1.Find the greatest number-----------");
function greaterNumber(num1,num2){
var result=num1>num2 ? num1: num2;
console.log(`Greatest number among ${num1} and ${num2} is: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("------------2.Check even or odd numbers-----------");
function isEvenOrOddNum(num){
    var result=num%2==0 ? `${num} is even number`: `${num} is odd number`;
    return result;
}
/*var number=isEvenOrOddNum(29);
console.log(number);*/
console.log(isEvenOrOddNum(29));
//var number=isEvenOrOddNum(44);
console.log(isEvenOrOddNum(44));
//var number=isEvenOrOddNum(0);
console.log(isEvenOrOddNum(0));
//var number=isEvenOrOddNum(101);
console.log(isEvenOrOddNum(101));

console.log("------------3.Check word has even or odd length-----------");
function wordLength(word){
    var wordLength=word.length%2==0 ? `${word} has even word length`: `${word} has odd word length`;
    return wordLength;
}
var result=wordLength("JavaScript");
console.log(result);
var result=wordLength("developer");
console.log(result);
var result=wordLength("Google");
console.log(result);