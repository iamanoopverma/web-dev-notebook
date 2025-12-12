import { useState } from 'react'

function App() {
  const [name, setName] = useState("Anoop Verma");
  const [age, setAge] = useState(24);

  return (
    <>
      <h2>Hey...</h2>
      <p>Hello, I'm {name}.</p>
      <p> {age>18 ? <p>Your Alcohol Intake Permit: Now, You can drink.</p>:<p>Your Alcohol Intake Permit: Under age ho lekin chupke se pee lo kaun dekh raha hai.</p>}</p>
    </>
  )
}

export default App
