function stringHandsOn(){
    var string="  Hey you are doing good, keep it up  ";
    console.log("1. Given String:",string);

    console.log("2. Length of  the String:", string.length);

    var str=string.trim();
    console.log("3. String after removing the extra spaces:",str);
    console.log("   Length of the String after removing spaces:",str.length);

    var count=string.length-str.length;
    console.log("4. Total number of extra spaces removed:",count);

    console.log("5. First and last character of string:", str.charAt(0),"and", str.charAt(str.length-1));

    console.log("6. Total words in the string:",str.split(" ").length);

    console.log("7. Index of word 'good':",string.indexOf("good"));

    console.log("8. Substring strating from index 22:",str.slice(22));
    //console.log("8. Substring strating from index 22:",str.substring(22));

    console.log("9. Is string ends with word 'up'?:",str.includes("up"));

    console.log("10. Is string starts with word 'Hey'?:",str.includes("Hey"));







}
stringHandsOn();