# Rest and Spread Operators in JavaScript

## **1. Rest Operator (`...`)**

- The rest operator collects multiple elements and "packs" them into a single array or object.
- It is often used in function parameters to accept an indefinite number of arguments.

### Example with Functions:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

### Example with Arrays:

```javascript
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // Output: 10
console.log(rest); // Output: [20, 30, 40]
```

### Example with Objects:

```javascript
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a); // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }
```

## **2. Spread Operator (`...`)**

- The spread operator takes elements from an array or object and "spreads" them into another array, object, or function call.
- It is useful for copying and merging data structures.

### Example with Arrays:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]

const copy = [...arr1];
console.log(copy); // Output: [1, 2, 3]
```

### Example with Objects:

```javascript
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // Output: { x: 1, y: 2, z: 3 }

const updated = { ...obj1, y: 42 };
console.log(updated); // Output: { x: 1, y: 42 }
```

### Example with Function Calls:

```javascript
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // Output: 6
```

## **Key Differences Between Rest and Spread**

| Feature     | Rest Operator                      | Spread Operator                       |
| ----------- | ---------------------------------- | ------------------------------------- |
| **Purpose** | Collects elements                  | Expands elements                      |
| **Usage**   | Function parameters, destructuring | Function calls, array/object literals |
| **Output**  | Array or object                    | Individual elements                   |

## **Summary**

- Use the rest operator to collect elements into a single structure.
- Use the spread operator to expand or copy elements into a new structure.
- These operators are powerful tools for working with arrays, objects, and functions efficiently.
