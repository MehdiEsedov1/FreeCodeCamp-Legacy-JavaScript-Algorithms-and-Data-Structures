# FreeCodeCamp: Functional Programming

## Functional Programming Principles

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state or mutable data.

### Core Concepts

1. **Pure Functions**:

   - Functions that return the same output for the same input and have no side effects.
   - Example:
     ```javascript
     function add(a, b) {
       return a + b;
     }
     ```

2. **Immutability**:

   - Data is never changed but rather copied and modified.
   - Example:
     ```javascript
     const arr = [1, 2, 3];
     const newArr = [...arr, 4]; // [1, 2, 3, 4]
     ```

3. **Higher-Order Functions**:

   - Functions that take other functions as arguments or return them as results.
   - Example:
     ```javascript
     function applyFunction(fn, value) {
       return fn(value);
     }
     ```

4. **First-Class Functions**:
   - Functions are treated as values that can be assigned to variables or passed as arguments.
   - Example:
     ```javascript
     const square = (x) => x * x;
     const multiply = (a, b) => a * b;
     ```

## Topics in FreeCodeCamp Functional Programming

### Avoid Mutations and Side Effects

- Functions should not alter global variables or cause unintended changes.
- Example:

  ```javascript
  let count = 0;

  function increment() {
    count++; // Not functional
  }
  ```

  Instead:

  ```javascript
  function increment(count) {
    return count + 1;
  }
  ```

### Use the `map` Method

- Used to transform each element in an array.
- Example:
  ```javascript
  const numbers = [1, 2, 3];
  const squares = numbers.map((num) => num * num); // [1, 4, 9]
  ```

### Implement `filter`

- Filters elements based on a condition.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter((num) => num % 2 === 0); // [2, 4]
  ```

### Combine Arrays with `concat`

- Combines multiple arrays without mutating them.
- Example:
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = arr1.concat(arr2); // [1, 2, 3, 4]
  ```

### Use `reduce`

- Reduces an array to a single value.
- Example:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
  ```

### Avoid Mutations with `slice` and `concat`

- `slice` creates a new array from a portion of an existing one.
- Example:
  ```javascript
  const arr = [1, 2, 3];
  const newArr = arr.slice(1); // [2, 3]
  ```

### Use `sort` Carefully

- `sort` mutates the original array; use it with caution.
- Example:
  ```javascript
  const arr = [3, 1, 2];
  const sorted = [...arr].sort((a, b) => a - b); // [1, 2, 3]
  ```

### Functional Programming Terminology

1. **Callback**:
   - A function passed as an argument to another function.
2. **Currying**:
   - Breaking down a function that takes multiple arguments into a series of functions that each take one argument.
   - Example:
     ```javascript
     const add = (a) => (b) => a + b;
     const addFive = add(5);
     console.log(addFive(3)); // 8
     ```
3. **Composition**:
   - Combining multiple functions to create a new function.
   - Example:
     ```javascript
     const add = (x) => x + 1;
     const multiply = (x) => x * 2;
     const composed = (x) => multiply(add(x));
     console.log(composed(5)); // 12
     ```

### Summary

Functional programming emphasizes predictable and testable code by using pure functions, avoiding side effects, and treating functions as first-class citizens. Mastering these concepts can lead to cleaner and more maintainable code.
