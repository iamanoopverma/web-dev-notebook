## Topic 1: Introduction to Objects
### What is an object?
- Object key-value pair ka collection hota hai.
- Har key ek value hold krti hai. value kuch bhi ho skti hai (string, number, array, function, even another object).
- Key ko aap as string ya identifier dono tareeke se bana skte ho - lekin js internally use string me convert kr deti hai.

### Why we use object 
- Structured data store krne ke liye.
- Related data ko ek hi jagah pe rkhne ke liye.

### Object Creating Ways
Ham object teen tareeke se bana skte hai.
1. **Using new Object() Constructor** 
2. **Using classes**(Modern Way) 
3. **Using Object.create()**(For Advance concept)
4. **Object Literal Syntax**
```js 
literal syntax -
        let employee = {
          empName : "Anoop Verma",
          empId : 123,
         empAge : 25
        }
```

## Topic 2: Accessing Object Properties
Object ke andar stored value ko access krne ke do tareeke hai.

### 1. Dot Notation
Usefule jab key me koi space ya number na ho.
```js
   let user ={name: "Anoop Verma", age : 20};
   console.log(user.name);     //"Anoop Verma"
```

### 2. Bracket Notation
Usefule jab key me koi space ya number ho.
```js
   let user ={name: "Anoop Verma", age : 20};
   console.log(user[name]);     //"Anoop Verma"
```

### 3. Adding New Properties
Tum nayi property object me kabhi bhi add kr skte ho.
```js
let user = { name: "Anoop" };
user.city = "Delhi";           // using dot
user["country"] = "India";    // using bracket

console.log(user);     // { name: "Anoop", city: "Delhi", country: "India" }
```

### 4. Updating Existing Property
Agar key already exist krti hai, to new value assign krne par purani value overwrite ho jati hai.
```js
let user = {name: "Anoop Verma", age: 14};
user.age = 25;
console.log(user.age);    // 25
```

### 5. Deleting Property
Property ko delete krne ke liye **delete** operator use hota hai.
```js
let user = {name: "Anoop Verma", city:"Delhi", country: "India" };
delete user.city;
console.log(user);      // { name: "Anoop Verma", country: "India"}
```

### 6. Check if Property Exists
Ham **in** operator se check kr skte hai object me property avaialable hai ya nhi. bas properties as string dena hai. 
```js
let user = {name: "Anoop Verma", city:"Delhi", country: "India" };
console.log("name" in user);      // true
console.log("city" in user);     // false
```

## Topic 3: Object Methods & Iteration

### 1. Object.keys(obj)
Ye method object ke sare keys ko array ke form me return krta hai.
```js
let user = { name: "Anoop", age: 20, city: "Delhi" };
console.log(Object.keys(user));       // ["name", "age", "city"]
```

### 2. Object.values(obj)
Ye method object ke sare values ko array ke form me return krta hai.
```js
console.log(Object.values(user));      // ["Anoop", 20, "Delhi"]
```

### 3. Object.entries(obj)
Ye method [key,value] pairs ka array return krta hai.
```js
console.log(Object.entries(user));       // [["name", "Anoop"], ["age", 20], ["city", "Delhi"]]
```

### 4 Loop through Object - for...in
Ye loop object ke keys par iterate krta hai.
```js
for (let key in user) {
  console.log(key, ":", user[key]);  
}
```

### 5. Looping through - for...of 
Ye ek simple loop hai ise koi bhi iterable(array, string, set, map) to har element ko ek ek krke loop ke andar chala dega.

```js
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} → ${value}`);
}
```

### 6. Convert Object ↔ Array
- object to array
```js
let arr = Object.entries(user);
```
- array to object
```js
let obj = Object.fromEntries(arr);
```

## Topic 4: Nested Objects
### What is object nesting?
Object ke andar object store krne ko hi object nesting khte hai.
```js
let user = {
  name: "Anoop",
  age: 20,
  address: {
    city: "Delhi",
    pin: 110001,
    location: {
      lat: 28.6,
      long: 77.2
    }
  }
};
```

### 2. Acessing Nested Properties
Dot aur bracket dono notation se access kr skte ho.
```js
console.log(user.address.city);       // "Delhi"
console.log(user[address][location][lat])     //28.6
console.log(user.gender);        // ❌ property exist nahi karti → output: undefined (no error)
console.log(user.profile.empId); // ❌ profile undefined hai → error
```

### 3. Optional Chaining (?.)
Is accessing error ko avoid krne ke liye optional chaining operator **?.** use kr skte ho.
```js
console.log(user.address?.city);       // "Delhi"
console.log(user.address?.country);    // undefined (no error)
console.log(user.profile?.age);        // undefined (safe)
```

### 4. Updating/Add Nested Properties
- Aap direct path likh kar property update ya add kr skte ho exist kregi to update nhi to add.
```js
user.area = "Urban" // Property to add ho jayegi agar exist nhi krti bas parent missing nhi hona chahiye.
```

### 5. Looping Nested Object
```js
for (let key in user.address) {
  console.log(key, ":", user.address[key]);
}
```

## Topic: 5: Advanced Object Concepts

### 1. Object.assign()
Spread jaisa hi kaam krta hai.
```js
let merged = Object.assign( {}, user, info);   // { name: "Anoop", age: 20, city: "Delhi", country: "India" }
```

### 2. Object.freeze()
Isse aap object ko modify(delete/add/update) nhi kr skte.
```js
let car = {brand: "Tesla", model: "X"}
Object.freeze(car);
car.brand = "Maruti";     // No Effect
console.log(car.brand);     // Tesla
```

### 3. Object.seal()
Iske baad aap nayi property object me add nhi kr skte.
```js
let obj = {name: "Anoop"};
Object.seal(obj);
obj.surname = "Verma";     // No Effect
car.name = "Verma";     // Allowed
```

### 4. Object.hasOwn()
Ye check krta hai ki property object ki hi hai ya kahin se inherited hai.
```js
let user1 = {name: "Anoop"};
console.log(Object.hasOwn(user1, "name"));     // true
```

## Topic 6: JSON
### 1. What is JSON?
- Full form: JavaScript Object Notation
- Ye data storage aur exchanage ke liye ek text format hai.
- Mostly backend (API) se data bhejne/paane ke liye use hota hai.
- Syntax object ki tarah hi hota hai lekin key ko quotes ("") me rkhna compulsory hai.
  
```js
// JS Object
let user = {name: "Anoop Verma", age: 24}
// JSON Format
let jsonUser = {"name": "Anoop Verma", "age": 25 };
```

### 2. JSON.stringify()
Ye object ko string me convert krta hai.
```js
let jsonUser = JSON.stringify(user);
console.log(jsonUser);     // '{"name":"Anoop","marks":95}'
```
- **Note -**  Object ke representation ko hi string me convert kr deta hai included curlybrases.
  
### 3. JSON.parse()
Ye JSON string ko object me convert kr deta hai. 
```js
let obj = JSON.parse(jsonUser);
console.log(obj);      // {name: "Anoop Verma", age: 25}