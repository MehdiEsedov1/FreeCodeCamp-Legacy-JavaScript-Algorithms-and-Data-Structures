# Regular Expressions in JavaScript

Regular Expressions (regex) are powerful tools for pattern matching and text manipulation. In this guide, we will cover topics from FreeCodeCamp's **Regular Expressions** section, focusing on lessons 1 through 17.

## 1. **Using the `test` Method**

The `test` method is used to test whether a regex matches a string.

```javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(myRegex.test(myString)); // true
```

- **Regex:** `/Hello/` matches the exact string "Hello".
- **Output:** `true` because "Hello" is in `myString`.

## 2. **Match Literal Strings**

Match exact sequences of characters using literal strings.

```javascript
let waldoIsHiding = "Somewhere Waldo is hiding!";
let waldoRegex = /Waldo/;
console.log(waldoRegex.test(waldoIsHiding)); // true
```

## 3. **Match a Literal String with Different Possibilities**

Use the pipe (`|`) operator to specify multiple patterns.

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString)); // true
```

## 4. **Ignore Case While Matching**

Use the `i` flag to make regex case-insensitive.

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString)); // true
```

## 5. **Extract Matches**

Use the `match` method to extract matched substrings.

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex)); // ["coding"]
```

## 6. **Find More Than the First Match**

Use the `g` flag to find all matches in a string.

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
console.log(twinkleStar.match(starRegex)); // ["Twinkle", "twinkle"]
```

## 7. **Match Anything with Wildcard Period**

The dot (`.`) matches any single character (except newline).

```javascript
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
console.log(unRegex.test(exampleStr)); // true
```

## 8. **Match Single Character with Multiple Possibilities**

Use character sets (`[]`) to define a group of characters.

```javascript
let bgRegex = /b[aiu]g/; // Matches "big", "bag", or "bug".
```

## 9. **Match Letters of the Alphabet**

Use ranges in character sets to match sequences of characters.

```javascript
let alphabetRegex = /[a-z]/;
console.log(alphabetRegex.test("abc")); // true
```

## 10. **Match Numbers and Letters**

Combine ranges to match numbers and letters.

```javascript
let alphanumericRegex = /[a-z0-9]/i;
```

## 11. **Match Characters Not Specified**

Use the caret (`^`) inside character sets to negate.

```javascript
let notVowelsRegex = /[^aeiou]/gi;
```

## 12. **Match Characters that Occur One or More Times**

Use the `+` quantifier to match one or more occurrences.

```javascript
let multipleARegex = /a+/;
```

## 13. **Match Characters that Occur Zero or More Times**

Use the `*` quantifier to match zero or more occurrences.

```javascript
let zeroOrMoreARegex = /a*/;
```

## 14. **Find Characters with Lazy Matching**

Lazy matching stops as soon as a match is found.

```javascript
let text = "titanic";
let lazyRegex = /t[a-z]*?i/;
console.log(text.match(lazyRegex)); // ["ti"]
```

## 15. **Match Beginning String Patterns**

The caret (`^`) outside of brackets matches the beginning of a string.

```javascript
let startRegex = /^Hello/;
```

## 16. **Match Ending String Patterns**

The dollar sign (`$`) matches the end of a string.

```javascript
let endRegex = /World!$/;
```

## 17. **Match All Letters and Numbers**

Use `\w` to match letters, digits, and underscores.

```javascript
let shorthandRegex = /\w+/;
```

---

Each of these regex concepts builds upon the previous ones, enabling more complex and flexible pattern matching. Practice each with examples to strengthen your understanding!
