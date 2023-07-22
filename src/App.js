import './App.css'
// import styles from './App.module.css'

function App() {
  // Here we tried module wise importing styles
  // return <div className={styles.App}>
  //   <h1 className={styles.h1}> Trying CSS </h1>
  // </div>

  const age = 16;
  const isGreen = true;

  // if (age >= 18) {
  //   return <div className='App'> OverAge</div>
  // }
  // return <div className='App'>
  //   <h1 className='h1'> Trying CssUnderAge </h1>
  // </div>
  return <div className='App'>
    { age > 18 ? <h1>OverAge</h1> : <h1> Under Age </h1> }
    {/* <h1 style={isGreen ? {color: 'green'}: {color: 'black'}}> This has Color</h1> */}
    <h1 style={{ color: isGreen ? 'green' : 'red' }}> This has Color</h1>

    {isGreen && <button> This is a Button</button>}
  </div>
}

export default App;