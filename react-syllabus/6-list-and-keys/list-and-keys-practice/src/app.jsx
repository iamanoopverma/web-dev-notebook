import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const products = [
    { id: 1, name: "Mobile", price: 10000 },
    { id: 2, name: "Headphone", price: 5000 },
    { id: 3, name: "Earbuds", price: 3000 },
    { id: 4, name: "Tablet", price: 30000 },
    { id: 5, name: "Smart Watch", price: 6000 }
  ];

  return (
    <div className='container'>
      <h2>Some products are listed here:</h2>
      <div className="card-con">
        {products.map((item) => (
          <div key={item.id} className='product-card'>
            <div className="title">{item.name}</div>
            <div className="price">Rs. {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
