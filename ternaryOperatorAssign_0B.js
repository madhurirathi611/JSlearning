console.log("-------------Step 1--------------");
function maleMarriageEligibility(gender, age, boyName){
    var msg=(gender=="Male" && age>=21 )? `Hey ${boyName} you are eligible for Marriage`:`Not eligible for Marriage`;
    return msg;
}
var result=maleMarriageEligibility("Male",25,"Bill Gates");
console.log("Message for Bill Gates:",result);
var result=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log("Message for Stew Jobs:",result);

console.log("-------------Step 2-------------");
function femaleMarriageEligibility(gender, age, girlName){
    var msg=(gender=="Female" && age>=18 )? `Hey ${girlName} you are eligible for Marriage`:`Not eligible for Marriage`;
    return msg;
}
var result=femaleMarriageEligibility("Female",16,"Jenifer");
console.log("Message for Jenifer:",result);
var result=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log("Message for Malinda Gates:",result);
