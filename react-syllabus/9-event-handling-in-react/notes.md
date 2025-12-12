## Event Handling in React 
- Isme bhi event-handling js ke jaise hi hoti hai - bas syntax react ki wajah se alag hai.
#### 1. Basic Click Event Example
```js
function App() {
  function handleClick = () => alert("Button clicked!");

  return <button onClick={handleClick}>Click Me</button>;
}
```
`<button onClick={handleClick()}>Login</button>      // Function call milega to react render time pe hi execute kr dega. `
`<button onClick={handleClick}>Login</button>      // Agar funciton reference mila to, function sirf click pe execute hoga. `

#### 2. Inline Event Handling
Sab same hi hai bas isme aapko wahi arrow function ka definition inline curlybrases me likh dena hota hai.
```js
<button onClick={() => alert(num) }>Click</button>  
<button onClick={()=>{num+=1; return alert(num)}}>Click</button>     
// Multiple line code ek line me space deke likh skte ho. Lekin isme new line allowed nhi hai.
```

#### 3. Passing Arguments in Event
Isme event-handling function ko arrow function me wrap krna pdta hai.
```js
<button onClick={()=> printName("Anoop Verma") }>Click</button>
```

#### 4. Event Object Access Karna
`<button onClick={ (e) => alert(e.target.innerText) }>Click Me</button>`

#### 5. Form Submit Event
```js
function Form() {
  function handleSubmit(e) {
    e.preventDefault(); // Page refresh ko rokti hai
    alert("Form Submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}
```
- Form me → e.preventDefault() nhi use kiya to page refresh(browser default behavior) ho jayega.
- Jisse state reset ho jayegi, ui reload ho jayega, form values kho skti hai.

