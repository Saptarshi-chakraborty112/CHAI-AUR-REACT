import React, {useState} from "react";

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }
  
  return(
    <div className="chai">
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>ADD value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default App
