# ES6 Promises

## Introduction

Promises are a type of object introduced in ES6 to manage asynchronous operations in JavaScript. Compared to traditional callback methods, Promises provide a more readable and manageable syntax.

Promises are like a promise in real life: they are either fulfilled (resolved) or rejected in the future.

## Promise States

A Promise can be in one of three states:

1. **Pending**: The initial state, the result is not yet determined.
2. **Fulfilled**: The operation was completed successfully, and a result is available.
3. **Rejected**: The operation failed, and a reason is available.

## Creating a Promise

To create a new Promise, use the `Promise` constructor:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true;

  if (success) {
    resolve("Operation completed successfully!");
  } else {
    reject("Operation failed.");
  }
});
```

### Explanation:

- `resolve`: Called when the Promise is fulfilled.
- `reject`: Called when the Promise is rejected.

## Working with Promises

Promises are managed using methods:

### `.then()`

Defines a function to execute when the Promise is fulfilled:

```javascript
myPromise.then((result) => {
  console.log(result); // "Operation completed successfully!"
});
```

### `.catch()`

Defines a function to execute when the Promise is rejected:

```javascript
myPromise.catch((error) => {
  console.error(error); // "Operation failed."
});
```

### `.finally()`

Defines a function to execute regardless of the Promise's outcome:

```javascript
myPromise.finally(() => {
  console.log("Operation finished.");
});
```

## Chaining Promises

Promises can be chained together for sequential execution:

```javascript
new Promise((resolve, reject) => {
  resolve(10);
})
  .then((value) => {
    console.log(value); // 10
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 20
    return value + 5;
  })
  .then((value) => {
    console.log(value); // 25
  })
  .catch((error) => {
    console.error(error);
  });
```

## Handling Multiple Promises

### `Promise.all()`

Runs multiple Promises in parallel and returns their results when all are completed:

```javascript
const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);
const promise3 = Promise.resolve(15);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [5, 10, 15]
  })
  .catch((error) => {
    console.error(error);
  });
```

### `Promise.race()`

Returns the result of the first completed Promise:

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Second"));

Promise.race([promise1, promise2]).then((result) => {
  console.log(result); // "Second"
});
```

## Conclusion

Promises help manage asynchronous operations in JavaScript in a clearer and more consistent way. They eliminate callback hell and make code more readable.
