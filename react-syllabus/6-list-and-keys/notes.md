## List & Keys

#### 1. What are Lists in React?
Jab tumhare paas multiple items ho (array) JSX me display karane ke liye, to React me hum map ke help se list banate hain.
```js
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      {fruits.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
```

#### 2. Why do we need Keys?
React ko list ke har item ko unique way se identify karna hota hai.  
**Reason**:  
- Key se React ko pata chalta hai ki list me actual change kya hua. Isse unnecessary re-render nahi hota.
- Agar list shuffle, sort, ya insert/remove ho, to key se React sahi item ko sahi jagah handle karta hai.
- Without key, React galat item ko update kar sakta hai (jaise input ka value mix ho jana).

**Notes**- Key React ko identity deti hai har list item ki, jisse UI fast, correct aur bug-free re-render hota hai.

#### 3. Keys kaha lagate hain?
Key sirf list ke outermost element par lagti hai.  
**Example**:
```js
{fruits.map((item) => (
  <p key={item}>{item}</p>
))}
```

#### 4. What can be used as a Key?
###### Best Options
- Unique ID from database (recommended)
- Unique string (like email)
- Unique generated id (uuid library)

###### Avoid (but beginners use sometimes)
- index (0, 1, 2 …)  
  
**Index kab theek hai?**
- Jab list static hai
- Jab items add/delete nahi honge
- Display-only lists

#### 5. Example:
```js
function App() {
  const products = [
    { id: 101, name: "Laptop", price: 45000 },
    { id: 102, name: "Phone", price: 20000 },
    { id: 103, name: "Headphones", price: 1500 }
  ];

  return (
    <div>
      {products.map((prod) => (
        <div key={prod.id} className="card">
          <h3>{prod.name}</h3>
          <p>Price: {prod.price}</p>
        </div>
      ))}
    </div>
  );
}
```

#### 6. What happens if you don’t use keys?

- React warning in console
- Wrong re-rendering
- Old items replace wrong elements
- Bad UI behaviour
- Performance issues
