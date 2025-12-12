## Topic 1: Flexbox
- Flexbox ek one-dimensional layout system hai. 
- Isse ham elements ko ek time pe row ya column ek hi direction me control kr skte hai.
- Ye align, size, space krna easy banata hai screen size kuch bhi ho. 

### Flex Container Properties
Ye properties sirf parent element par lgti hai(jinpe display flex laga hota).

#### 1. display
- **flex** → Ye block level flex container banata hai.
- **inline-flex** → Ye inline level flex container banata hai. 

#### 2. flex-direction 
- Ye flex container ka main axis define krta hai.
- **row(default)**, **row-reverse**, **column**, **column-reverse**.

#### 3. flex-wrap
- Ye define krta hai ki items wrap honge ya nhi.
- **no-wrap(default)** → Sab items ek hi line me rhenge.
- **wrap** → Space na ho to item next line me chale jate hai.
- **wrap-reverse** → Wrap ki tarah work krega bas - reverse direction me.

#### 4. flex-flow
- Ye flex-direction + flex-wrap ka shorthand hai. 
- flex-flow : row wrap; 

#### 5. justify-content 
- Ye main axis pe aligment set krta hai. 
- **flex-start(default)**, **center**, **flex-end**.
- **space-between** → First left, last right, beech me equal gap.
- **space-around** → Har items ke dono taraf equal space.
- **space-evenly** → Flex-start, flex-end aur beech me sab jagah equal space.

#### 6. align-items
- Ye cross axis par alignment set krta hai.
- **center**, **flex-start**, **flex-end**.
- **stretch(default)** → Item's width/height auto stretch krti hai.

#### 7. align-content 
- Ye property sirf flex-wrap on hone par cross axis pe align krti hai.
- **center**, **flex-start**, **flex-end**, **space-between**, **space-around**.

#### 8. gap
- ye item ke beech me aapki need ke according gap deta hai.
- **gap**, **row-gap**, **column-gap**.


### Flex Item Properties
Ye properties sirf flexbox ke direct children pe lgti hai.    
#### 1. align-self 
- Ye specific item ki alignment cross axis par set krta hai.
#### 2. order 
- Normal flow me items ka order change kr skte hai.

#### 3. flex-grow
- Ye baki items ke comparison me kisi specific item ko grow krta hai.
- 1 pe sare items ko equal kr deta hai - lekin iske upar jitna value doge baki items me multiply krke wo grow kr jayega.

#### 4. flex-shrink
- Same as flex-grow - bas ye grow nhi shrink hota hai.

#### 5. flex-basis
- Ye items ka starting size define krta hai.
- **auto(default)**, **whatever value you want**.

## Topic 2: Grid
- Ye 2-dimensional layout system banata hai.
- Isme aap rows aur columns dono ko ek sath control kr skte ho.
- Ye flexbox se zyada powerful  hota hai. Iska use complex layout system ke liye hota hai.
```js
   container{ display: grid; }
```

### Grid Container Properties
- Ye properties grid container pe hi lgti hai.

#### 1. grid-template-columns
- Isse ham column ka number aur column ki width define krte hai.
- unit → px, fr(fraction), auto(bachi hui space) kr skte hai.
```js
   grid-template-columns: repeat(count, size);      // Syntax
   container{ grid-template-columns: 200px 200px auto;  }       // 2 columns of 200px and all space.  
   container{ grid-template-columns: 200px 1fr 1fr;  }        // first column 200px, baki bachi hui space me equal equal two column 
```

#### 2. grid-template-rows
Same grid-template-columns ki tarah work krta hai - Bas isse ham row ki height control krte hai. 

#### 3. gap 
- gap → row + column spacing
- row-gap → row spacing
- column-gap → column-spacing

#### 4. justify-content
- Ye grid ko horizontally align krta hai.

#### 5. justify-items
- Ye grid ke cell ke andar element ko horizontally align krta hai.

#### 5. align-items
- Ye grid ko vertically align krta hai.

#### 6. place-items
Shorthand of justify-items and align-items.
```js
container{  place-items: center;  }
```

