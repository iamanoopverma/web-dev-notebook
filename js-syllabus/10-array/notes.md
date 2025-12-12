# Arrays
- JavaScript me array ek special variable hota hai jo ek collection of items ko store karta hai.
- Ye items kuch bhi ho sakte hain: numbers, strings, objects, ya even dusre arrays. 
```js
  let fruits = ["apple", "banana", "mango"];
```
## 1. Array kaise banate hain?
- **Literal Syntax (Most common)**
```js
    let arr = [1, 2, 3, 4];
```
- **Constructor Syntax**
```js
   let arr = new Array(1, 2, 3, 4);
```
**Note:** Zyada tar literal syntax use karna best practice hota hai.
## 2. Array ke basic features:
- Zero-based indexing: arr[0] pe pehla item hota hai.
- Heterogeneous: Mixed types allow hain.
```js
   let mixed = [1, "hello", true, null];
```
## 3. Array ke common properties:
- **length** - Total items in array  
```js
let arr = [1, 2, 3];
console.log(arr.length); // 3
```
- **constructor** - Tells which constructor made the array 
```js
let arr = [1];
console.log(arr.constructor === Array); // true
```
- **prototype** - Inherited properties/methods
```js
console.log(Array.prototype); // shows inherited methods
```
## 4. Array ke common methods (bahut important):
### Access / Update
```js
   let a = [10, 20, 30];
   console.log(a[1]);      // 20
   a[1] = 25;
   console.log(a);        // [10, 25, 30]
```
### Adding / Removing
- **push()** - Add item at end.
```js
//Syntax 
`array.push(element1, element2, ..., elementN)`

//Example
let arr = [1];
arr.push(2); // [1, 2]
```
- **pop()** - Remove item from end.
```js
//Syntax 
`array.pop()`

//Example
let arr = [1, 2];
arr.pop(); // [1]
```
- **unshift()** -  Add item at beginning and return new array lenght 
```js
//Syntax
`array.unshift(item1, item2, ...)`

//Example
let arr = [2];
arr.unshift(1); // [1, 2]
```
- **shift()** - Remove and return item from beginning.
```js
//Syntax
`array.shift()` 

//Example
let arr = [1, 2];
arr.shift(); // [2]
```  
### Search Methods
- **indexOf()** - First index of item .
```js
//Syntax
`array.indexOf(searchElement, fromIndex)` 

//Example
let arr = [10, 20, 30];
console.log(arr.indexOf(20)); // 1
```
- **lastIndexOf()** - Last index.
```js
//Syntax
`array.lastIndexOf(searchElement, fromIndex)` 

//Example
let arr = [10, 20, 30, 20];
console.log(arr.lastIndexOf(20)); // 3
```
- **includes()** - Returns true/false.
```js
//Syntax
`array.includes(searchElement, fromIndex)` 

//Example
let arr = [10, 20, 30];
console.log(arr.includes(20)); // true
```
### Iteration Methods
#### forEach() 
- It's used for perform some task on array elements.
- It's mainly used for iteration. and it returns nothing.
```js
   //Syntax
   array.forEach(function(element, index, array) {
      // your code here
   });

   //Example
   const fruits = ['apple', 'banana', 'cherry'];
   fruits.forEach(function(fruit) {
      console.log(fruit);
   });

   // Output:
   // apple
   // banana
   // cherry
```
#### map() 
- It makes another array after performing some task on every element of given array.
- Whatever your callback returns, it adds in new array and returns that array.
- Map always returns a same length array even if the callback returns a short length array than the original array, keeping it undefined and making it same length.
```js
   //Syntax 
    array.map(function(element, index, array) {
      // return transformed element
    });

    //Example
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled);   // Output: [2, 4, 6, 8]
```

#### filter() 
In which iteration callback returns true so current iteration added in new array otherwise it's ignored.
```js
   //Syntax 
    array.filter(function(element, index, array) {
       // condition return true/false
    });

    //Example
    let numbers = [1,2,3,5,6,8,9]
    let evenNumbers = numbers.filter(element => element % 2 ===0);
    console.log(evenNumbers);    // 2,6,8
``` 

