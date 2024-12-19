# Basic JavaScript: Working with Objects

In JavaScript, objects are versatile structures used to store key-value pairs. They are foundational to many programming tasks, allowing for organized data representation and manipulation. Below is an explanation of key concepts related to working with objects, as covered in the Legacy JavaScript Algorithms and Data Structures - Basic JavaScript section.

---

## 1. Creating Objects

Objects are defined using curly braces `{}`. Each property is a key-value pair, separated by commas:

```javascript
const myObject = {
  name: "John",
  age: 30,
  isStudent: false,
};
```

- Keys are strings or symbols (e.g., `"name"`).
- Values can be any data type (string, number, boolean, array, object, etc.).

---

## 2. Accessing Object Properties

There are two main ways to access properties in an object:

### Dot Notation

Use a period (`.`) followed by the property name:

```javascript
console.log(myObject.name); // Output: John
```

### Bracket Notation

Use square brackets (`[]`) with the property name as a string:

```javascript
console.log(myObject["age"]); // Output: 30
```

Bracket notation is especially useful when:

- The property name contains spaces or special characters.
- The property name is dynamic and stored in a variable:

```javascript
const key = "isStudent";
console.log(myObject[key]); // Output: false
```

---

## 3. Adding Properties to Objects

You can add new properties to an object using either dot or bracket notation:

```javascript
myObject.city = "New York";
myObject["country"] = "USA";

console.log(myObject);
// { name: "John", age: 30, isStudent: false, city: "New York", country: "USA" }
```

---

## 4. Modifying Object Properties

To update the value of an existing property, simply assign a new value:

```javascript
myObject.age = 31;
myObject["isStudent"] = true;

console.log(myObject);
// { name: "John", age: 31, isStudent: true, city: "New York", country: "USA" }
```

---

## 5. Deleting Properties

To remove a property from an object, use the `delete` operator:

```javascript
delete myObject.city;
console.log(myObject);
// { name: "John", age: 31, isStudent: true, country: "USA" }
```

---

## 6. Checking for Property Existence

You can check if an object has a specific property using the `hasOwnProperty` method or the `in` operator:

### Using `hasOwnProperty`

```javascript
console.log(myObject.hasOwnProperty("name")); // Output: true
console.log(myObject.hasOwnProperty("city")); // Output: false
```

### Using `in` Operator

```javascript
console.log("name" in myObject); // Output: true
console.log("city" in myObject); // Output: false
```

---

## 7. Iterating Over Object Properties

To loop through all properties in an object, you can use a `for...in` loop:

```javascript
for (let key in myObject) {
  console.log(key + ": " + myObject[key]);
}
// Output:
// name: John
// age: 31
// isStudent: true
// country: USA
```

---

## 8. Summary

Objects in JavaScript are powerful tools for organizing data. By understanding how to:

- Access properties using dot or bracket notation,
- Add, modify, or delete properties,
- Check for property existence,
- Iterate over properties,
  you can effectively work with objects in your JavaScript code.

Mastering these techniques is a fundamental step toward becoming proficient in JavaScript programming.
