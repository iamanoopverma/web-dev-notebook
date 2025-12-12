## Topic 1: Selector 
- Which selects html elements for styling. It's called selector.
```js
   Syntax =    Selector {  property: value;  }
```

## Types of Selector -
All type of selectors are given below:-

### Type 1: Basic Selector
- It target the element or element relation.

#### Universal Selector
- Sabhi elements pe style apply krta hai (html file me jitne bhi tag hai including html).
```js
   Example =    * {
                        margin: 0;
                        padding: 0;
                      }
```

#### Element Selector
- Sirf specific tag ko select krta hai whatever you want.
```js
   Example =    p {  margin-bottom: 15px;  }
```

#### Class Selector
- Jis tag me same class lgi hogi sabme styling apply ho jayengi.
```js
   Example =    .classname {  background-color: blue;  }
```

#### ID Selector
- Ye ek unique element par style krta hai ek id aap do element pe nhi laga skte.
```js
   Example =    #idname {  font-size: 24px;  }
```

#### Group Selector
- Isse ham jitna chahe selectors ko ek sath same style de skte hai.
```js
   Example =   p, h2, h3, .h3, #serialNo {  color: gray; }
```

#### Descendant Selector
- Ek element ke andar ke specific element ko target karta hai.
```js
   Example =  div p {  color: red; }
```
- Isme matter nahi karta ki 'p' tag 'div' tag ka direct child hai ya indirect bas - Child hona chahiye style apply ho jayega.

#### Child Selector
- Ye sirf direct child element ko target karta hai.
```js
   Example=  div > p {  color: red; }
```

#### Attribute Selector
- Ye html attribute ke base pe element ko select krta hai.
```js
   Example =  input[type="text"] {  color: red; }
```

#### Adjacent Sibling Selector
- Isse ham kisi element ke just baad wala element target kr skte hai.
```js
   Example =  h2 + p {  color: red; }
```

#### General Sibling Selector
- Isse ham kisi element ke baad uske jitne bhi sibling hai (not total siblings) sabko target kr skte hai.
- Phle wale siblings ko ham target nhi kr skte.
```js
   Example =  h2 ~ p {  color: red; }
```

### Type 2: Pseudo-class Selector
- Iska use kisi element ke special state ko style dene ke liye hota hai.

#### Mostly Used Pseudo-Classes -

| **Pseudo-class**  | **Usage / Meaning**                                     | **Example**                            | **Explanation**                                    |
| ----------------- | ------------------------------------------------------- | -------------------------------------- | -------------------------------------------------- |
| `:hover`          | Jab user mouse se element par hover kare                | `button:hover { background: blue; }`   | Mouse le jaane par style change hota hai           |
| `:focus`          | Jab element (input, button) active ho (cursor andar ho) | `input:focus { border-color: green; }` | Input field click karne ya tab se select karne par |
| `:active`         | Jab element par click ho raha ho                        | `a:active { color: red; }`             | Click press hone ke moment me                      |
| `:visited`        | Pehle se visit kiye gaye link ke liye                   | `a:visited { color: purple; }`         | Link jo pehle open kiya gaya ho                    |
| `:first-child`    | Parent ka pehla child element                           | `li:first-child { color: red; }`       | Sirf pehla `<li>`                                  |
| `:last-child`     | Parent ka aakhri child element                          | `li:last-child { color: blue; }`       | Sirf last `<li>`                                   |
| `:nth-child(n)`   | Parent ke andar n-th number ka child                    | `li:nth-child(2) { color: green; }`    | 2nd element select karega                          |
| `:nth-of-type(n)` | Same type ke n-th element ko select karta hai           | `p:nth-of-type(2) { color: orange; }`  | 2nd `<p>` element select karega                    |
| `:not(selector)`  | Jo element selector se match **nahi** karta             | `p:not(.highlight) { color: gray; }`   | `.highlight` class wale chhodkar sab               |

### Type 3: Pseudo-element Selector
- In pseudo-elements ka use kisi element ke specific part ko style krne me hota hai.
  
#### Mostly Used Pseudo-Elements -

| **Pseudo-element** | **Use**                                                            | **Example**                                         |
| ------------------ | ------------------------------------------------------------------ | --------------------------------------------------- |
| `::before`         | Element ke pehle virtual content insert karta hai                  | `p::before { content: "👉 "; }`                     |
| `::after`          | Element ke baad virtual content insert karta hai                   | `p::after { content: " ✅"; }`                       |
| `::first-letter`   | Pehla letter style karta hai                                       | `p::first-letter { font-size: 30px; color: red; }`  |
| `::first-line`     | Pehli line style karta hai                                         | `p::first-line { font-weight: bold; }`              |
| `::selection`      | Jab text select ho (drag karke), uska color/style change karta hai | `::selection { background: yellow; color: black; }` |

