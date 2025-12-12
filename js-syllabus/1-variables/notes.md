## Variables
- variable ek naam hota hai jisme data store kiya jata hai, aur uska value baad me change bhi kiya ja skta hai.

### Variable Declaring Keywords
  - **var** = ye purana style hai ise use krna good practice nhi hai.
  - **let** = ye naya aur recomended way hai.
  - **const** = Isse bane variable ka initialization, declaration time pe hi kr skte hai. aur iski value modify nhi kr skte.

### Difference
| Keyword | Scope        | Redeclaration in same scope    | Reassignment |
|:--------|:------------:|:------------------------------:|:------------:|
|**var**      |Function      |Allowed                         |Allowed       |     
|**let**      |Block         |Not Allowed                     |Allowed       |        
|**const**    |Block         |Not Allowed                     |Not Allowed   |       

```js
//Syntax
 let a = 10;
 const b = 20;
 console.log(a,b);
 const c;     //SyntaxError: Missing initializer in const declaration ~ isliye declaration time pe hi initialize bhi krna jaruri hai.
 let a=10;
 let a=20;     //SyntaxError: Identifier 'a' has already been declared ~ kyuki same scope me redeclaration allowed nhi hai.
 ``` 
