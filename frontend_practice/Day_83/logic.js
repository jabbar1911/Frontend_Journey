console.log("Day 83: Browser Objects & Logic Lab");

// 1. Arithmetic Operators
console.log("Arithmetic Operations:");
let x = 10;
let y = 3;
console.log("Addition (10 + 3):", x + y);
console.log("Exponent (10 ** 3):", x ** y);
console.log("Modulus (10 % 3):", x % y);

// 2. Assignment Operators
console.log("Assignment Operations:");
let score = 50;
score += 10;
console.log("Updated score (50 += 10):", score);

// 3. Comparison Operators
console.log("Comparison Tests:");
console.log("Strict Equality (5 === '5'):", 5 === '5');
console.log("Inequality (10 != 5):", 10 != 5);

// 4. Logical Operators
console.log("Logical Conditionals:");
let hasPass = true;
let isAdult = true;
console.log("Can enter? (Pass AND Adult):", hasPass && isAdult);

// 5. Conditional Logic (Temperature Check)
function checkWeather(temp) {
    console.log("Analyzing Temperature:", temp + "°C");
    if (temp > 35) {
        console.log("Result: It's very hot!");
    } else if (temp >= 25 && temp <= 35) {
        console.log("Result: The weather is normal.");
    } else {
        console.log("Result: It's cold outside.");
    }
}

checkWeather(40);
checkWeather(28);
checkWeather(15);

// 6. BOM (Browser Object Model) Functions
function runAlert() {
    alert("Hello! This is a BOM Alert message.");
}

function runConfirm() {
    let result = confirm("Do you like JavaScript?");
    console.log("User Choice (Confirm):", result ? "Liked" : "Disliked");
}

function runPrompt() {
    let name = prompt("Please enter your name:");
    if (name) {
        console.log("User Input (Prompt): Welcome, " + name + "!");
    } else {
        console.log("User Input (Prompt): User skipped input.");
    }
}

console.log("Day 83: Logic analysis complete.");