#### reduce() 
- Ye method array ke har element par sequentially kaam karta hai aur sabhi values ko mila kar ek single value banata hai.
- Jab tum reduce() ko call karte ho, tum usse ek callback function dete ho. Ye callback function har element ke saath chalta hai.
- Callback function me ek accumulator hota hai, jo har iteration me update hota hai. Is accumulator me final result build hota hai.
- Pehli baar jab callback chalta hai:
  - Agar tumne initial value di hai, to accumulator usi value se start karta hai.
  - Agar tumne initial value nahi di, to accumulator array ke pehle element se start hota hai aur iteration second element se shuru hoti hai.
- Har step me:
  - reduce() current element ko leta hai,
  - usse accumulator ke sath combine karta hai (callback ke logic ke according),
  - aur fir naye result ko accumulator bana deta hai.
- Ye process array ke last element tak chalta hai.
- Jab array finish ho jata hai, tab reduce() final accumulator value return karta hai — ye hi output hota hai.
- **Important Notes**:
  - Jo bhi aap return kroge reduce next step ke liye use hi accumulator bana lega.
  - Agar kuch nhi return kroge accumulator agle step ke liye Undefined ho jayega, Aur result bhi undefined hi aayega.
```js
   //Syntax 
    array.reduce(function(accumulator, currentValue, index, array) {
       // return updated accumulator
    }, initialValue);

    //Example
    const numbers = [10, 20, 30];
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(total);    // Output: 60
```

#### some() 
It returns true when callback's condition satisfy on any element of array. 
```js
   //Sytnax
   array.some(function(element, index, array) {
     // return true or false
   });

   //Example
   let hasEven = [1, 3, 4].some(n => n % 2 === 0);   // true
```
#### every()
It returns true when callback's condition satisfy on every element of array. 
```js
   //Sytnax
   array.every(function(element, index, array) {
     // return true or false
   });

   //Example
   const numbers = [2, 4, 6, 8];
   const allPositive = numbers.every(num => num > 0);
   console.log(allPositive);    // Output: true
```
#### find()
It returns the first element which satisfy the callback's condition.
```js
   //Sytnax
   array.find(callback(element, index, array))

   //Example
   const numbers = [5, 12, 8, 130, 44];
   const found = numbers.find(num => num > 10);
   console.log(found);     // 12
```
#### findIndex()
- Ye method bhi some ki tarah hi kaam krta hai bas iska returning item index hota hai.
- Jo bhi element se condition match hui usi element ka index reutrn kr dega.
- Agar ek bhi element se condition match nhi hui to -1 return krta hai.
- Some ki tarah phle match pe loop stop ho jata hai.
```js
   //Sytnax
   array.findIndex(callback(element, index, array))

   //Example
   const ages = [12, 17, 19, 21];
   const index = ages.findIndex(age => age >= 18);
   console.log(index);     // 2
```
### Modify / Combine
#### concat()
- Ye method do ya zyada arrays ko jod kar ek naya array banata hai.
- Ye method concatination ke liye diye huye array me koi changes nhi krta.
- Isse aap single value, multiple value, ya arrays bhi jod skte ho.
```js
//Syntax
`array1.concat(array2, array3, ...)` 

//Example
let merged = [1].concat([2]); // [1, 2]
console(merged.concat(3,4,5))  // [1,2,3,4,5]
```
#### slice()
- Ye method array ke part ko copy krke naya array return krta hai.
- Ye kabhi original array me change nhi krta.
- Isme do argument hote hai
  - **startIndex**: (inclusive) kis index se copy start krna hai.
  - **endIndex**:  (exclusive) kis index se ek phle copy rokna hai. 
