console.log("Day 87: JavaScript Array Mastery");

// 1. Basic Operations
let fruits = ["Apple", "Banana", "Mango"];
console.log("Initial Array:", fruits);
console.log("Length:", fruits.length);
console.log("Index of Banana:", fruits.indexOf("Banana"));

// 2. Adding & Removing Elements
fruits.push("Orange"); // Add end
fruits.unshift("Grape"); // Add start
console.log("After Additions:", fruits);

fruits.pop(); // Remove end
fruits.shift(); // Remove start
console.log("After Removals:", fruits);

fruits.splice(1, 1, "Watermelon"); // Replace at index 1
console.log("After Splice (Replacement):", fruits);

// 3. Reversing, Sorting, Joining
let cities = ["Hyderabad", "New York", "London", "Tokyo"];
console.log("Cities:", cities.sort().join(" | "));
console.log("Reversed:", cities.reverse());

// 4. Looping Patterns
console.log("Iterating with for...of (Values):");
for (let city of cities) {
    console.log("->", city);
}

// 5. Spread Operator (...) & De-duplication
let numbers1 = [1, 2, 3];
let numbers2 = [3, 4, 5];
let combined = [...numbers1, ...numbers2];
console.log("Combined with Spread:", combined);

let unique = [...new Set(combined)];
console.log("Unique List (Set):", unique);

console.log("Array mastery module complete.");
