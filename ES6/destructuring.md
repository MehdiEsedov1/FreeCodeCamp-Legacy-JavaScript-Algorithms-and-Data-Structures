# Destructuring in JavaScript

Destructuring is a syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies code and improves readability.

## **1. Array Destructuring**

- Array destructuring allows you to extract values from an array and assign them to variables.

### Example:

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

### Skipping Elements:

```javascript
const numbers = [1, 2, 3, 4];
const [first, , third] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
```

### Default Values:

```javascript
const numbers = [1];
const [a, b = 2] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
```

## **2. Object Destructuring**

- Object destructuring allows you to extract properties from an object and assign them to variables.

### Example:

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25
```

### Renaming Variables:

```javascript
const person = { name: "Alice", age: 25 };
const { name: fullName, age: years } = person;

console.log(fullName); // Output: Alice
console.log(years); // Output: 25
```

### Default Values:

```javascript
const person = { name: "Alice" };
const { name, age = 30 } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

## **3. Nested Destructuring**

- Destructure nested arrays or objects.

### Example with Arrays:

```javascript
const numbers = [1, [2, 3]];
const [a, [b, c]] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

### Example with Objects:

```javascript
const person = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001,
  },
};

const {
  name,
  address: { city, zip },
} = person;

console.log(name); // Output: Alice
console.log(city); // Output: New York
console.log(zip); // Output: 10001
```

## **4. Combining with Rest Operator**

- Use the rest operator to collect remaining elements or properties.

### Example with Arrays:

```javascript
const numbers = [1, 2, 3, 4];
const [a, ...rest] = numbers;

console.log(a); // Output: 1
console.log(rest); // Output: [2, 3, 4]
```

### Example with Objects:

```javascript
const person = { name: "Alice", age: 25, city: "New York" };
const { name, ...rest } = person;

console.log(name); // Output: Alice
console.log(rest); // Output: { age: 25, city: "New York" }
```

## **5. Destructuring in Function Parameters**

- Destructure arrays or objects directly in function parameters.

### Example with Arrays:

```javascript
function sum([a, b]) {
  return a + b;
}

console.log(sum([1, 2])); // Output: 3
```

### Example with Objects:

```javascript
function greet({ name, age }) {
  return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet({ name: "Alice", age: 25 })); // Output: Hello, Alice. You are 25 years old.
```

## **Summary**

- Destructuring simplifies extracting values from arrays and objects.
- You can rename variables, assign default values, and handle nested structures efficiently.
- It is a powerful feature for writing clean and concise JavaScript code.
