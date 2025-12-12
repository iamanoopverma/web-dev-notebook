## Conditional Statements

### 1. if statement
- Execute expression only condition is true.
```js
   if(age >= 18){
    console.log("You are ready for voting");      // agar condition true hogi tabhi ye block of code chalega.
   }
```
### 2. if else statement
- If condition is true, then if block runs otherwise else block runs.
```js
   if(age >= 18){
    console.log("You are ready for voting");      // agar condition true hogi tabhi ye block of code chalega.
   }
   else{
      console.log("You are not ready for voting");      // agar condition false ho gyi to ye block of code chalega.
   }
```
### 3. if else if else ladder
- You can set more than one condition with this syntax. if any condition is not true, then else block runs.
```js
    if(num === 10){
        console.log("The given value is Tenth.")
    }
    else if(num === 100){
        console.log("The given value is hundredth.")
    }
    else if(num === 1000){
        console.log("The given value is thousand.")
    }
    else{
        console.log("Your value is not expecting.")
    }
```
- Anyone block will run surely.
- Wherever it finds true then, it does'nt check any condition further.

### Switch Case Statement
- Isme ek switch block banaya jata hai aur usme as an argument aap case dete ho as a variable us switch block me jitne chahe cases likh skte ho har case ke paas ek block of code hota hai jo apne case ke sahi hone par chalta hai
- last me default hota hai agar koi case match nhi hua to uska block of code chal jata hai.
```js
   let fruit = "apple";
   switch (fruit) {
    case "apple":
      console.log("Red fruit");     // ye chalega kyuki yaha pe case match ho gaya 
      break;
    case "banana":
      console.log("Yellow fruit");
      break;
    default:
      console.log("Unknown fruit");
    }
```

### 4. Ternary Operator 
```js
console.log( isOnline? "User is online": "User is offline");
```

### 6. Logical AND and OR
#### AND
```js
   isOnline && "You can send msg"
   // if first value is truthy then second will return
   // if first value is falsy then first will return
```

#### OR
```js
   isOnline || "You can send msg"
   // if first value is truthy then first will return
   // if first value is falsy then second will return
```

### 5. Nullish Coalescing
You can set the default value. if variable have null or undefined value, which is called nullish coalescing.
```js
   let name = null;
   let user = name ?? "Guest";
   console.log(name);       // Guest
   name = "Anoop Verma";
   console.log(name);      // Anoop Verma
```

### 6. Optioncal Chaining
You can set undefined if object property is not exist at any nesting level.
```js
const data = {
      user: {
        profile: {
           details: { city: "Delhi" }
          }
      }
  };         
console.log(data?.user?.profile?.details?.city);  // No Error It will return undefined.

const api = {
    user: {
      posts: [
        { title: "Hello" },
        { title: "World" }
      ]
    }
};
let postTitle = api?.user?.posts?.[1]?.title ?? "No Post";
console.log(postTitle);     // If any propery will not exist then it will print No Post.
```