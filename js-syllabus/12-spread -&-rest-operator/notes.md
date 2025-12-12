## Topic 1: Introduction to ...
- Same Symbol, different job.  
- (...) ek hi symbol hai lekin kaam do alag krta hai.
  1. Agar expand kr rha hai to **Spread Operator**.
  2. Agar collect kar raha hai to **Rest Operator**.

### 1. Spread Operator
Arrays/object ke andar ke sare elements ko individual element me tod deta hai.

```js
let arr = [1,2,3];
console.log(...arr);      // 1 2 3
```

### 2. Rest Operator
Ye spread ka bilkul opposite hai. ye elements ko array/object me collect kr deta hai.
```js
function sum(...nums){
    console.log(nums);
}
show(10,20,30);     // 10 20 30
```

## Topic 2: Spread Operator(Arrays)

### 1. Copying an array (without affecting original)
Isse ham existing array se naya array bana skte hai - bina reference share kiye.
```js
let arr1 = [2,3,4];
let arr2 = [...arr1];
arr2.push[5];
console.log(arr2);      // 2,3,4,5
console.log(arr1);      // 2,3,4
```

### 2. Merging Multiple Arrays
Spread operator arrays ko combine bhi kr skta hai.
```js
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let c = [...a, ...b];
console.log(c);      // [1,2,3,4]
```

### 3. Adding New Elements While Merging
Beech me ya start me naye elements bhi daal skte ho.
```js
let numbers = [10, 20];
let updated = [5, ...numbers, 25];
console.log(updated);      // [5, 10, 20, 25]
```

### 4. Copying With Nested Arrays
Nested array/object ek bhi level ki nesting hogi to uska reference share hota hai. mtlb changes har jagah dikhega.
```js
let arr1 = [1, [2, 3]];
let arr2 = [...arr1];
arr2[1][0] = 99;
console.log(arr1); // [1, [99, 3]] ❗same reference inside
```

## Topic 3: Spread Operator(Objects)

### 1. Adding New Properties While Copying
Isse ham ek object me dusre object ki property merge/copy kr skte hai.
```js
let user = { name: "Anoop", age: 20 };
let newUser = { ...user, city: "Delhi", country: "India"  };
console.log(newUser);     // { name: "Anoop", age: 20, city: "Delhi", country: "India" }
```
### 2. Shallow Copy (Spread)
Isme Agar ek bhi level ki object nesting hui hai to us object ka reference share hota hai.
```js 
let student = { name: "Anoop", marks: { math: 90 } };
let copy = { ...student };
copy.marks.math = 100;
console.log(student.marks.math); // 100 (same reference)
```

### 2. Deep Copy (structuredClone)
Isse object me chahe jitne level ki object-nesting hui ho - ye sabki sirf value hi copy krta hai.
```js
let clone = structuredClone(student);
clone.marks.math = 70;
console.log(student.marks.math); // 90
```

## Topic 4: Rest Operator (Functions)
- Ise tab use krte hai jab hamein pata nhi hota ki funciton calling time kitne argument pass honge.
- Rest Operator (...) function ke arguments ko ek array me collect krta hai.
- Rest Operator ke baad koi aur parameter likhne se error milega.
```js
function greet(greeting, ...names) {
  console.log(greeting);
  console.log(names);
}
greet("Hi", "Anoop", "Ravi", "Simran");
```

### Difference Table
| Feature   | Spread Operator                 | Rest Operator                      |
| --------- | ------------------------------- | ---------------------------------- |
| Direction | Expands                         | Collects                           |
| Used in   | Arrays, objects, function calls | Function parameters, destructuring |
| Output    | Individual values               | Array of values                    |
| Example   | `[...arr1, ...arr2]`            | `(...args)`                        |
