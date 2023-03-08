const arraySesonalFrruits=["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("______________________________________________");
console.log("Given array of fruits is:");
console.log(arraySesonalFrruits);
console.log("______________________________________________");

console.log(`-------Operations on Given array are as follows--------`);
//const arrayLength=arraySesonalFrruits.length;
console.log(`1. First and Last element of array is: ${arraySesonalFrruits[0]} & ${arraySesonalFrruits[arraySesonalFrruits.length-1]} `);
console.log("______________________________________________");
console.log("2. Add Papaya before Banana:");
arraySesonalFrruits.unshift("Papaya");
console.log(arraySesonalFrruits);
console.log("______________________________________________");

console.log("3. Remove Mango from the array");
arraySesonalFrruits.splice(4,1);
console.log(arraySesonalFrruits);
console.log("______________________________________________");

console.log("4. Add element Pineapple at last position");
arraySesonalFrruits.push("Pineapple");
console.log(arraySesonalFrruits);
console.log("______________________________________________");

console.log("5. Insert Dragon fruit before Water Melon");
arraySesonalFrruits.splice(4,0,"Dragon Fruit");
console.log(arraySesonalFrruits);
console.log("______________________________________________");

console.log("6. Replace Orange with Kiwi");
arraySesonalFrruits.splice(2,1,"Kiwi");
console.log(arraySesonalFrruits);
console.log("______________________________________________");

console.log("7. Element from Index 1 to 4");
//arraySesonalFrruits.slice(1,5);
console.log(arraySesonalFrruits.slice(1,5));

console.log("______________________________________________");
console.log("8. Select last 3 element using length property");
console.log(`${arraySesonalFrruits[arraySesonalFrruits.length-3]},
${arraySesonalFrruits[arraySesonalFrruits.length-2]},
${arraySesonalFrruits[arraySesonalFrruits.length-1]}`);
