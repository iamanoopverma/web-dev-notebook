## Topic 1: CSS Variables
- Isse ham ek jagah value define krke har jagah use kr skte hai. Ex. = color, font-size, spacing, border-radius, gradient .
- Ise hamesha kisi selector ke andar define krte hai - lekin :root{} me define krna jyada sahi rhta hai kyuki usee variable global bnta hai.
- Isse Large projects me code clean rehta hai.

### How to declare, initialize and use css variable?
- variable name se pahle hamesha double dash use krte hai kyuki ye custom proprty hai ye normal css ka part nhi hai.
- In variables ko use krne ke liye hamesha ek var() function call krna hota hai kyuki variable css property ka reference hota hai use resolve krne me ye use hota hai.
```js
:root{  --para-color: #ccc;  }
p{  color: var(--para-color);  }
```

### Variable with Fallback
Agar kisi reason se variable nhi mila to jo fallback value denge wo apply ho jayegi.  
`h2{  color: var(--heading-color, blue;)  }`

### Why CSS Variables Are Powerful?
Kyuki agar aapne global variable banaya hai to ek jagah change krke har jagah ki property change kr skte ho.
```js
:root {
  --primary-color: #0e4792ff;
  --bg: white;
  --text: black;       
}
.dark-mode {
  --bg: black;
  --text: white;    
}

body {
  background: var(--bg);
  color: var(--text);
}

<body class="dark-mode">

<!-- JS se bhi iski value change kr skte ho.  -->
<script>  
document.documentElement.style.setProperty('--primary-color', '#ff5733');  
</script>

</body>
```
- CSS variable same name se hoga to sabse neeche wala override ho jayega.
- Jis selector ke andar variable bana hoga sirf uske sare child hi use kr skte hai uske alawa koi nhi.

### CSS Variables Work with calc(), clamp(), gradients
```js
:root {
  --space: 10px;
  --heading-size: clamp(24px, 5vw, 40px);
}

h1 {
  margin-top: calc(var(--space) * 3);
  font-size: var(--heading-size);
}

.box {
  background: linear-gradient(var(--primary), var(--secondary));
}
```

## Topic 2: Specificity & Inheritance Rules
Ye dono rules css ka foundation hai. Agar ye clear ho jaye to tumhara css 70% clean ho jata hai.

### 1. CSS Specificity (Priority Rules)
Specificity = Kaun sa CSS rule apply hoga jab multiple rules conflict karte hain.  
CSS selectors ke points hote hain -

| Selector Type                                                                   | Specificity Points |
| ------------------------------------------------------------------------------- | ------------------ |
| **Inline styles**                                                               | 1000               |
| **IDs**                                                                         | 100                |
| **Classes**, attributes (`[type="text"]`), pseudo-classes (`:hover`, `:active`) | 10                 |
| **Tags/Elements** (`p`, `div`) + pseudo-elements (`::after`)                    | 1                  |
| `*` (universal selector), combinators (`+`, `>`, `space`), `:not()`             | **0**              |

```js
#box { color: red; }     /* 100 */
.card { color: blue; }   /* 10 */
div { color: green; }    /* 1 */

.card .title { color: red; }   /* class + class = 10 + 10 = 20 */
#container h2 { color: blue; } /* id + tag = 100 + 1 = 101 */        // blue apply hoga
```
- Hamesha value aise hi add hoti hai uske baad decide hota hai phir higher point value apply ho jati hai.

### 2. Inheritance in CSS
Kuch properties parent se childs me automatically pass ho jati hai.

##### Properties that ARE inherited:
color, font-family, font-size, line-height, text-align, visibility, list-style etc.
##### Properties that ARE inherited:
margin, padding, border, background, width / height, position, display, flex / grid properties etc.

###### Basically -
- Inherited mostly = text-related + list + table + visibility + cursor
- Not inherited mostly = layout, spacing, sizing, background, border

##### Forcing Inheritance
` p{  color: inherit;  }      // Parent ka color lene ke liye force krega.`

##### Forcing Reset
```js
p{  color: initial;  }      // CSS property ka default color value apply ho jayega.
p{  color: revert;  }       // Agar parent value hai to wo nhi to browser default value apply ho jati hai.
```

### !important 
Ye sabse high priority deta hai.  
`p {  color: red !important;  } `

### Final Specificity Priority Order

#### High → Low:

- Inline + !important
- CSS + !important
- Inline styles
- ID selectors
- Class, attribute, pseudo-class
- Tag/pseudo-element
- Universal selector (*)
- Browser default styles


## Topic 3: filter & backdrop-filter
Ye dono property element ko visually filter krne ke liye use hota hai.

### 1. filter
- Iski value me kuch function call kr skte hai - jisse ham element ki image/content ko modify krte hai.
- VALUE =>  blur(px), brightness(%), contrast(%), grayscale(%), sepia(%), invert(%), opacity(%), saturate(%), hue-rotate(deg).

### 2. backdrop-filter
Ye element ke peeche jo background hota hai usko filter krta hai. aur tabhi work krega jab element ka background transparent ho.

## Topic 4: CSS Nesting
- CSS Nesting ek modern feature hai jisee aap parent selector ke andar child selector with properties likh skte ho.
- Ye CSS ko clean, short and readable banata hai.

```js
// Syntax
.parent {
  property: value;

  .child {
    property: value;
  }
}
```
##### Example:
```js
// Normal CSS tum aise likhte ho
.card { }
.card h2 { }
.card p { }
.card a:hover { }

// With Modern Feature CSS Nesting
.card {
  h2 { }
  p { }
  a:hover { }
}
``` 

### Nesting Me & Ka Matlab
Ampersand character current selector ko refer krta hai.
```js
button {
  &.primary {
    background: blue;
  }
  &:hover {
    background: darkblue;
  }
}
```

### Nesting css with media query
```js
.card {
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
}
```

### Nesting Selectors Inside Components

```js
.card {
  border: 1px solid #ddd;
  padding: 20px;

  h2 {
    font-size: 20px;
  }

  p {
    color: #555;
  }

  a {
    color: blue;

    &:hover {
      text-decoration: underline;
    }
  }
}
```

## Topic 5: Container Queries
**@media query** => Ye viewport ki width ke base par style change krta hai.  
**@container query** => Ye parent container ke size ke base par style change krta hai.

#### Step 1: Parent Container ko *Container* banana
Container queries chalane ke liye parent container me container-type property set krni hoti hai.
```js
.card-container {
  container-type: inline-size;  
  // Possible Values =>
           // inline-size:     sirf width ko track karega
           // size:      width+height dono track karega 
}
```

#### Step 2: Container Query likhna
```js
@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

#### Step 2: Container Query likhna
```js
@container (min-width: 400px) {
  .card {
    flex-direction: row;     // Jab .card-container ka width 400px se zyada ho jaye → .card row layout le lega.
  }
}
```
```js
.card-container {
  container-type: inline-size;
  background: #f2f2f2;
  padding: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Container Query */
@container (min-width: 450px) {
  .card {
    flex-direction: row;
    align-items: center;
  }

  .card img {
    width: 200px;
  }
}

```

| Feature                            | Media Queries | Container Queries |
| ---------------------------------- | ------------- | ----------------- |
| Based on                           | Viewport      | Parent container  |
| Component reusability              | Low           | High              |
| Component-based frameworks ke liye | ❌ Difficult   | ✅ Perfect         |
| Nested responsive components       | ❌ Hard        | ✅ Easy            |