```js
   Example =  h2::before {
                     content: "★ ";
                     color: gold;
                     }

                   p::after {  content: " 🔥";  }
               
```

#### 🧠 Important Notes
- Ye real html content me nhi dikhta kyuki ye virtual hota hai.
- ::before aur ::after sirf tab kaam karte hain jab content property likhi ho.
- content me aap text, emoji, Unicode, ya even empty string ("") likh sakte ho.
- In pseudo-elements ko mostly position, background, ya icon effect ke liye use kiya jata hai.

## Topic - 2: Colors
- CSS me element ko color krne ke liye mainly 4 ways hote hai.
  
| **Type**         | **Description**                        | **Example**                                    |
| ---------------- | -------------------------------------- | ---------------------------------------------- |
| **HEX**          | 6-digit hexadecimal color code         | `#FF0000` → Red                                |
| **RGB**          | Red, Green, Blue (0–255)               | `rgb(255, 0, 0)` → Red                         |
| **RGBA**         | RGB + Alpha (opacity 0–1)              | `rgba(255, 0, 0, 0.5)` → Semi-transparent red  |
| **HSL**          | Hue (0–360), Saturation %, Lightness % | `hsl(120, 100%, 50%)` → Green                  |
| **HSLA**         | HSL + Alpha (opacity 0–1)              | `hsla(240, 100%, 50%, 0.3)` → Transparent blue |
| **Named Colors** | Predefined color names                 | `red`, `blue`, `green`, `gold`                 |

### Hex Color -
- Isme 6 digit hexadecimal number hota hai, Each 2 digit ek color define krte hai.
- Jaise first 2 digit red and second 2 digit green, third 2 digit blue.
- Isme color ke shade ke according range hoti hai ff (in decimal 255) full color hota hai. Jo ki 00 to ff tak set kr skte hai.
- Iska short version bhi likh skte ho lekin tabhi jab har color ke dono digit same ho.
- Isme 8 digit hex color likh skte hai jisme last 2 digit opacity level define krte hai according to hex-number value.
- FF = opaque  80 = semi-transparent 00 = fully transparent.
```js
   Example =  p{  color: #ff0000 / #f00;  }
              h2{  color: #ff45ee50  }
```

### RGB Color - 
- Isme bhi wahi color range aur baki sab chejein hoti hai - bas rgb function call krna hota hai, Jisme value decimal me dete hai.
- Ye bhi same Hex ki tarah hi hota hai bas opacity ka tareeka alag hai, aur short form me nhi likh skte.
- Isme transparent level 0 se 1 ke beech me define hota hai. 1 = opaque  0.5 semi-transparent 0 = fully transparent.
```js
   Example =  p{  color: rgb(255,255,255,0.5);   } //Semi-transparent
```

## Topic - 3: CSS Units
- CSS me size define krne ke liye units use hoti hai.

### Pixel (px) 
- Ye fixed size declare krta hai.
- Ye display ke physical pixel pe based hota hai. Aur screen ki size se isko koi fark nhi pdta ye fixed rhta hai  .
- Sabse jyada use hone wali unit hai.
```js
    div{  width: 200px;  }
```

### Percent (%)
- Ye unit parent se calculate hoti hai.
- margin, padding, width, height(except some case)  = Depends on parent's width.
- font-size, line-height = Depends on parent's font-size.
```js
    div{  width: 60%;  } // Suppose parent's width 1000px then child's width 600px. 
```

### em
- Ye unit parent ke font-size pe depend krti hai.
- jitna font-size = 1 unit of em e.g. font-size = 16px -> 1em = 16px.
```js
    p{  font-size: 1.5em;  } // suppose parent font size = 20px then p font-size also 30 px.
```

### rem (Root em)
- Ye unit root element(html tag) ke font-size pe depend krti hai.
- Baki same em ki tarah working hai.
```js
    p{  font-size: 1.5em;  } // suppose parent font size = 20px then p font-size also 30 px.
```

### vw (Viewport Width) 
- Ye unit viewport(visible screen) ki width pe depene krti hai jo ki percentage me calculate hoti hai.
- 1vw = 1% of screen width.
```js
    p{  font-size: 50vw;  } // suppose viewport width = 20px then p font-size also 10 px.
```