#### grid-auto-row/grid-auto-columns
- Ye jo automatic size hame milti hai -  use ye set kr deta hai.
```js
container{  
     grid-auto-rows: 100px;
     grid-auto-columns: 200px;
}
```

### Grid Items Properties
Ye properties sirf individually child par lagti hai.

#### 1. grid-column
Ye perticular element ka column width define krta hai.
```js
grid-column: 1/3;      // item ke column side 1 se second column ke end side tak (3 ka mtlb 3 side). 
grid-column: span 2;      // Iska mtlb ye item baki ke element ke comparison me doguna size lega.
```

#### 2. grid-row 
- Same as grid-column - bas ye perticular row control krta hai.

#### 3. grid-area
Ye ek box ko specifically sides ke according set krta hai.
```js
syntax →> grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
```

#### 3. align-self
- Ye item ko vertically align krta hai.

#### 4. justify-self
- Ye item ko horizontally align krta hai.

#### 5. place-self
shorthand of align-self and justify-self
```js
syntax →>  place-self: align-self-value justify-self-value; 
```
#### 6. order 
- Normal flow me items ka order change kr skte hai.

## Topic 3: Flex vs Grid difference

### Main difference 
- Flexbox → 1D (row/column)
- Grid → 2D (row and column)

### Kab Flex use karein?
- Jab layout line by line ho.
- Element ka size dynamically adjust krna ho.
- Simple alignment chahiye.

### Kab Grid use karein?
- Jab poore page ka layout structure banana ho.
- Jab layout ko dono direction me ek sath control krna ho.
- Critical alignment krni ho.
- Agar row aur column ka exact control chahiye.
- Element ko kisi bhi direction me span krna ho. 

| Feature         | Flexbox                  | Grid                  |
| --------------- | ------------------------ | --------------------- |
| Layout          | **1D** (row *ya* column) | **2D** (row + column) |
| Control         | Items ka flow            | Complete structure    |
| Alignment       | Easy                     | Very powerful         |
| Spanning        | Hard                     | Very easy (span)      |
| Best Use        | Components               | Entire layouts        |
| Explicit sizing | Limited                  | Very strong           |


## Topic 4: Float & Clear
Ab ye koi use nhi krta - flex/grid according to need use hota hai.
### 1. float
- Ye element ko left/right chipka deta hai taki upcoming content uske bagal me aa ske.

### 2. clear
- Float ke flow ko stop krta hai aur element ko neeche line me kr deta hai.

## Topic 5: Responsive Design using Media Queries
### Responisve Design
- Iska mtlb design har screen size(mobile, tablet, pc) pe perfect adjust hoga.

### Media Queries
- Media queries hame screen size ke according style lagane ki facility provide krta hai.

```js
Syntax →>   @media(condition){  /* Styles */  }
```

### Most Common Breakpoints
| Mobile        | Tablet                 | Small Laptop              | Desktop            |
| --------------- | ------------------------ | ----------------------|--------------------|
| 0-600px   |  600-900px  |   900-1200px  |   1200px+|

### Mobile-first vs Desktop-first approach
#### 1. Mobile-first Approach
- Isme ham phle mobile design ke according css likhte hai. phir baad me badi screen ke liye media query ke through css likhte hai.
- Isme ham min-width media-query ka use krte hai.

```js
/* Base → Mobile */
.h4 {  font-size: 16px;  }

/* Tablet */
@media (min-width: 768px) {   .h4 {  font-size: 18px;  }   }

/* Desktop */
@media (min-width: 1024px) {   .h4 {  font-size: 20px;  }   }
```

#### 2.  Desktop-first Approach
- Isme ham phle desktop design ke according css likhte hai. phir baad me chhoti screen ke liye media query ke through css likhte hai.
- Isme ham max-width media-query ka use krte hai.

```js
/* Base → Desktop */
.h4 {  font-size: 36px;  }

/* Tablet */
@media (mix-width: 1024px) {   .h4 {  font-size: 28px;  }   }

/* Mobile */
@media (mix-width: 768px) {   .h4 {  font-size: 20px;  }   }
```

