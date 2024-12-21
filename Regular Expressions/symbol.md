# Regular Expressions in Legacy JavaScript Algorithms and Data Structures

## What are Regular Expressions?

Regular Expressions (regex) are patterns used to match character combinations in strings. In JavaScript, they are implemented using the `RegExp` object and the `String` methods that support regex (e.g., `match`, `replace`, `search`, and `split`).

---

## Syntax of Regular Expressions

### Creating Regex

1. **Literal Notation:**
   ```javascript
   const regex = /pattern/flags;
   ```
2. **RegExp Constructor:**
   ```javascript
   const regex = new RegExp("pattern", "flags");
   ```

### Flags

Flags modify the behavior of regex. Common flags are:

- `g` - Global search (find all matches).
- `i` - Case-insensitive search.
- `m` - Multi-line search.
- `s` - Allows `.` to match newline characters.
- `u` - Enables full Unicode support.
- `y` - Sticky search (matches only at the exact position in the string).

---

## Special Characters

### Metacharacters

- `.` - Matches any character except newline (use flag `s` to include newline).
- `\` - Escapes special characters.
- `^` - Matches the beginning of a string.
- `$` - Matches the end of a string.
- `*` - Matches zero or more occurrences.
- `+` - Matches one or more occurrences.
- `?` - Matches zero or one occurrence (also used for lazy quantifiers).
- `{n}` - Matches exactly `n` occurrences.
- `{n,}` - Matches `n` or more occurrences.
- `{n,m}` - Matches between `n` and `m` occurrences.

### Character Sets

- `[abc]` - Matches any one of the characters inside the brackets.
- `[^abc]` - Matches any character NOT inside the brackets.
- `[a-z]` - Matches any character in the range `a` to `z`.

### Predefined Character Classes

- `\d` - Matches any digit (equivalent to `[0-9]`).
- `\D` - Matches any non-digit.
- `\w` - Matches any word character (alphanumeric and underscore).
- `\W` - Matches any non-word character.
- `\s` - Matches any whitespace character.
- `\S` - Matches any non-whitespace character.
- `.` - Matches any character except newline.

### Quantifiers

- `*` - Zero or more times.
- `+` - One or more times.
- `?` - Zero or one time.
- `{n}` - Exactly `n` times.
- `{n,}` - At least `n` times.
- `{n,m}` - Between `n` and `m` times.

---

## Groups and Ranges

### Grouping

- `(abc)` - Captures `abc` as a group.

### Non-Capturing Groups

- `(?:abc)` - Matches `abc` but does not capture it.

### Named Capturing Groups

- `(?<name>abc)` - Captures `abc` and assigns it to the group `name`.

### Backreferences

- `\1` - Refers to the first captured group.
- `\k<name>` - Refers to a named capturing group.

---

## Lookaheads and Lookbehinds

### Lookaheads

- **Positive Lookahead:**
  Matches `X` only if `Y` follows it.
  ```regex
  X(?=Y)
  ```
- **Negative Lookahead:**
  Matches `X` only if `Y` does not follow it.
  ```regex
  X(?!Y)
  ```

### Lookbehinds

- **Positive Lookbehind:**
  Matches `X` only if `Y` precedes it.
  ```regex
  (?<=Y)X
  ```
- **Negative Lookbehind:**
  Matches `X` only if `Y` does not precede it.
  ```regex
  (?<!Y)X
  ```

---

## Anchors

- `^` - Matches the start of a string.
- `$` - Matches the end of a string.
- `\b` - Matches a word boundary.
- `\B` - Matches a non-word boundary.

---

## Common Methods

### String Methods with Regex

1. `match()`
   ```javascript
   "abc123".match(/\d+/); // ['123']
   ```
2. `replace()`
   ```javascript
   "abc123".replace(/\d+/, ""); // 'abc'
   ```
3. `search()`
   ```javascript
   "abc123".search(/\d+/); // 3
   ```
4. `split()`
   ```javascript
   "abc123xyz".split(/\d+/); // ['abc', 'xyz']
   ```

### RegExp Methods

1. `test()`
   ```javascript
   const regex = /\d+/;
   regex.test("abc123"); // true
   ```
2. `exec()`
   ```javascript
   const regex = /\d+/;
   regex.exec("abc123"); // ['123']
   ```

---

## Examples

### Validate Email

```javascript
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
emailRegex.test("example@example.com"); // true
```

### Password Strength Check

```javascript
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
passwordRegex.test("Password1"); // true
```

### Extract Numbers

```javascript
const numberRegex = /\d+/g;
"abc123xyz".match(numberRegex); // ['123']
```

---

This comprehensive overview explains the fundamentals and usage of regular expressions in JavaScript for both legacy algorithms and modern development.
