import React, { useState } from 'react'

function App() {
  
  const [result, setResult] = useState(0);
  
  

  const Add = function (e) {
    e.preventDefault()
    setResult(result + 1)
  }
  const Minus =function (e) {
    e.preventDefault()
    setResult(result - 1)
  }
  const Reset = (e) => {
    e.preventDefault()
    setResult(0)
    setResult(0)
  }

  return (

    <div className='container'>
      <h1>COUNT NUMBERS</h1>
      <div className="span">
      <span>{result}</span>
      
      </div>

      
      <br />
      <button onClick={Add}>add</button>
      <button onClick={Minus}>minus</button>
      <button onClick={Reset}>reset</button>
      

    </div>
  )
}

export default App
