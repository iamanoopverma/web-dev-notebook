## Strings 
- Sequence of characters is called string.
- There are 3 ways to declare string.
- String is immutable it means you can't modify it.
```js
let str1 = 'Hello';         // single quotes
let str2 = "World";         // double quotes
let str3 = `Hello World`;   // backticks (template literals)
```
### Template Literals
- We declared it with `(backtick).
- It supports multi-line string.
- You can embed variable or expression in it.
- You can call any function in it.
```js
let poem = `Twinkle, twinkle, little star,   
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.`

let name = "Anoop Verma";        
let greet = `Welcome to our team, ${name}.`;   // Welcome to our team, Anoop Verma.
console.log(`${"anoop verma".toUpperCase()}`);  // ANOOP VERMA
```
### Extracting Mehtods
- This methods extract the part of string.
  
#### slice Method
- Argument => start-index(inclusive) and end-index(exclusive).
- It supports negative indexing.
```js
console.log("welcome".slice(0,3)); //wel
```
Notes - 
- If start-index >= end-index then it will return empty string.
  
#### substring Mehtod
- It also working like slice the only difference is - its not support negative indexing.
- If start-index > end-index then it will swiped automatically.
```js
console.log("welcome".slice(3,1)); //el
```

#### substr Method (Depricated)
- Argument => start-index, length(no. of characters)
- It allows negative indexing.
```js
console.log("hello world".substr(-11,5)); // "Hello" (start-index -11, length 5)
```
Notes - 
- If you give only one argument in three of methods then it will consider as start-index and extract till last(inclusively).

### Searching & Checking Methods 
- This methods check a sub-string are available in string or not.

#### includes Method
- Argument => searchString, start-index(optional) by default 0.
- Result => boolean
```js
console.log("hello guys".includes("ello",1)); // true
```

#### startsWith Method 
- It checks the string starts with a specific sub-string.
- Argument => same as includes method.
- Result => boolean.
```js
console.log("hello guys".startsWith("h")); // true
```

#### endsWith Method
- It checks the string end with a specific sub-string.
- Result => boolean.
- Argument => searchString, length(optional) by default last element tak. 
- Argument length means => virtual end point.
```js
console.log("my-syllabus.com".endsWith(".com")); // true
```

#### indexOf Method
- It return the first occurence index. If sub-string will not available then it return -1. 
- Result => index or -1.
- Argument => Same as includes method.
```js
console.log("hello this is indexOf method.".indexOf("is")); // 8
```

#### lastIndexOf Method
- Same as indexOf method - The only difference it return last occurence index.
```js
console.log("hello this is indexOf method.".lastIndexOf("is")); // 11
```

## String Transforming Methods
### toUpperCase
- It convert all character of string in upper-case.
  
### toLowerCase
- It convert all character of string in lower-case.

### trim
- It removes space from end and start of string.
  
### replace
- It replaces the first match.
- Argument => search-value, new-value.
```js
console.log("hello this is replace method.".replace("hello", "Hey"));  // Hey this is replace method. 
```

### replaceAll
- Same as replace method only difference - It replace all match.
```js
console.log("He is mad. she is cute.".replaceAll("is", "was"));  // He was mad. she was cute. 
```

## Spliting & Joining Methods

### split
- It convert string in array based on your given seprator symbol.
- Argument => seprator, limit(optional) - number.
- If you don't give the seprator, the whole string will be converted into single element of the array.
```js
console.log("hello, hey, hi, what'sup".split(" => ")); // hello => hey => hi => what'sup
```

### join
- It convert array in string based on your given seprator symbol.
- Argument => seprator(optional) default seprator = ",".
```js
let arr = ["hello", "hey", 'hi', "what'sup"];
console.log(arr.join(" | ")); // hello | hey | hi | what'sup
```  

## String Properties & Extras

### length 
- It counts the length of string(spaces included).
```js
    console.log("hello dear!".length); // 11
```

### Accessing Characters
- There are two for accessing characters - [index], charAt(index).
```js
console.log("anoop"[0]); // a
console.log("anoop".charAt(1)); // n
```
### Escape Sequence 
- In javascript, there are some character which you can't write directly. That's why escape sequence build.
| Escape Sequence | Meaning      |
| --------------- | ------------ |
| `\n`            | New line     |
| `\t`            | Tab (space)  |
| `\\`            | Backslash    |
| `\'`            | Single quote |
| `\"`            | Double quote |
 
```js
let str = "Hello\nWorld";
console.log(str);  // Output: // Hello
                                           // World
```

### repeat
- It repeat string on the basis of your given number.
- Argument => count(number).
- If you give 0 as an argument, you will get empty string.
```js
    console.log("ma".repeat(2)); // mama
```