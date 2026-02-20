# Day 87 — Diving Deep into JavaScript Arrays

Today was all about understanding one of the most powerful and frequently used data structures in JavaScript — Arrays.

Working with arrays is essential for handling lists of data, rendering UI components, storing API responses, and performing real-world operations in any web application.

## 🎯 What I Learned / Practiced

- **Basic Array Operations:** Storing multiple values, index-based access, and length properties.
- **Adding & Removing Elements:** Mastery of `push`, `pop`, `shift`, `unshift`, and the versatile `splice`.
- **Reversing, Sorting, Joining:** Transformations to change order and convert arrays to strings.
- **Looping Through Arrays:** Iterating with `for...in` (indexes) and `for...of` (values).
- **Spread Operator (...):** Combining, cloning, and merging arrays effortlessly.
- **Removing Duplicates Using Set:** A high-performance trick to extract unique values from a list.

## 💡 Simple Example

```javascript
let nums = [1, 2, 2, 3, 4, 4];
let uniqueNums = [...new Set(nums)]; 
// Result: [1, 2, 3, 4]
```
This is extremely useful when dealing with user inputs, search results, and dataset cleanup.

## 🌱 Reflection / Key Takeaways

Today's concepts enhanced my understanding of efficient data manipulation, modern JavaScript features, and real-world use cases like filtering, merging, deduplication, and iteration.

---
**Day 87 of #FullStackDevelopment Journey**
