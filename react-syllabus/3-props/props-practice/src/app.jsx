import { useState } from 'react'
import Button from './assets/components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>This is App.</h1>
        <Button text="Login" />
        <Button text="sign-up"/>
      </div>

    </>
  )
}

export default App
