# Day 88 — Mastering JavaScript Objects

Today's learning was focused on one of the most important foundations of JavaScript: Objects.

Objects are everywhere in JS — from APIs to DOM elements, browser events, user data, configurations, classes, and much more.

## 🎯 What I Learned / Practiced

- **Creating & Accessing Objects:** mastered key–value pairs and dot notation.
- **Extracting Keys, Values & Entries:** used `Object.keys()`, `Object.values()`, and `Object.entries()`.
- **Updating & Deleting Properties:** dynamic manipulation of data structures.
- **Understanding `this` Keyword:** how execution context works inside methods.
- **Functions & Object Context:** borrowed methods using `call()`, `apply()`, and `bind()`.
- **JavaScript Quirks (Type Coercion):** exploring logical traps like `false == []`.

## 💡 Simple Example

```javascript
const user = {
    name: "Sairam",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

function intro(city) {
    console.log(`${this.name} from ${city}`);
}

intro.call(user, "Hyderabad"); // Result: Sairam from Hyderabad
```

## 🌱 Reflection / Key Takeaways

Today helped me strengthen my understanding of how objects store and manage data and how to control execution context. These concepts form a strong base for upcoming topics like classes and prototypes.

---
**Day 88 of #FullStackDevelopment Journey**
