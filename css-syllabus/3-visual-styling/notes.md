## Topic 1: Background (color, image, size, repeat, position)
- background-color: #4286a1ff; → Background me color set krne ke liye
- background-image: url("banner.jpg");  → Background me image set krne ke liye

### background-size
- Ye property background me image ki fitting decide krti hai.
- background-size: cover;  →  Background ko image pura cover kr degi.
- background-size: contain;  →  Background me image pura dikhegi.
- background-size: auto;  →  Background me image apne original size me rahegi.

### background-repeat 
- Ye property Background me image ka repeatition decide krti hai.
- background-repeat: repeat;  →  Dono direction me image repeat hogi.
- background-repeat: repeat-x;  → Sirf horizontally image repeat hogi.
- background-repeat: repeat-y;  → Sirf vertically image repeat hogi.
- background-repeat: no-repeat; → Koi repeatition nhi hoga (mostly used).

### background-position
- Ye background me image ki position decide krta hai - basically ye decide krti hai ki bg-image kis side se crop nhi honi chahiye. 
- background-position: top;   → Ye image ko top se crop nhi hone dega. Aise aap isme left, center, right de skte ho.


## Topic 2: Gradients (linear-gradient, radial-gradient)
Ye smooth color transition ke liye use hota hai. ye mainly do type ke hote hai -

### 1. linear-gradient
- Color seedhi line me transition krta hai (top - bottom, left - right).
- Direction: to right, to left, to bottom, to top, to bottom right (diagonal), OR degrees → 45deg, 90deg.
- Syntax → background: linear-gradient(direction, color1, color2, ...);
- background: linear-gradient(to left, red, yellow, green); → to left = right to left direction to jo bhi color diye wo sequentially isi direction me lag jayenge. right se phle red phir yellow and then green aise lag jayega.

### 2. radial-gradient
- Colors center se circle ya ellipse shape me spread hote hain.
- Syntax → background: radial-gradient(shape size at position, color1, color2, ...);
- background: radial-gradient(circle, red, blue); → Last color ko kinaro pe rkhega baki sare colors ka circle banayega.
- background: radial-gradient(circle at top left, red, yellow);  → cicle top aur left side pe dikhega baki jagah yellow color. 
- background: radial-gradient(ellipse, #ff7e5f, #05198d); → Isme first color ka jo circle banega wo pure box ko contain krega. baki color kinaro pe rahega.

## Topic 3: border-radius
- Is property se ham element ke corner ko rounded bana skte hai.
- Ise ham kisi individually corner pe bhi use kr skte hai.
- border-radius: 50%;     → Isse image perfect circle ban jati hai.
- Shorthand →  border-radius : top-left top-right bottom-right bottom-left;

## Topic 4: Box-shadow & text-shadow

### 1. box-shadow
- Ye property box ke around shadow banane ke liye use hota hai.
- Syntax →   box-shadow: offset-x offset-y blur-radius spread-radius color;
- box-shadow: 2px 2px 5px red, -2px -2px 5px blue;   → Ek hi element pe multiple shadows possible hain.
- box-shadow: inset 0 0 10px gray;   → Shadow box ke andar dikhega.

### 2. text-shadow
- Ye text ke peeche shadow add krta hai.
- Syntax →   text-shadow: offset-x offset-y blur-radius color;

## Topic 5: Opacity & Transparency

### 1. opacity
- Ia property se ham element ki visibility control krte hai.
- Syntax →   opacity: value; For controlling visibility you can give value 0 to 1.

## Topic 6: Font properties (font-family, font-size, font-weight, line-height)
Font property text ka color, size, style, spacing control krta hai.
  
### 1. font-family: "poppins", Arial, sans-serif; 
- Is property se font ka typeface(which font used) check kr skte hai.
- font-family: "poppins", Arial, sans-serif;
- Always mulitple font likho (fallback ke liye).
- Agar font name me space hai to double quotes me likho.

### 2. font-size
- Ye property font ka size define krta hai.
- font-size: 1rem;

### 3. font-weight
- Isse ham font ki boldness control krte hai.
- font-weight: normal; → default(400)
- font-weight: bold; → 700 

### 4. line-height
- Isse ham line ki height control krte hai.
- line-height: 1.5; → font-size*number = 16 * 1.5 = 24
- line-height: 18px; → value ki unit px ya em rakh skte ho.

## Topic 7: Text alignment, decoration, transform
  
### 1. text-align
- Text ko horizontally align krne ke liye ye property use krte hai.
- text-align: left/right/center;
- text-align: justify: → Isse aapko line ke end me thoda sa bhi free space nhi milega condition kaisi bhi ho. 

### 2. text-decoration
- Text ke underline, overline, strikethrough jaise effect ke liye use hota hai.
- text-decoration: underline blue; → isme ham koi bhi style deke uska color bhi define kr skte hai.

### 3. text-formation
- Text ko uppercase/lowecase/capitalize krne me kaam aata hai.
- text-decoration: uppercase/lowecase/capitalize; 

## Topic 8: Google Fonts and @font-face

### 1. Google Fonts
- Google fonts ek free web font library hai jaha se tum apni website ke liye stylish font le skte ho.
  
### 2. @font-face
- font-face se tum custom font file ko load kr skte ho.
```js
@font-face {
  font-family: "MyFont";
  src: url("fonts/MyFont.woff2") format("woff2"),
       url("fonts/MyFont.woff") format("woff");
}

body {
  font-family: "MyFont", sans-serif;
}
```