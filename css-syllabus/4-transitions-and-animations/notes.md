## Topic 1: Transition
- CSS transition kisi property ko smoothly change karne ke liye use hoti है — jaise color, size, position, opacity, etc.
- Transition ki 4 property hoti hai jo ek sath milke kaam krti hai -

### 1. transition-property
Jis property ko smoothly transition krna hai - use isme as a value likhte hai.
```js
transition-property: color;
transition-property: all;      // Isse sari animatable properties pe transition lag jayega. 
```

### 2. transition-duration
Transition kitne time me complete hogi.
```js
transition-duration: 0.3s;      // 300ms
```

### 3. transition-timing-function
Animation ka speed pattern define karta है — fast, slow, smooth, jumpy etc.
| Value              | Meaning                            |
| ------------------ | ---------------------------------- |
| **linear**         | Speed same from start → end        |
| **ease**           | Start slow → fast → slow (default) |
| **ease-in**        | Slow start, fast end               |
| **ease-out**       | Fast start, slow end               |
| **ease-in-out**    | Slow → fast → slow                 |
| **cubic-bezier()** | Custom control                     |

### 4. transition-delay
Animation start hone se pehle kitni der rukna है.
```js
transition-delay: 0.5s;      // Half-second wait
```

### Most Used Short-Hand (Best Practice)
```js
Syntax =>  transition: property duration timing-function delay;
Ex.   =>   transition: background-color 0.4s ease-in-out 0.1s;
```

## Topic 2: Transform
Isse ham kisi bhi element ko move, scale, rotate, skew kr skte hai bina layout ko disturb kiye. 

### Transfrom Property

#### 1. transform-origin
- Ye decide krta hai ki element kis point se transformation hoga.
- values: center, top, bottom, right, 50% 50%, custom px values.
```js
transform-origin: top left;      // Ab element top-left corner se transform hoga.
```

#### 2. transform-style
Ye property child ke 3D transform ko dikhane ke liye use hoti hai, Aur sirf parent pe lgti hai.
```js
transform-style: flat;      // Default (2D banata hai.)
transform-style: preserve-3d;     // 3D preserve krta hai.
```

#### 3. perspective
- Ye CSS property kisi element ko 3D space mein depth ka effect deni ke liye use hoti hai.
- Aap isse element ko rotate ya transform karte waqt realistic 3D look de sakte ho.

#### Perspective sirf tab kaam karti hai jab:
- Aap element pe 3D transform lagate ho (like rotateX(), rotateY())
- Perspective parent element par lagti hai (mostly)
- Child element par rotation hota hai

```js
perspective: 800px;     // Badi value = real 3d,  chhoti value = drammatic 3D
```

#### 4. perspective-origin
Same as transform-origin.

#### 5. backface-visibility
Element rotate hoke backside dikhegi ya hidden hogi.
```js
backface-visibility: hidden;      // Card flip effect me backside hide ho jati hai.
```

### Mostly used Function - 

#### 1. translate()
Element ko X (left/right) aur Y (up/down) direction me move karta hai.
```js
Syntax  =>  transform: translate(x, y); 
transform: translateX(20px);      // 20px right  -  positive = right,  negative = left
transform: translateY(20px);      // 20px right  -  positive = bottom,  negative = top
transform: translate(20px -30px);       // 20px right + 30px top
```

#### 2. scale()
Element ko bada ya chhota karta hai.
```js
transform: scale(x, y);     
transform: scaleX(1.5);     // width 50% bigger 
transform: scaleY(0.5);     // height 50% smaller 
```

#### 3. rotate() — Element ko ghumana
Element ko angle ke according rotate karta hai.
```js
transform: rotate(angle);
transform: rotate(45deg);    /* 45 degree rotation */
transform: rotate(-90deg);   /* anti-clockwise */
```

#### 4. skew()
Element ko slant ya tilt karta hai X aur Y axis par.
```js
transform: skew(x-angle, y-angle);
transform: skewX(20deg);    /* horizontal tilt */
transform: skewY(15deg);    /* vertical tilt */
transform: skew(20deg, 10deg); /* both sides tilt */
```

#### Important Rule -
Agar multiple transforms use karte ho, order matter karta hai:
```js
transform: translate(20px, 0) scale(1.2) rotate(10deg);     // Pehle move → phir scale → phir rotate
```

## Topic 3: @Keyframe & Animation

### 1. Keyframe
Keyframe ek animation ke steps define krne ke liye use hota hai.
```js
@keyframe myMove{
    from { transform: translateX(0px); }
    to { transform: translateX(100px); }
}     
// Ye animation element ko left se 100px right le jayega.
```

#### Animation apply way 
```js
.box {
  animation-name: myMove;
  animation-duration: 2s;
}       // myMove animation 2s chlega
```

#### Types of Keyframe

#### 1. from → to
```js
@keyframes fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

#### 2. 0% → 100%
```js
@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}       
// You can add multiple percentage here.
```

### 2. Animation Property

#### 1. animation-name
`animation-name: moveBox;`

#### 2. animation-duration
`animation-duration: 2s;    // animation 2s chalega`

#### 3. animation-timing-function
Same as transition-timing-function.  
`animation-timing-function: ease-in-out;`

#### 4. animation-delay
`animation-delay: 2s;    // animation 2s ke baad chalega`

#### 5. animation-iteration-count
`animation-iteration-count: infinite/number;    // animation kitni baar repeat hoga`

#### 6. animation-direction
Ye animation ka play direction define krega.  
`animation-direction: alternate;    // animation kitni baar repeat hoga`

| Value             | Meaning                               |
| ----------------- | ------------------------------------- |
| normal            | 0% → 100%                             |
| reverse           | 100% → 0%                             |
| alternate         | forward → reverse → forward → reverse |
| alternate-reverse | reverse → forward → reverse           |

#### 7. animation-fill-mode
Ye define karega ki animation ke baad element kaisa dikhega.  
`animation-fill-mode: both;    // animation kitni baar repeat hoga`
| Value     | Meaning                                                  |
| --------- | -------------------------------------------------------- |
| none      | default position par wapas                               |
| forwards  | animation complete hone ke baad **last state par rukna** |
| backwards | delay ke waqt **start ki value apply ho**                |
| both      | forwards + backwards dono                                |

#### 8. animation-play-state
Ye animation pause ya run krega.  
`animation-play-state: paused/running;`

### 9. animation shorthand
```js
Syntax 
animation:
    animation-name (Compulsory)
    animation-duration (Compulsory) 
    animation-timing-function 
    animation-delay 
    animation-iteration-count 
    animation-direction 
    animation-fill-mode 
    animation-play-state;
Ex  =>  animation: moveBox 2s ease-in-out 1s infinite alternate forwards;
`