### vh (Viewport height) 
- Ye unit viewport(visible screen) ki height pe depene krti hai jo ki percentage me calculate hoti hai.
- 1vh = 1% of screen height.
```js
    p{  font-size: 50vh;  } // suppose viewport height = 50px then p font-size also 25 px.
```

#### Important Notes Related to Units -  
- **%**, **em**, **rem** ye teeno sare parent me check krti hai jaha bhi nearest defined value mil jati hai wo apply ho jati hai nhi to by defalut 16px apply hoti hai.
- **px** aur **vw**, **vh** me antar - px kabhi screen size pe depend nhi krta lekin vw aur vh krte hai. 
- Agar aapne physical display ki width se jyada **px** de diya to slider aa jayega lekin size cchota nhi dikhega.
- **%** unit useful tabhi hai jab parent ki same property value responsible ho.

## Topic 4: Box Model
- Har Html element webpage me ek rectangular box ki tarah hota hai.
- Ye element ke sapce configuration ko dikhata hai jisse ham samajh ske ki element ne jitni bhi jagah li hai wo kyu li hai.
```js
┌──────────────────────────────┐  ← Margin
│     ┌──────────────────┐     
│     │   Border                  
│     │ ┌──────────────┐      
│     │ │  Padding          
│     │ │ ┌──────────┐      
│     │ │ │ Content         
│     │ │ └──────────┘      
│     │ └──────────────┘    
│     └──────────────────┘     
└──────────────────────────────┘
```

### box-sizing: border-box 
- Iski by default value content-box hoti hai jisme padding + border content me count nhi hota hai.
- Lekin agar border-box laga doge to padding + border content me hi count hoga.
```js
div {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid blue;
}
```
- If content-box => content's width = 200(w) + 20(p-inline) + 10(b-inline) = 230px same as in height.
- If border-box => Padding & border will adjust according to your screen resolution in given width and height.

## Topic 5: Display Types 
### block
- Isse element ko uske parent ki 100% width mil jati hai aur height auto hoti hai.

### inline
- Isme height & width, margin-block & padding-block property allowed nhi hai. 
- Same line me multiple inline element aa skte hai.
- padding-block dikh to jati hai lekin layout-height me wo padding count nhi hoti.
  
### inline-block
- Same as inline - Bas isme margin, padding, height & width sab working rhta hai.

### None
- Element layout se completey hidden hota(space bhi nhi leta).

## Topic 6: Visibility vs display: none
- Visibilty : hidden - Element gayab ho jata hai lekin space occupied rhti hai. 
- Display : none - Element gayab ho hota aur space occupied nhi hoti hai.

## Topic 7: Position
- Ye property batati hai ki element kaha aur kiske reference se rkha gaya hai.
  
### static (default)
- Positioned => According to normal flow.
- You can't move element.

### relative
- Positioned => According to current space.
- Ise move krne par apni space free nhi krta aur jaha move krte hai waha ki bhi space cover krta hai.  
  
### absolute
- Positioned => According to nearest positioned (except static) ancestor.
- No ancestor => Positioned according to Initial Containing Block(Root Element).
- Ise move kro ya na kro ye space cover nhi krta.

### sticky
- Jab kisi bhi scrollable ancestor ko upar se neeche scroll krte hai - tab apne direct parent ke andar ye viewport ke according stick ho jata hai.
- Normal flow me ye apni jagah cover kiye rhta hai. jab move hota to nhi krta.
  
### fixed
- Positioned => according to viewport .
- No occupy space.

## Topic 8: z-index
- CSS ki kuch properties (position, opacity<1, transform, filter, etc.) new stacking context banati hain — yani ek nayi layer-group.
- In groups ke andar kaun si layer upar/neeche hogi, ye z-index manage karta hai.
- z-index sirf un elements par work karta hai jinki position (relative, absolute, fixed, sticky) set ho aur jinka z-index numeric ho.
- Higher z-index = upar
- Lower z-index = neeche

### Important Rule
- Parent par bhi z-index apply hota hai.
- Jiske parent ka z-index zyada hoga, us parent ke saare children (chahe unka z-index low ho) doosre parents aur unke children se upar dikh sakte hain.
- Lekin koi child kitna bhi z-index badha le, wo kabhi bhi apne parent ke stacking context se bahar ja kar kisi dusre parent ke element ko cross nahi kar sakta.
- Isliye final layering hamesha parent ke z-index ke hisaab se hi decide hoti hai.