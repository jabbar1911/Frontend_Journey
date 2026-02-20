# Day 81 - Deep Dive Into JavaScript Variables: var, let & const

## Objective
To understand how variables behave behind the scenes in JavaScript, exploring the differences between `var`, `let`, and `const` regarding redeclaration, reassignment, hoisting, and scope.

## Files Included
```
  Day_81/
  ├── index.html # Code examples for var, let, and const
  └── README.md  # Project documentation
```

## 🎯 What I Learned / Practiced

- **🔹 How Browser Treats Variables** – `var` is the classic way, while `let` and `const` (introduced in ES6) fix legacy problems.
- **🔹 Redeclaration & Reassignment** – `var` allows multiple declarations (potential for bugs), `let` allows reassignment but not redeclaration, and `const` is fixed.
- **🔹 Hoisting & TDZ** – `var` is accessible early as `undefined`, while `let` and `const` are in the Temporal Dead Zone (TDZ) until initialized.
- **🔹 Scoping (Block vs Function)** – `var` is function-scoped, while `let` and `const` follow block scope `{ }`, preventing accidental overwrites.

## 🌱 Reflection / Key Takeaways

Today was all about strengthening my core JavaScript understanding. Knowing how `var`, `let`, and `const` behave helps avoid bugs and improves code structure. These fundamentals are crucial for building clean, modern applications as I move toward functions and ES6 concepts.

---
*Part of the Frontend Journey Learning Series.*