#### * Key Difference Table

| Feature         | Mobile-First                          | Desktop-First                 |
| --------------- | ------------------------------------- | ----------------------------- |
| Default CSS     | Mobile                                | Desktop                       |
| Media Queries   | `min-width`                           | `max-width`                   |
| Approach        | Small → Large                         | Large → Small                 |
| Performance     | Better (less CSS download for mobile) | Slightly heavier              |
| Modern Practice | ✅ Recommended                         | Only old projects             |
| Used for        | Modern responsive sites               | Legacy or desktop-heavy sites |


#### * Why Mobile-First is the best and modern approach?
- Aaj sabse zyada traffic mobile se आता है
- Mobile ke liye optimized CSS load hota hai
- Progressive enhancement hoti है
- Code clean aur predictable hota hai
- UX sab screens par consistent rehta है

✅ Almost 90% developers aaj Mobile-first use karte hain.

## Topic 6: CSS Functions: calc(), min(), max(), clamp()

### 1. calc()
- Ye css ke andar math use krne ke liye hota hai.
- Isme har unit ke sath koi bhi mathematical operation kr skte ho - bas wo unit ka combination possible hona chahiye.
```js 
.container{  width: calc(100% - 50px);  }
```

### 2. min()
- Ye do ya do se jayada value me se sabse choti value find krke apply krti hai.
```js 
.container{  width: min(90%, 500px);  }     // width 500px aur 90% of screen se badi nhi hogi.
```

### 3. max()
- Ye do ya do se jayada value me se sabse badi value find krke apply krti hai.
```js 
.container{  width: max(60%, 300px);  }     // width 300px se chhoti nhi hogi but if 60% 300px se bada hoga to wo apply hoga.
```

### 4. clamp()
- Ye kisi bhi value ko minimum, preferred, aur maximum limits ke beech lock karke rakhta hai — automatically screen ke size ke hisaab se adjust karta hai.

#### * Argument Definition
```js
Syntax →> clamp(min, preferred, max)
```
- min → isse chhota kabhi nahi hoga
- preferred → ideally ye value rahegi
- max → isse bada kabhi nahi hoga

```js
Example:
font-size: clamp(16px, 5vw, 32px);
```
**Meaning:**
- Minimum font-size: 16px
- Automatically grow based on 5vw
- Maximum font-size: 32px

#### * Why clamp() is awesome?
- Responsive without media queries
- Smooth scaling
- Minimum–maximum boundary safe
- Fluid typography
- Perfect for modern layouts

## Topic 7: Aspect Ratio
Ye element ko ek fixed proportion me rkhti hai bhale uski width change ho jaye.
```js 
Syntax →>  aspect-ratio: width / height;

aspect-ratio: 16 / 9;   /* widescreen video */
aspect-ratio: 1 / 1;    /* perfect square */
aspect-ratio: 4 / 3;    /* photo ratio */
aspect-ratio: 3 / 2;    /* classic image ratio */
```
### How it works?
- Browser automatically element ki height calculate karta hai based on width.
- Width fixed ho ya responsive — ratio hammesha same rehta hai.
- Height manually set nahi karni padti.

## Topic 8: Property - object-fit and object-position 
Ye dono decide krte hai ki container ke andar image/video kaise display hogi.

### 1. object-fit
Ye decide karta hai ki container ke andar image/video kaise fit krna hai.
```js
   object-fit: cover;     // image/video container ko pura cover karegi, crop bhi kr skti hai. Ration Maintain rhta hai.
   object-fit: contain;     // poori image/video visible rahegi crop nhi hogi, agar box img-size se bada hua to empty space dikhega aur agar cchota hua to image shrink hokar dikhegi, lekin Ration Maintain rhta hai aur isi ki wajah se ho skta hai shrink ke baad bhi empty space dikhe.
   object-fit: fill;     // image/video container ko poora fill kregi lekin ration maintain nhi kregi - usually avoid it. 
```

### 2. object-position
- Ye decide krti hai ki image/video kis side se crop nhi honi chahiye.
- **top, left, center, right**.