console.log("Day 88: JavaScript Object Mastery");

// 1. Creating and Accessing Objects
const user = {
    name: "Sairam Uppugundla",
    age: 21,
    role: "Full Stack Developer",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("User Object:", user.name, "| Age:", user.age);
user.greet();

// 2. Extracting Keys, Values & Entries
console.log("Object Keys:", Object.keys(user));
console.log("Object Values:", Object.values(user));

// 3. Updating & Deleting
user.location = "Hyderabad";
delete user.age;
console.log("Modified Object (Added Location, Deleted Age):", user);

// 4. call, apply, and bind
const externalGreet = function (city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
};

console.log("Testing Call:");
externalGreet.call(user, "Hyderabad", "India");

console.log("Testing Apply:");
externalGreet.apply(user, ["New York", "USA"]);

console.log("Testing Bind:");
const boundGreet = externalGreet.bind(user, "London", "UK");
boundGreet();

// 5. JavaScript Quirks (Type Coercion)
console.log("Loose Equality Labs:");
console.log("false == [] (Coercion):", false == []);
console.log("false == '' (Coercion):", false == '');
console.log("false == ![] (Coercion):", false == ![]);

console.log("Object mastery module complete.");
