# JavaScript Data Types and Structures

JavaScript is a dynamic language, meaning its variable types are determined at runtime rather than at compile time.

---

## Data Types in JavaScript

### **Primitive Data Types**

1. `number`
2. `string`
3. `bigint`
4. `symbol`
5. `null`
6. `undefined`
7. `boolean`

### **Reference Data Types**

1. `object`

---

## Data Structures in JavaScript

1. `Array`
2. `Map`
3. `WeakMap`
4. `Set`
5. `WeakSet`
6. `Function`
7. `Date`
8. `Object`

---

## JavaScript Data Types and Structures with `typeof`

In JavaScript, the `typeof` operator is used to determine the type of a value or structure. Below is a detailed breakdown:

---

### **Primitive Data Types**

Primitive types represent single, immutable values.

#### **1. undefined**

```javascript
let a;
console.log(typeof a); // "undefined"
```

- `undefined` is the default type of a variable that has been declared but not assigned a value.

#### **2. null**

```javascript
let b = null;
console.log(typeof b); // "object" (historical bug)
```

- `null` represents the intentional absence of any object value. The `typeof` result is a known quirk.

#### **3. boolean**

```javascript
let c = true;
console.log(typeof c); // "boolean"
```

- Represents logical values: `true` or `false`.

#### **4. number**

```javascript
let d = 42;
console.log(typeof d); // "number"
```

- Includes both integers and floating-point numbers.

#### **5. bigint**

```javascript
let e = 12345678901234567890n;
console.log(typeof e); // "bigint"
```

- Used for integers larger than `2^53 - 1`.

#### **6. string**

```javascript
let f = "Hello, World!";
console.log(typeof f); // "string"
```

- Represents a sequence of characters.

#### **7. symbol**

```javascript
let g = Symbol("id");
console.log(typeof g); // "symbol"
```

- Used to create unique identifiers.

---

### **Reference Data Type**

Reference types are mutable and stored by reference.

#### **1. object**

```javascript
let h = { name: "Alice", age: 25 };
console.log(typeof h); // "object"
```

- Used to store key-value pairs.

---

### **Data Structures**

JavaScript data structures are built upon the `object` data type.

#### **1. Array**

```javascript
let arr = [1, 2, 3];
console.log(typeof arr); // "object"
```

- Arrays store ordered lists of values.

#### **2. Function**

```javascript
let func = function () {
  return "Hello";
};
console.log(typeof func); // "function"
```

- Functions are callable objects with the `typeof` result as "function".

#### **3. Map**

```javascript
let map = new Map();
console.log(typeof map); // "object"
```

- Maps store key-value pairs with keys of any type.

#### **4. Set**

```javascript
let set = new Set([1, 2, 3]);
console.log(typeof set); // "object"
```

- Sets store unique values of any type.

#### **5. WeakMap**

```javascript
let weakMap = new WeakMap();
console.log(typeof weakMap); // "object"
```

- WeakMaps are Maps with keys that are weakly referenced.

#### **6. WeakSet**

```javascript
let weakSet = new WeakSet();
console.log(typeof weakSet); // "object"
```

- WeakSets store weakly referenced objects.

#### **7. Date**

```javascript
let date = new Date();
console.log(typeof date); // "object"
```

- Represents points in time.

---

## Summary Table

| **Type/Structure** | **Example**                    | **typeof Result** |
| ------------------ | ------------------------------ | ----------------- |
| `undefined`        | `let a;`                       | `"undefined"`     |
| `null`             | `let b = null;`                | `"object"`        |
| `boolean`          | `let c = true;`                | `"boolean"`       |
| `number`           | `let d = 42;`                  | `"number"`        |
| `bigint`           | `let e = 123n;`                | `"bigint"`        |
| `string`           | `let f = "text";`              | `"string"`        |
| `symbol`           | `let g = Symbol("id");`        | `"symbol"`        |
| `object`           | `let h = { key: "value" };`    | `"object"`        |
| `Array`            | `let arr = [1, 2];`            | `"object"`        |
| `Function`         | `let func = () => {};`         | `"function"`      |
| `Map`              | `let map = new Map();`         | `"object"`        |
| `Set`              | `let set = new Set();`         | `"object"`        |
| `WeakMap`          | `let weakMap = new WeakMap();` | `"object"`        |
| `WeakSet`          | `let weakSet = new WeakSet();` | `"object"`        |
| `Date`             | `let date = new Date();`       | `"object"`        |

---

## Key Observations

1. The `typeof` operator for most data structures (e.g., `Array`, `Map`, `Set`) returns `"object"`, as they derive from the `object` type.
2. Functions are the exception, returning `"function"` instead of `"object"`.
3. `null` is a special case where `typeof` returns `"object"`, which is a historical quirk.
