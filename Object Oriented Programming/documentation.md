# Object-Oriented Programming (OOP) Topics in FreeCodeCamp

## 1. **Introduction to OOP**

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code. It promotes reusability, modularity, and abstraction.

Key concepts:

- **Objects**: Instances of classes that encapsulate data and behavior.
- **Classes**: Blueprints for creating objects.
- **Encapsulation**: Wrapping data and methods into a single unit.
- **Abstraction**: Hiding implementation details and exposing only necessary features.
- **Inheritance**: Mechanism for a class to derive properties and methods from another class.
- **Polymorphism**: Ability for different classes to be treated as instances of the same class through shared methods or interfaces.

---

## 2. **Immediately Invoked Function Expressions (IIFE)**

IIFE is a JavaScript function that runs as soon as it is defined. It is often used to create a private scope and avoid polluting the global namespace.

### Syntax:

```javascript
(function () {
  // Code here is private
})();
```

### Key Points:

- Helps in module pattern.
- Keeps variables private.

---

## 3. **Prototypes**

In JavaScript, every object has a prototype. The prototype is an object from which other objects inherit properties and methods.

### Example:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

const dog = new Animal("Dog");
console.log(dog.speak()); // "Dog makes a sound."
```

### Key Points:

- Prototypes allow sharing methods and properties across instances.
- The `Object.create` method can be used to create objects with a specified prototype.

---

## 4. **Class Syntax**

ES6 introduced the `class` syntax to create objects and manage inheritance more intuitively.

### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // "Buddy barks."
```

### Key Points:

- `class` is syntactic sugar over prototypes.
- Supports inheritance with the `extends` keyword.
- Uses `super` to call parent class methods.

---

## 5. **Constructor Functions**

Before ES6, constructor functions were used to create objects.

### Example:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

const cat = new Animal("Kitty");
console.log(cat.speak()); // "Kitty makes a sound."
```

### Key Points:

- Constructor functions are functions invoked with the `new` keyword.
- They provide a way to initialize object properties.

---

## 6. **Encapsulation**

Encapsulation hides the internal state of an object and requires all interactions to be performed through methods.

### Example:

```javascript
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
  }

  get value() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.value); // 1
```

### Key Points:

- Private fields (`#field`) were introduced in ES2021.
- Encapsulation ensures better control over object data.

---

## 7. **Inheritance**

Inheritance allows a class to use properties and methods from another class.

### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Bird extends Animal {
  fly() {
    return `${this.name} is flying.`;
  }
}

const eagle = new Bird("Eagle");
console.log(eagle.speak()); // "Eagle makes a sound."
console.log(eagle.fly()); // "Eagle is flying."
```

### Key Points:

- Use `extends` for inheritance.
- Subclasses can override parent class methods.

---

## 8. **Polymorphism**

Polymorphism allows objects of different classes to be treated as instances of the same class through shared methods.

### Example:

```javascript
class Animal {
  speak() {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.speak()));
// Output:
// Woof!
// Meow!
```

### Key Points:

- Achieved through method overriding.
- Promotes flexibility and scalability.

---

## 9. **Factory Functions**

Factory functions return objects without the need for `new`.

### Example:

```javascript
function createAnimal(name) {
  return {
    name,
    speak() {
      return `${this.name} makes a sound.`;
    },
  };
}

const lion = createAnimal("Lion");
console.log(lion.speak()); // "Lion makes a sound."
```

### Key Points:

- Useful for dynamic object creation.
- Avoids complexities of `this` in constructor functions.

---

## 10. **Getter and Setter Methods**

Getters and setters provide controlled access to object properties.

### Example:

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const person = new Person("John");
console.log(person.name); // "John"
person.name = "Doe";
console.log(person.name); // "Doe"
```

### Key Points:

- `get` and `set` keywords define getters and setters.
- Helps in validation and encapsulation.

---

## 11. **Modules**

Modules allow code to be divided into separate files and reused.

### Example:

```javascript
// animal.js
export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// main.js
import { Animal } from "./animal.js";

const tiger = new Animal("Tiger");
console.log(tiger.speak()); // "Tiger makes a sound."
```

### Key Points:

- Use `export` and `import` for modular code.
- Improves maintainability and readability.

---

These topics form the foundation of Object-Oriented Programming in JavaScript and are crucial for mastering modern JavaScript development.
