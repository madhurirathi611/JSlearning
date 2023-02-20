console.log("****1.****");
function javaScript(){
    console.log("JavaScript is the programming language for web page.");
}
javaScript();

function jsFunction(){
    console.log("JavaScript function is a block of code which is executed when invokes it.");
}
jsFunction();

console.log("****2.****");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name:",firstName);
    console.log("Last Name:", lastName);
    console.log("College Name:",collegeName);
}
personalDetails("Madhuri","Rathi","GECA");

console.log("****3.****");
function swapValuesDudes(value1,value2){
   console.log("Values before Swap:",value1,value2);
   var temp=value1;
   value1=value2;
   value2=temp;
   console.log("Values after Swap:",value1,value2);
}
swapValuesDudes("Virat","Anushka");
swapValuesDudes(1000,2000);

console.log("****4.****");
function addThreeValues(v1,v2,v3) {
   var add=v1+v2+v3;
   return add; 
}
var addition=addThreeValues(10.23,600,40);
console.log("Addition is:",addition);

var addition=addThreeValues("Hello","Good","Morning");
console.log("Addition is:",addition);

