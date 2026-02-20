console.log("Day 89: Detailed Utility Mastery Hub");

// 1. String Methods Deep Dive
let rawText = "   JavaScript is amazing!   ";
console.log("Original:", `'${rawText}'`);
console.log("Trimmed:", `'${rawText.trim()}'`);
console.log("Character at 3:", rawText.trim().charAt(3));
console.log("Index of 'is':", rawText.indexOf("is"));
console.log("Ends with '!':", rawText.trim().endsWith("!"));
console.log("Repeat Logic:", "JS ".repeat(3));
console.log("Split into Array:", rawText.trim().split(" "));

// Palindrome & Reverse
function reverseString(str) {
    return str.split("").reverse().join("");
}
function checkPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === reverseString(clean);
}
console.log("Is 'Nitin' a Palindrome?", checkPalindrome("Nitin"));

// 2. Math Methods & Coercion
console.log("--- Math Operations ---");
console.log("Square Root of 16:", Math.sqrt(16));
console.log("2 to the power of 3:", Math.pow(2, 3));
console.log("Rounding 4.6:", Math.round(4.6));

// Coercion Quirk
console.log("'50' - 10 (Coercion):", "50" - 10);

// 3. Date Object Deep Dive
const date = new Date();
console.log("Full Date:", date.toDateString());
console.log("Unix Timestamp:", date.getTime());

// 4. OTP Generation Strategies
console.log("--- OTP Lab ---");
const fastOTP = () => Math.floor(100000 + Math.random() * 900000);
console.log("Your 6-Digit OTP:", fastOTP());

console.log("All Day 89 segments executed.");
