## Operators
- Java Script me operator wo special character ya keyword hote hai jo value pe operation perform krte hai.

### 1. Arithmatic Operators
Ye operators do values pe mathematical operation perform krte hai.

|Operator   |Name    |Example                |
|:----------|:-------|:----------------------|
|**+**  |Addition   | `a+b`|
|**-**  |Substraction   | `a-b`|
|**\***  |Multiplication   | `a*b`|
|**/**  |Divsion   | `a/b`|
|**%**  |Modulas   | `a%b`|
|**++**  |Increment   | `a+1`|
|**--**  |Decrement   | `a-1`|

### 2. Assignment Operator
Ye operators variables me value assign krte hai.

|Operator   |Name    |Example                |
|:----------|:-------|:----------------------|
|**=**  |Assign   | `a=12`|
|**+=**  |Add and Assign   | `a+=12` or `a=a+12`|
|**-=**  |Substract and Assign   | `a-=12`|
|**\*=**  |Multiply and Assign   | `a*=12`|
|**/=**  |divide and Assign   | `a/=12`|
|**%=**  |Modulas and Assign   | `a%=12`|

### 3. Comparison Operator
Ye opertors do values me comparison krke true ya false me output dete hai.

|Operator   |Name    |Example                |
|:----------|:-------|:----------------------|
|**==**  |Loose Equality Operator   |`num == str`|
|**===**  |Strict Equality Operator |`num === str`|
|**!=**  |Not Equal Operator   |`num != str`|
|**!==**  |Strict Not Equal Operator   |`num !== str`|
|**>**  |Greater than Operator   |`num1 > num2`|
|**<**  |Smaller than Operator   |`num2 < num1`|
|**>=**  |Greater than or Equal Operator   |`num1 >= num2`|
|**<=**  |Smaller than or Equal Operator   |`num2 <= num1`|
- **==** Isme type conversion krke sirf value check hoti hai.  
- **===** Isme type conversion nhi hota hai. Lekin isme data type aur value dono check hoti hai.  
- Same aise hi not operator ke sath bhi hota hai single aur double (=) opertor laga ke.

### 4. Logical Opertor
Ye operators conditions ke sath kaam krte hai.   

|Operator   |Name    |Example                               |work      |
|:----------|:-------|:-------------------------------------|:----------|
|**&&**  |Logical AND Operator |`num1 > num2 && num3 < num4`|jab dono condition **true** hogi to true otherwise **false**|
|**\|\|**  |Logical OR Operator |`num1 > num2 \|\| num3 < num4`|agar koi ek bhi condition true hogi to **true** otherwise **false**|
|**!**  |Logical NOT Operator |`!isLogin`|ye value ko reverse kr deta hai, agar **true** hoga to **false** aur **false** hoga to **true**|

# 5. String Concatenation Opertor
- Ye operator do string ko jodne ke kaam ata hai.
- \+ operator agar ek bhi operand ko string detect krta hai to dusre ko string me convert krta hai phir jod deta hai.
```js 
  "hell"+"o"    //output: hello
  "23" + 1     //output:"231"
  1+2+"3"     //output:"33"
```

# 6.Type Opertor
Ye operator variables ka type batata hai.  

|Operator   |Name    |Example                |
|:----------|:-------|:----------------------|
|**typeof**  |typeof operator  | `typeof "hello"`|
|**instanceof**  |instanceof operator  | `arr instanceof Array`|

- **typeof** ye type return krta hai.
- **instanceof** ye given object given constructor ya class ka hai ya nhi check krke result binary me deta hai.
- ***Exception/js bug:*** typeof null ka type object btata hai. Ye JavaScript ka historical bug hai jo fix nahi kiya gaya, kyunki usse backward compatibility toot jaayegi.
```js
   let num=1;
   let empty=null;
   console.log(typeof num);     //number
   console.log(typeof empty);     //object
```

# 7. Ternary Operator
Ye Opertor teen oprands ke sath use kiya jata hai.

|Operator   |Name    |Example                |
|:----------|:-------|:----------------------|
|**? : ;**  |short if else  | `age >= 18 ? "allowed" : "not allowed";`|

- Agar aap chaho to ye value bhi return kr skta hai. aur obvious hai agar value return kr raha hai to aap use variable me store bhi kr skte ho. 
```js
   let age = 18;
   const validAge = age >= 18 ? age: 0;
   console.log(validAge);      //Output: 18
```