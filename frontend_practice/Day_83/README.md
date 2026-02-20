# Day 83 — Exploring BOM, Operators & Conditional Logic in JavaScript

## 🎯 What I Learned / Practiced

- **🔹 Browser Object Model (BOM)** — Learned how JavaScript communicates directly with the browser using methods like `alert()` for popups, `confirm()` for user decisions, and `prompt()` to collect input.
- **🔹 Arithmetic Operators** — Practiced basic and advanced calculations including Exponentiation (`**`) and Modulus (`%`).
- **🔹 Assignment & Comparison** — Mastered updating values efficiently and comparing them strictly (`===`) vs loosely (`==`).
- **🔹 Logical Operators** — Used `&&` (AND), `||` (OR), and `!` (NOT) to combine complex conditions.
- **🔹 Conditional Statements** — Built an `if–else` logic system to classify weather temperatures (Very Hot, Normal, Cold).

## 💡 Simple Example

I implemented a temperature classifier:
```javascript
if (temp > 35) {
    console.log("Very hot");
} else if (temp >= 25 && temp <= 35) {
    console.log("Normal weather");
} else {
    console.log("Cold");
}
```

## 🌱 Reflection / Key Takeaways

Today's session provided a solid grasp of program flow and browser interaction. Understanding how to make decisions in code through logical operators and conditional statements is a major step toward building interactive web applications.

---
*Part of the Frontend Journey Learning Series.*
