import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if (count >= 10) {
      alert('Count cannot be more than 10')
      return
    }
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // it wont update the counter by 4 because the useState update UI in batches so it's counted as 1 the correct way is to use the function call back

    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <>
      <h1>Hello from vite and react</h1>
      <button onClick={addValue}>Add value</button>
      <h2>Count is : {count}</h2>
      <button onClick={() => setCount(count - 1)}>Subtract value</button>
    </>
  )
}

export default App
