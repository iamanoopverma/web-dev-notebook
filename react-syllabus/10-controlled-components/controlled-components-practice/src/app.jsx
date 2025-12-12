import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [agree, setAgree] = useState(false);
  const [city, setCity] = useState("Delhi");
  const [form, setForm] = useState({ email: "", password: "" });
  const handleInput = (e) => {
        setForm({
          ...form,
          [e.target.name] : [e.target.value]
        })  
  }


  return (
    <>
      <div className="container">
        {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
        </select> */}

        <form action="">
          <input type="text" name="email" value={form.email} onChange={handleInput} />
          <input type="password" name="password" value={form.password} onChange={handleInput} />
        </form>
        <p>{JSON.stringify(form)}</p>
      </div>
    </>
  )
}

export default App
