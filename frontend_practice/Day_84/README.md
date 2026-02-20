# Day 84 — Switch Case, Loops & Pattern Printing in JavaScript

## 🎯 What I Learned / Practiced

- **🔹 Switch Case Statements** — Used `switch` for multi-condition logic (like a Calculator), learning the importance of the `break` statement to prevent fall-through.
- **🔹 While & Do-While Loops** — Practiced the difference in execution timing; `do-while` ensures at least one run regardless of the condition.
- **🔹 For Loops & Nested Loops** — Mastered iteration through `for` loops and used nested loops to create multi-dimensional structures.
- **🔹 Pattern Printing** — Built star pyramid patterns by using an outer loop for rows and an inner loop for star counts.

## 💡 Simple Example

I implemented a nested loop to print a star pyramid pattern:
```javascript
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
```

## 🌱 Reflection / Key Takeaways

Today's session was fundamental for logical thinking. Pattern printing isn't just about graphics—it's about understanding exactly how code iterates and branches. These concepts are the engine of all complex programming logic I'll build next.

---
*Part of the Frontend Journey Learning Series.*
