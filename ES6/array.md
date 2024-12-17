# JavaScript Array Methods: `.push`, `.pop`, `.shift`, and `.unshift`

JavaScript provides several methods for adding and removing elements from arrays. Below is a concise yet detailed explanation of the `.push`, `.pop`, `.shift`, and `.unshift` methods.

## **1. `.push()`**

The `.push()` method adds one or more elements to the **end** of an array and returns the new length of the array.

### **Syntax:**

```javascript
array.push(element1, element2, ..., elementN);
```

### **Example:**

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
```

---

## **2. `.pop()`**

The `.pop()` method removes the **last** element from an array and returns that element. If the array is empty, it returns `undefined`.

### **Syntax:**

```javascript
let removedElement = array.pop();
```

### **Example:**

```javascript
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "orange"
console.log(fruits); // ["apple", "banana"]
```

---

## **3. `.shift()`**

The `.shift()` method removes the **first** element from an array and returns that element. If the array is empty, it returns `undefined`.

### **Syntax:**

```javascript
let removedElement = array.shift();
```

### **Example:**

```javascript
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "orange"]
```

---

## **4. `.unshift()`**

The `.unshift()` method adds one or more elements to the **beginning** of an array and returns the new length of the array.

### **Syntax:**

```javascript
array.unshift(element1, element2, ..., elementN);
```

### **Example:**

```javascript
let fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "orange"]
```

---

## **Comparison Table**

| Method       | Action                             | Modifies Original Array | Returns          |
| ------------ | ---------------------------------- | ----------------------- | ---------------- |
| `.push()`    | Adds elements to the **end**       | Yes                     | New array length |
| `.pop()`     | Removes the **last** element       | Yes                     | Removed element  |
| `.shift()`   | Removes the **first** element      | Yes                     | Removed element  |
| `.unshift()` | Adds elements to the **beginning** | Yes                     | New array length |

---

These methods provide essential tools for working with arrays in JavaScript, allowing for flexible and efficient manipulation of elements.
