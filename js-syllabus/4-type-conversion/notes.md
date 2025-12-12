## Type Conversion
- Type Conversion ka matlab hai ek type ke data ko dusre type me convert karna. 
- Ye do tarike se ho sakta hai: 
### Implicit Type Conversion (Type Coercion)
- JavaScript khud se hi (automatically) conversion kar deta hai jab alag-alag data types ke values ko combine ya compare kiya jata hai.

#### Arithmetic Opertor ke sath
- Agar addition me koi operand string ho, to concatenation hota hai.
- Arithmetic operators (-, *, /, %) hamesha operands ko number me convert karte hain (agar possible ho).
```js
let result = '5' + 2;
console.log(result);      // "52"
console.log(null + 1);     //0 + 1 = 1
```
```js
let result = '5' - 2;
console.log(result);     // 3
```
  
#### Comparison Operator ke sath
- == ye type conversion to mostly number me krta hai lekin jab primitive aur non-primitive me comparison hota hai, To hamehsa non-primitive ko primitive me convert krke comparison krta hai.
- == operator types same nahi hone par coercion karta hai. Isiliye isse avoid karke === (strict equality) use karna best practice hai.
```js
console.log('5' == 5);     // true
console.log('5' === 5);    // false
console.log([] == true);     // [] -> "" -> 0 == 1 = false
```

### Explicit Type Conversion (Manual Conversion)
- Yeh programmer khud manually karta hai using built-in functions like Number(), String(), Boolean(), etc.

```js
Number("123");    // 123
String(123);      // "123"
Boolean(0);            // false
Boolean(NaN)           // false
```

### NaN
- **NaN:** “Not a Number”, Iska type to number hota hai lekin, Ye invalid number ko represent karta hai — aisa number jo mathematically ya computationally possible nahi hai.
- **Most Important-** Agar kisi bhi operation me ek bhi oprand **NaN** hoga to result hamesha **NaN** hi hoga.
```js
   console.log(undefined + 1);     //NaN + 1 = NaN
```