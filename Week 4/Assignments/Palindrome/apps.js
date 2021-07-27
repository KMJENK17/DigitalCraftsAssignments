function palindrome(i) {
    var word = i.split("").reverse().join("");
    if (i == word)
        console.log("palindrome");
    else
        console.log("not palindrome");
}
palindrome("racecar");