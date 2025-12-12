## Hoisting & TDZ

### Hoisting
- Isme js variable aur function ke declaration ko uske scope ke top pe le jata hai.
```js
   //Example
   function greet(){
    console.log(msg);        // Output: hiiii
    printHello();           // Ouput: Hello, Guys  
    let msg="hiiii";
    function printHello(){
        console.log("Hello, Guys");
    }
   }
```
- Is example me declaration se phle call hoisting ki wajah se hi possible hai.

### TDZ 
- TDZ (Temporal Dead Zone) = Time between variable's declaration and initialisation.
- Isme aise variable hote hai jinka initialization na hua ho. Aur jo variable is zone me rhta hai - use aap access nhi kr skte reference error aayega.
- Ye hoisting ke time par hi ban jata hai. Aur sirf let aur const se bane variable pe work krta hai.

```js
   //Example
   console.log(a); // ReferenceError: Cannot access 'a' before initialization
   let a = 10;
```