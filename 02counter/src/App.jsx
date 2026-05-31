import React, {useState} from 'react'; 
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addvalue = () => {
    
    if(counter < 20)
    {
      setCounter(counter+1);
      console.log("value increased", counter);
    }
    
  }

  const decreaseValue = () => {
    
    if(counter > 0)
    {
      setCounter(counter-1);
      console.log("value decreased", counter);
    }
    
  }

  return (
    <>
      <h1>Chai aur React.</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Remove value</button>
    </>
  )
}

export default App