- Agar endIndex nhi doge to array last index tak copy hoga.
```js
//Syntax
`array.slice(start, end)` 

//Example
let arr = [1, 2, 3];
console.log(arr.slice(1)); // [2, 3]
```
#### splice()
- Ye method original array me delete, replace, aur insertion ka kaam krta hai.
- Ye deleted array return krta hai.
- **Parameter**:
  - startIndex → kahaan se kaam shuru hoga
  - deleteCount → kitne elements delete karne hain
  - item1, item2, ... → (optional) jo naye elements insert karne hain
```js
//Syntax
`array.splice(start, deleteCount, item1, item2, ...)`

//Example of delete
const arr = [10, 20, 30, 40, 50];
const deleted = arr.splice(1, 2);
console.log(arr);        // Output: [10, 40, 50]
console.log(deleted);    // Output: [20, 30]

//Example of insertion
const arr = [10, 40, 50];
arr.splice(1, 0, 20, 30);
console.log(arr);     // Output: [10, 20, 30, 40, 50]

//Example of replace
const arr = [10, 20, 30, 40, 50];
arr.splice(1, 2, 21, 31);
console.log(arr);     // Output: [10, 21, 31, 40, 50]
```
#### reverse() 
- Ye method array ke order ko ulta kr deta hai.
- Ye original array ko reverse krke use hi return kr deta hai.
```js
//Syntax
`array.reverse()`

//Example
let arr = [1, 2, 3];
let reversed = arr.reverse(); 
console.log(reversed)    // [3, 2, 1]
console.log(arr)        // [3, 2, 1]
```
#### sort()
- Ye method array ke element ko sort krta hai.
- By default ye array element ko string (Unicode/ASCII order) ke roop me sort krta hai.
- Ye original array ko change krke use hi return kr deta hai.
- sort me aap callback function de skte ho jisme do parameter dena important hota hai.
- first aur second parameter aap apni suvidha ke according name rkh skte ho.
- **Increment ya Decrement choose krne ka tarkia**:
  - Agar aapne first me se second ko substract kiya to **Ascending** order me sort hoga.
  - Agar aapne second me se first ko substract kiya to **Descending** order me sort hoga. 

```js
//Syntax
`array.sort();`
//or
`array.sort([compareFunction])` 

//Example of sort
const fruits = ["banana", "apple", "cherry", "mango"];
const sortedFruits = fruits.sort();
console.log(sortedFruits);     // ["apple", "banana", "cherry", "mango"]

//Example of sort with compare function
const numbers = [40, 5, 100, 1, 25];
const sortedAsc = numbers.sort((a, b) => a - b);
const sortedDesc = numbers.sort((a, b) => b - a);
console.log(sortedAsc);        // [1, 5, 25, 40, 100]
console.log(sortedDesc);       // [100, 40, 25, 5, 1]
```
#### join()
- Ye method array ke har element ke baad seprator laga kar usko string me convert kr deta hai.
- Agar aap seprator nhi doge to by default comma laga deta hai.
- Original array ko change nhi krta bas ek string return kr deta ha.
```js
//Syntax
`array.join(separator)` 

//Example
let arr = [1, 2];
console.log(arr.join('-')); // "1-2"
``` 
#### flat()
- Ye method nested array ko flatten krke ek new array return krta hai.
- Ye original array me change nhi krta.
- Isme aap nesting ki depth as an argument de skte ho jo ki optional hai.
- Agar aap depth nhi doge to by default 1 level tak hogi flattening.
```js
//Syntax
`array.flat(depth)` 

//Example
let arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]
```
## 5. Looping through arrays
### for loop
```js
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
   }
```
### for...of loop
```js
   for (let item of arr) {
     console.log(item);
   }
```
### forEach()
```js
   arr.forEach((item, index) => {
      console.log(index, item);
   });
```

## 6. Multidimensional Arrays (2D Arrays)
```js
    let matrix = [
    [1, 2],
    [3, 4]
    ];
    console.log(matrix[1][0]); // 3
```
## 7. Check if something is an array
```js
   //Syntax 
    Array.isArray(value)

   //Example
   Array.isArray([1, 2, 3]); // true
   Array.isArray("hello");  // false
```