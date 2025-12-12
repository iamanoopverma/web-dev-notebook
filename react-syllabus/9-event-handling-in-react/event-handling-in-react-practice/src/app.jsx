import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const handleClick = () => alert("!Clicked");
  const printName = (name) => alert(name);
  return (
    <>
      <div className="container">
          <button onClick={ () => { setCount(count+1); return alert(count)} }>Click Me</button>
      </div>
    </>
  )
}

export default App
