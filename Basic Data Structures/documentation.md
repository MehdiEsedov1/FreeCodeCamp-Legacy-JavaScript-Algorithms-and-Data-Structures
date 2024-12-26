## Understanding `slice()` and `splice()` in JavaScript

### `slice()`

The `slice()` method is used to extract a portion of an array without modifying the original array. It returns a shallow copy of the selected portion of the array.

#### Syntax

```javascript
array.slice(startIndex, endIndex);
```

- **`startIndex`** (optional): The index at which to start the extraction. If negative, it indicates an offset from the end of the array.
- **`endIndex`** (optional): The index before which to end the extraction. If omitted, the method extracts through the end of the array. If negative, it indicates an offset from the end of the array.

#### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// Extract a portion
const result = numbers.slice(1, 4);
console.log(result); // Output: [2, 3, 4]

// Original array remains unchanged
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

---

### `splice()`

The `splice()` method is used to modify an array by adding, removing, or replacing elements. Unlike `slice()`, it changes the original array.

#### Syntax

```javascript
array.splice(startIndex, deleteCount, item1, item2, ...)
```

- **`startIndex`**: The index at which to start changing the array.
- **`deleteCount`**: The number of elements to remove from the array. If 0, no elements are removed.
- **`item1, item2, ...`** (optional): Elements to add to the array starting from `startIndex`.

#### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// Remove elements
const removed = numbers.splice(1, 2);
console.log(removed); // Output: [2, 3]
console.log(numbers); // Output: [1, 4, 5]

// Add elements
numbers.splice(1, 0, 6, 7);
console.log(numbers); // Output: [1, 6, 7, 4, 5]

// Replace elements
numbers.splice(2, 2, 8, 9);
console.log(numbers); // Output: [1, 6, 8, 9, 5]
```

---

### Key Differences

| Feature            | `slice()`                               | `splice()`                          |
| ------------------ | --------------------------------------- | ----------------------------------- |
| **Purpose**        | Extracts a portion of an array          | Adds, removes, or replaces elements |
| **Original Array** | Unchanged                               | Modified                            |
| **Return Value**   | A new array with the extracted elements | An array of removed elements        |

#### Comparison Example

```javascript
const arr = [10, 20, 30, 40, 50];

// Using slice()
const sliced = arr.slice(1, 3);
console.log(sliced); // Output: [20, 30]
console.log(arr); // Output: [10, 20, 30, 40, 50] (unchanged)

// Using splice()
const spliced = arr.splice(1, 2, 60, 70);
console.log(spliced); // Output: [20, 30]
console.log(arr); // Output: [10, 60, 70, 40, 50] (modified)
```

---

### Additional JavaScript Methods and Constructs

#### `indexOf()`

The `indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present.

#### Syntax

```javascript
array.indexOf(searchElement, fromIndex);
```

- **`searchElement`**: The element to locate.
- **`fromIndex`** (optional): The index to start the search. Defaults to `0`.

#### Example

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("orange")); // Output: -1
```

---

#### `for...in`

The `for...in` statement iterates over the enumerable properties of an object (including inherited properties).

#### Syntax

```javascript
for (variable in object) {
  // code to execute
}
```

#### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// Output:
// a: 1
// b: 2
// c: 3
```

---

#### `hasOwnProperty()`

The `hasOwnProperty()` method checks whether an object has a specific property as its own (not inherited).

#### Syntax

```javascript
object.hasOwnProperty(property);
```

#### Example

```javascript
const obj = { a: 1 };
console.log(obj.hasOwnProperty("a")); // Output: true
console.log(obj.hasOwnProperty("b")); // Output: false
```

---

#### `in`

The `in` operator checks whether a property exists in an object (including inherited properties).

#### Syntax

```javascript
property in object;
```

#### Example

```javascript
const obj = { a: 1 };
console.log("a" in obj); // Output: true
console.log("b" in obj); // Output: false
```

---

#### `Object.keys()`

The `Object.keys()` method returns an array of a given object's own enumerable property names.

#### Syntax

```javascript
Object.keys(object);
```

#### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']
```
