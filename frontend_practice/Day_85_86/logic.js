console.log("Day 85 & 86: Mastering Functions & Closures");

// Part 1: Foundation (Day 85)
function greet(name) {
    console.log("Hello, " + name + "! (Hoisted)");
}
greet("Sairam");

const add = (a, b) => a + b;
console.log("ES6 Arrow Result:", add(10, 20));

(function () {
    console.log("IIFE: Private scope initialized.");
})();

// Part 2: Advanced Logic (Day 86)
function setupProfile(name = "Guest", ...roles) {
    console.log(`User: ${name} | Roles: ${roles.join(", ")}`);
}
setupProfile("Sairam", "Admin", "Developer");

function createCounter(name) {
    let count = 0;
    return function () {
        count++;
        console.log(`[${name}] Value: ${count}`);
    };
}
const counter = createCounter("Functions Master");
counter();
counter();

console.log("Mastery evaluation complete.");
