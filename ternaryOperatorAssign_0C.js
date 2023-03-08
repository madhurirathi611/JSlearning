console.log("-------TCS interview eligibility result--------");
function companyTest(gradScore,hscScore,sscScore,candidateName)
{
var result=gradScore>=70 || hscScore>=80 || sscScore>90 ?
`Congrates ${candidateName} you are eligible for TCS interview.`
:`Sorry ${candidateName},Unfortunately you are not eligible for interview.`;
console.log(result);
}
companyTest(80,86,90,"Alice");
companyTest(70,65,55,"Jenny");
companyTest(60,79,88,"Mick");