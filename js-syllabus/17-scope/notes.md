## Scope - (Global, Function, Block)
- Scope ka matlab hota hai "kis variable ko kis jagah se access kiya ja sakta hai."
### Global Scope 
- Agar koi variable kisi function ya block ke bahar declare kiya gaya ho use global variable khte hai.
- Ise Zyada use krna sahi nhi hai kyuki ye har jagah se change ho skta hai.
```js
   let globVariable= "global variable";     // is variable ka scope global hai.
```
### Funcitonal Scope
- Jab koi variable function ke andar declare hota hai to uska scope funcional scope hota hai.
```js
   function greet(){
    let msg="hello";      // is variable ka scope functional hai 
    console.log(msg); 
   }
```
### Block Scoope
- loops and conditional statement , {} ke andar banaye gye variable ka scope block spacific hota hai.
```js
   for(let i=0; i<10; i++){
     let i=1;     // ye variable block scopic hai.
   }
   if(true){
      let i=1;    // ye variable block scopic hai.
   }
   {
    let i=1;      // ye variable block scopic hai.
   }
```

### Lexical Scope
Child function can access parent variables and parent can't access child's variable. This phenomenon is called Lexical Scope.
```js
function parent(){
   let name = "Anoop";
   console.log(address);    // Error
   function child(){
      let address = "Delhi";
      console.log(name + address);    // Delhi Anoop
   }
}
```

### Closure
When a function remembers his variables after returning, then it's called closure.

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3
```