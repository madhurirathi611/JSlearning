console.log("Given Array is:");
const arrayNumbers=[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log("-------------------------------------------------");
console.log(`1. Total numbers of elements in array: ${arrayNumbers.length}`);
console.log("-------------------------------------------------");
console.log(`2. First element in array: ${arrayNumbers[0]}`);
console.log(`Last element in array: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log("-------------------------------------------------");
console.log(`3. Third last element in array: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log("-------------------------------------------------");
console.log(`4. Find the all even numbers in array:`);
const evennum=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
      //console.log(element);
      evennum.push(element);
    }    
}
console.log(evennum);
console.log("-------------------------------------------------");
console.log(`5. Find the all odd numbers in array:`);
const oddnum=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        oddnum.push(element);
    }  
}
console.log(oddnum);
console.log("-------------------------------------------------");
console.log(`6. Find the all even positioned elements in array and its sum:`);
const evenpos=[];
let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
        evenpos.push(element);
        sum=sum+element;
    }  
}
console.log(evenpos);
console.log(`Sum of all even index elements is: ${sum}`);

console.log("-------------------------------------------------");
console.log(`.7. Find the all odd positioned elements in array and its sum:`);
const oddpos=[];
let sum1=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2!=0) {
        oddpos.push(element);
        sum1=sum1+element;
    }  
}
console.log(oddpos);
console.log(`Sum of all odd index elements is: ${sum1}`);

console.log("-------------------------------------------------");
console.log(`8. Find the sum of all elements in array:`);
console.log(arrayNumbers);
let add=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    add=add+element; 
    //console.log(`Sum of all elements is: ${add}`);  
}
console.log(`Sum of all elements is: ${add}`);

console.log("-------------------------------------------------");
console.log(`9. Find the numbers which are multiple of 5:`);
const multipleOf5=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
       multipleOf5.push(element);  
    }
}
console.log(multipleOf5);

console.log("-------------------------------------------------");
console.log(`10. Is 115 available in array?:`);
var isAvail=arrayNumbers.includes(115);
console.log(isAvail);

console.log("-------------------------------------------------");
console.log(`11. Is 23 available in array?:`);
var isAvail=arrayNumbers.includes(23);
console.log(isAvail);

console.log("-------------------------------------------------");
console.log(`12. Insert numbers 55,66 before index 3:`);
arrayNumbers.splice(3,0,55,56);
console.log(arrayNumbers);

console.log("-------------------------------------------------");
console.log(`13. Delete 3 elements starting from index 4:`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);