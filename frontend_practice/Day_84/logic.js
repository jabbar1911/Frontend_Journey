console.log("Day 84: Control Flow & Pattern Matrix");

// 1. Switch Case Calculator
function simpleCalc(num1, num2, operator) {
    console.log(`Calculating: ${num1} ${operator} ${num2}`);
    let result;
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "/": result = num1 / num2; break;
        default: result = "Unknown";
    }
    console.log("Result:", result);
}
simpleCalc(10, 5, "+");

// 2. While vs Do-While
let count = 5;
do {
    console.log("Do-While at least once (Value: " + count + ")");
    count++;
} while (count < 5);

// 3. For Loop & Pattern
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) stars += "* ";
        console.log(stars);
    }
    for (let i = rows - 1; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= i; j++) stars += "* ";
        console.log(stars);
    }
}
printPattern(5);

console.log("Control Flow test complete.");
