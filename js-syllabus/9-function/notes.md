## Functions (normal, arrow, parameters/return)
#### Normal function
- A block of code that runs when you call it.
- It supports hoisting.

```js
    function functionName(parameters) {
      // code
      return value;
    }
```
#### Arrow Function 
- It's short syntax for function.
- It's like normal function but you don't use function keyword.
- It's not supports hoisting.
- It can return implicitly.
```js
   const functionName = (parameters) => {
       // code
       return value;
    };

   // Example
   const add = (a,b) => a+b;
   console.log(add(3,4));      // 7
   const square = n = n**2;
   console.log(square(5));      // 25
```
**Notes -**   
- If you want to return a single expressioion implicitly, you have to write it without curlbrases and return keyword.
- If you use curlybrases then you have to write return keyword. It does'nt return implicitly.
- If only one parameter needed in arrow function you can use it without parenthesis.

#### Parameters & Arguments in Functions
```js
function add(a, b){ return a+b; }      // a and b is parameter.
console.log(add(3, 4));      // 3 and 4 is argument.
```

#### Pure & Impure Function
##### Pure Function
- If you call a function with same inputs thousand time and it returns same output on every call then it's  **Pure Function**.
- It does'nt perform side effects like:
   - console.log
   - network calls
   - external varaibles modify
   - DOM changes
```js
   function add(a,b){ return a+b; }
   console.log(3,5);       // 8
   console.log(3,5);       // 8
   console.log(3,5);       // 8
```

##### Impure Function
- In **Impure Function**, it return always different with same inputs. 
- It perform side effects.
```js
//Examples 
   let count = 0;
   function increment(num){ return count+num;}
   console.log(increment(5));     // 5
   console.log(increment(5));     // 10
   console.log(increment(5));     // 25

   function (){ console.log("This is Impure Function")} 
```