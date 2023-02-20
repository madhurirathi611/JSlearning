//function with no agrument and no return value
function showFullName(){
    console.log("My full name is Madhuri Rathi");
}
showFullName(); //function call or invoke

//function with agrument and no return value
function showAge(age){
    console.log("My age is:",age);
}
showAge(31); //function call or invoke

//function with no agrument and return value
function myCity(){
    var city="Pune";
    return city;
}
var cityName= myCity();
console.log(cityName); //function call or invoke

//function with agrument and return value
function addition(n1, n2, n3){
    var add=n1+n2+n3;
    return add;
}
var sum=addition(10,20,30);
console.log(sum);




