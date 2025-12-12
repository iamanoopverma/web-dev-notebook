## Topic 3: Node & DOM

### 1. Node
- Node ek single point (unit) hota hai jo HTML document me kisi bhi cheez ko represent karta hai — chahe wo element ho, text ho, attribute ho, ya comment.
- Har HTML document me sab kuch node ke form me represent hota hai.

#### Node Tree structure
Har node parent-child relationship me hota hai.
```js
<body> <p>Hello</p> </body>

Node Tree Structure:
Document
 └── html (Element)
      ├── head (Element)
      │     └── #text (" ")
      └── body (Element)
            ├── h1 (Element)
            │     └── #text ("Hello")
            ├── p (Element)
            │     └── #text ("Paragraph")
            └── <!-- comment -->
```
- Yaha har cheez node hai.
- #text bhi, comment bhi, whitespace bhi… sab.

| Description           | Example              |
| --------------------- | -------------------- |
| **Element Node**      | `<div>`, `<p>`       |
| **Attribute Node**    | `class="title"`      |
| **Text Node**         | `"Hello"`            |
| **Comment Node**      | `<!-- comment -->`   |
| **Document Node**     | Entire HTML document |
| **DocumentType Node** | `<!DOCTYPE html>`    |

#### In short:
1. Node = building block of DOM
2. Har HTML part ek node ban jata hai
3. Nodes milke Node Tree banate hain
3. Node Tree ko JS ke through hum DOM ke roop me access karte hain

### 2. DOM
- DOM basically render hone wale HTML elements ka object representation deta hai.
- DOM me focus mainly elements + unke properties par hota hai.
- DOM tree usually sirf element hierarchy highlight karta hai:

```js
html
 ├── head
 └── body
      ├── h1
      ├── p
      └── div
```
DOM representation me tum mostly elements hi dekhte ho, text/comment ko ignore kiya jata hai jab tak tum specifically unhe access na karo.

### Difference between Node & DOM

| Node Tree                                               | DOM Tree                                  |
| ------------------------------------------------------- | ----------------------------------------- |
| Har cheez node hai (text, comment, element, attribute). | Mostly elements dikhte hain.              |
| Pure document structure, very detailed.                 | Browser-friendly element-based structure. |
| Developer tools me zyada raw.                           | Inspect Element me jo dikhta hai wo.      |


#### 1. Select Element

##### 1. Old Methods
```js
document.getElementById('idName')
document.getElementsByClassName('className')
document.getElementsByTagName('tagName')
```

##### 2. Modern (Recommended)
```js
document.querySelector('selector') → first match
document.querySelectorAll('selector') → all matches (NodeList)
```

```js
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <button id="add">Add New Paragraph</button>
    <script>
        let liveList = document.getElementsByTagName("p");
        let staticList = document.querySelectorAll("p");

        console.log("Initially:");
        console.log("Live list length:", liveList.length);
        console.log("Static list length:", staticList.length);

        document.getElementById("add").addEventListener("click", () => {
            let newP = document.createElement("p");
            newP.textContent = "New Paragraph Added!";
            document.body.appendChild(newP);
            console.log("After adding new <p>:");
            console.log("Live list length:", liveList.length);
            console.log("Static list length:", staticList.length);
        });  
    </script>
</body>
```
###### OUTPUT:  
Initially:  
Live list length: 2  
Static list length: 2  
After adding new p tag:  
Live list length: 3  
Static list length: 2

###### Note -
- Live Collection: Agar DOM me changes aate hain (koi element add/remove hota hai), to wo automatically update ho jata hai - Kyuki ye collection ka reference share krta hai.
- Non-Live(static) Collection: Ye ek snapshot hota hai DOM ka us moment pe. Agar baad me DOM badla, to ye collection change nahi hota. kyuki ye collection ka copy return krta hai reference nahi.
- Matlab jo static collection return krta hai uske chalne ke baad kuch changes hue hai to wo reflect nhi krta. uske liye aapko phir se query chalani padegi tab wo live status dega.

