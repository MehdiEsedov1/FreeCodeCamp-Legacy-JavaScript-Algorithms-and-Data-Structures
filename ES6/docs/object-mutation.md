# Object Mutation and `Object.freeze` in JavaScript

## **1. Object Mutation**

- In JavaScript, objects are **mutable**, meaning their properties can be changed even after the object is created.
- You can add, modify, or delete properties from an object.

### Example:

```javascript
const obj = { name: "Alice", age: 25 };
obj.age = 26; // Modifies an existing property
obj.city = "New York"; // Adds a new property
console.log(obj); // Output: { name: "Alice", age: 26, city: "New York" }

delete obj.name; // Deletes a property
console.log(obj); // Output: { age: 26, city: "New York" }
```

## **2. `Object.freeze`**

- The `Object.freeze` method prevents an object from being modified.
- Once an object is frozen:
  - You cannot add, remove, or modify its properties.
  - The object becomes immutable at the top level (nested objects can still be mutated unless frozen separately).
- Useful for creating constants or ensuring certain data does not change during runtime.

### Example:

```javascript
const obj = { name: "Alice", age: 25 };
Object.freeze(obj);

obj.age = 30; // No effect, property cannot be modified
obj.city = "New York"; // No effect, property cannot be added
console.log(obj); // Output: { name: "Alice", age: 25 }

delete obj.name; // No effect, property cannot be deleted
console.log(obj); // Output: { name: "Alice", age: 25 }
```

### Important Notes:

- `Object.freeze` only applies to the top-level properties of the object. If the object contains nested objects, those can still be mutated unless they are also frozen.

#### Example with Nested Objects:

```javascript
const obj = {
  name: "Alice",
  details: { age: 25, city: "New York" },
};
Object.freeze(obj);

obj.details.age = 30; // This works because `details` is not frozen
console.log(obj.details.age); // Output: 30

// To make the entire object immutable, freeze the nested objects separately
Object.freeze(obj.details);
obj.details.city = "Los Angeles"; // No effect now
console.log(obj.details.city); // Output: "New York"
```

## **Summary**

- Objects in JavaScript are mutable by default.
- Use `Object.freeze` to prevent unwanted modifications to an object.
- For deeply nested immutability, each nested object must also be frozen individually.

Understanding object mutation and immutability can help you write more predictable and bug-free code, especially in large applications or when dealing with shared state.
