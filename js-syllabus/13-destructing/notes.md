## Destructing (Array & Object)
You can convert Array/Object in individual variable. and this method is called **Destructure**.

### 1. Array destructing 
```js
let arr = [1, 2, 4];
let [a, b, c] = arr;
console.log(a, b, c);     // 1 2 4
```
 
#### 2. Skip Values
```js 
let [a, ,c] = arr;
console.log(a, c);      // 1 4
```

#### 3. Default Values
```js
let [a, b, c, d = 5] = arr;
console.log(a, b, c, d);     // 1 2 4 5
```

#### 4. Swap Variables
```js
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);     // 2 1
```
###### **Note:** 
If you wanna use predeclared variable in destructuring method, then don't use variable declaring keyword in this process.

### 2. Object Destructing

##### 1. Normal Way
```js
let user = { name: "Anoop", age: 20, city: "Delhi" };
let name = user.name;
let age = user.age;
let city = user.city;
```

##### 2. Destructing Way
```js
let {name, age, city} = user;
console.log(name,age,city);    // Anoop 20 Delhi
```
- **Note:** In this process JS match the variable name with object's property name, if match find then it will assign the value otherwise it will assign **undefined**.

#### 2. Rename Variable While Destruction
```js
Syntax =>  { objectKey: newVariableName }
let {name: userName, city: userCity} = user;
console.log(userName, userCity);      // Anoop Delhi
```

#### 3. Default Values
If any match not found in destructuring, you can set default value of variable.

```js
let {name: userName, city: userCity, country = "India"} = user;
console.log( userName, userCity, country);     //  Anoop delhi India 
```

#### 4. Nested Destructing
```js
let student = {
  name: "Anoop Verma",
  marks: {math: 80, science: 85 }
}
let {marks: {math, science} } = student;
console.log(math, science);     // 80 85
```

#### 5. Destructing in Function Parameters
You can use destructuring method in function declaration, so that if an objet is passed as an argument, you get the variable. But matching rule also apply here.
```js
function showUser( {name, age} ){
  console.log(`${name} is ${age} years old.`);
}
showUser(user);     // Anoop is 20 years old.
```

#### 6. Destructing With Rest Operator
With Rest operator, we can make object/array of those values which is not used in destructuring.
```js
let {name, ...residualProperties} = user;
console.log(name, residualProperties);     // Anoop {age: 25, city: 'Delhi'}
```

### 3. Function Parameter Destructuring
```js
function show({name, age}){
    console.log(name, age);
}
show({name: "Anoop Verma", age: 25});      // Anoop Verma 25
```

### 4. Mixed Destructuring (Object + Array)
```js
let data = { title: "js", nums: [1, 2, 3] };
let { title, nums: [a, b, c]} = data;
console.log(title, a, b, c);      // js 1 2 3
```

### 5. Rest Operator with Destructuring
#### 1. Array Rest
```js 
let user = {name: "Anoop", age: "23", city: "delhi"};
let {name, ...userResidualDetails} = user;
console.log(name, userResidualDetails);      // Anoop {age: '23', city: 'delhi'}
```

#### 2. Object Rest
```js
let arr = [10,20,30,40,50,60];
let [first, ...resArray] = arr;
console.log(first, resArray);       // 10 [20, 30, 40, 50, 60]
```