#### 2. Manipulate Content
Tum selected elements ke text, HTML, aur attributes badal sakte ho.
##### 1. Text change
`title.textContent = "Welcome!";`

##### 2. HTML insert
`title.innerHTML = "<span>Hello!</span>";`       

##### 3. Attribute set/get
```js
title.setAttribute("id", "main-heading");
console.log(title.getAttribute("id"));
```  

##### 4. Class & style manipulation
```js
title.classList.add("active");
title.classList.remove("hidden");
title.style.color = "blue";
title.style.background = "yellow";
```  

#### 3. Event Handling

##### Basic Syntax
```js
element.addEventListener("click", function() {
  console.log("Clicked!");
});
```
##### Common events:
click, input, submit, mouseover, mouseout, keydown, keyup etc.

#### 4. Create / Remove Elements
Naye elements banake aur DOM me inject kar skte ho:
```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);

// Delete bhi kr skte ho:
newDiv.remove();
```

## Topic 2: How Website internally works?

### 1. Jab aap browser me URL likhte ho, kya hota hai?

#### Step 1: URL type → DNS Lookup
- Jab search bar me URL(www.example.com) likhte ho to - Browser internet ki help se IP address nikalata hai jaha domain hosted hai.

#### Step 2: Browser server ko request bhejta hai (HTTP/HTTPS)
- Is request se browser ko html file mil jati hai.
  - Ab Browser html file ko parse krta hai 
  - phir html file me jitne bhi link aur script tag me external links hongi - utni http/https request send hogi aur files load hongi.

### 2. Browser HTML, CSS, JS ko process kaise karta hai?

#### Step 1: HTML → DOM
##### Step-by-step process: 
1. Browser HTML file padhta hai (Parsing phase)
2. Jaise hi browser HTML ko line by line padhta hai, wo har tag (html, body, p...) ke liye nodes banata hai.
3. Yeh nodes ek hierarchy me arrange hote hain — yehi Node Tree hai.
4. Node Tree ready hone ke baad...
5. Browser us Node Tree ko ek JavaScript-accessible structure me convert karta hai,
6. jise hum **DOM (Document Object Model)** kehte hain.
7. Phir JavaScript use kar sakti hai DOM ko access/manipulate karne ke liye.
```js
Ex.    
Document
 └── body
      └── h1
```

#### Step 2: CSS → CSSOM
Sare CSS rules padhke unhe tree jaise structure me convert kiya jata hai. jise ham CSSOM kahte hai.

#### Step 3: Render Tree
- Render Tree = DOM + CSSOM
- DOM Nodes(jo js se bnta hai) + unpe lgne wale CSS rules = milke Render Tree banate hai.
- Render Tree me sirf visible elements  hote hai (display: none; wale nhi hote).

### 3. Layout (Reflow) kya hota hai?
Render Tree banne ke baad browser decide karta hai:
- Kaunsa element kitna bada hoga?
- Kis x-y position par hoga?
- Uska width, height, margin, padding kya hoga?    

Is process ko layout / reflow kehte hain.

### 4. Paint / Rasterization kya hota hai?
Layout ke baad:
- Browser elements ko screen par draw karta hai.
- Colors, borders, text, images sab paint hote hain.

### 5. JavaScript se DOM badalte hi render tree phir kaise ban jata hai?

```js
document.querySelector("h1").innerText = "Bye!";
```
1. DOM change hua → old DOM invalidate ↓
2. Browser render pipeline dobara chalata hai:
    - DOM update
    - CSS re-check (agar necessary)
    - Render tree update
    - Layout (agar size/position change hua)
    - Paint (agar appearance change hua)

#### Important:
- Har DOM change se poori website re-render nahi hoti.
- Sirf affected portion re-render hota hai.
- Ye browser optimize karke karta hai — isse incremental rendering kehte hain.

#### Full Pipeline:
```js
HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree
Render Tree → Layout (Reflow)
Layout → Paint
Paint → Composite → Screen
```