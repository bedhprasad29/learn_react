import './App.css'
import {useState} from 'react'

function App() {
 // Learn State Use Cases

  // Example 1
  // Increase Count, Decrese Count and Set to 0
  /* const [count, setCount] = useState(0)

  return <div className="App">
    <button onClick={() => {
      setCount(count + 1)
    }}> Increase by One</button>
    <button onClick={() => setCount(0)}> Set to Zero</button>
    <button onClick={() => {
      setCount(count - 1)
    }}> Decrease by One</button>

    <p> {count} </p>
  </div> */

  // Four (Change CSS direcly by using State, Click of a button change text color)
 /*  const [color, setColor] = useState('red')

  return <div className="App">
    <button onClick={() => {
      setColor(color == 'red' ? 'green' : 'red')
    }}> Toggle Color </button>
    <h1 style={{color:color}}> This is a Text message</h1>
  </div> */

  // Third (Show Hide on Click)
  /* const [toggle, setToggle] = useState(true)

  // const changeBool = () => {
  //   setToggle(!toggle)
  // }
  return <div className="App">*/
    {/* <button onClick={changeBool}> Show/Hide </button> */}
    {/* Anonymus Function */}
    /*<button onClick={() => {
      setToggle(!toggle)
    }}> Show/Hide </button>
    { toggle && <p> This React code is written by Bedh</p>}
  </div> */
  // Second (Display Text as typing)
  /* const [name, setName] = useState("")

  const handleInputValue = (event) => {
    setName(event.target.value);
    
  }
  return <div className='App'>
    <input type='text' name='name' onChange={handleInputValue} />
    <b><p></p>{name}</b>
  </div>
  */

  // First (increment and decrement on click)
  /*const [age, setAge] = useState(0)

  const increaseAge = () => {
    setAge(age + 1)
  }

  const decreaseAge = () => {
    setAge(age * age)
  }

  return <div className='App'>
    <button onClick={decreaseAge}> - </button>
    { age }
    <button onClick={increaseAge}> + </button>
  </div>*/
}

export default App;