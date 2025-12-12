## Data Types
ye data ka type decide krte hai.  
### Primitve Data Types
1. Ye javascipt ke basic data types hote hai. Aur isme direct value store hoti hai.
2. Ye immutable hote hai. Aap in data types ke kisi specific part ko modify nhi kr skte - apko puri value change krni pdegi.

| Data Type     | Example            | Meaning                                                  |
| :------------ | :----------------- | :------------------------------------------------------- |
| **String**    | `"hello"`          | Text ya Words ke liye                                    |
| **Number**    | `25, 34`           | Numbers ke liye (Integer ya Decimal)                     |
| **Boolean**   | `true, false`      | (true/flase condition)                                   |
| **BigInt**    | `124334234234242n` | Bahut bade numbers ke liye                               |
| **Symbol**    | `Symbol('id')`     | Unique value banane ke liye (mostly)                     |
| **Undefined** | `let a`            | jab variable banaya aur intialize nhi kiya               |
| **Null**      | `let a= null`      | jab ham intentionally variable ko empty rkhna chahte hai |
```js
   let a = 10;
   let b = a; 
   a = 20;           // direct value store hone ki wajah se b me always 10 hi rhega. 
   console.log(a,b)    //20 10 
```
### Non-Primitive Data Types
1. Isme value direct store nhi hoti unka reference store hota hai.
2. Ye mutable hote hai (aapko puri value badalne ki jrurat nhi hai beech ki value bhi change kr skte ho).

| Data Type | Example                       | Meaning                                 |
| :-------- | :---------------------------- | :-------------------------------------- |
| Object    | `{name:"hello",age: 10}`      | key-value pairs me data store hote hai. |
| Array     | `[1,"a",true,{name:"anoop"}]` | list  jaisa data store krne ke liye.    |
| Function  | `function () {}`              | aisa code ka block jo chal skta hai.    |
```js 
   let a = [10];
        let b = a;
        a[0] = 40;
        console.log(a);
        console.log(b);     // 40 40
```

