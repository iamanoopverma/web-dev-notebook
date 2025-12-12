## Loops (for, while, do while, break, continue)
- Jab aap koi kaam ek condition pe baar baar karana chahte ho to loop ka use krte hai.

### for 
- Ye loop number ke increment ya decrement pe chalta hai aur usi number pe based condition bhi use hoti hai.
```js
   for(start;condition;increment/decrement)
   { 
    //write here code of desired work on loop 
   }
```
### while
- Ye bhi for loop ki tarah work krta hai bas syntax me thode changes hai.
```js
   while(condition)
   { 
    //write here code of desired work on loop 
    increment++;
    //OR
    decrement--;
   }
```
### do while 
- Ye bhi same for and while ki tarah work krta hai.
- bas isme antar ye hai ki ye atleast ek baar chalta hi chalta hai.
- Kyuki isme condition har loop ke last me check hoti hai.
```js
   do{ 
    //write here code of desired work on loop 
    increment++;
    //OR
    decrement--;
   }while(condition)
```

### break
- Ye kisi bhi loop ko loop ki condition false hone se phle cancel kar skta hai.
- Ise ham kisi na kisi conditional statement me hi likhte hai.

```js
   //Kisi bhi loop me aise hi condition ke sath loop ko beech me loop se exit kr skte hai.
   for(start;condition;increment/decrement)
   { 
    //write here code of desired work on loop 
    if(condition){
        break;
    }
   }
```
### continue
- Ye loop ke beech me kisi condition ke base pe us particular iteration ko skip kr skta hai.
```js
   //Kisi bhi loop me aise hi condition ke sath kisi bhi iteration ko skip kr skte hai.
   for(start;condition;increment/decrement)
   { 
    //write here code of desired work on loop 
    if(condition){
        continue;
    }
   }
```
