function palindrome(i) {
    var reverseString = i.split("").reverse().join("");
    if (i == reverseString)
        console.log("palindrome");
    else
        console.log("not palindrome");
}
palindrome("bed");