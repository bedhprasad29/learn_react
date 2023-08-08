/*
import './App.css';

function App() {
  // Instead of this, WE can create Component and call that component
  // const name = <h1> Bedh </h1>
  // const age = <h2> 27 </h2>
  // const arr = ['A', 'B', 'C', 'D'];
  // const email = <h4> bedh@gmail.com </h4>
  // const userData = (
  //       <div>
  //         {name} {age} {email}
  //       </div>
  //     )
  return <div className="App">
     {/* <div>
     if html we have to call variables in seperate curly braces 
      {name} {age} {email}
      {`Name: ${name}, Age: ${age}, Email: ${email}`} if string can use temlate literatal to get in one curly braces
     </div> */}
     {/* {userData}
     {userData}
     {userData} */}
     {/* If passing props, in case of numbers we have to use curly braces */}
     {/* <User name="Bedh" age={27} email="bedh@bedh.com" />
     <User name="Prasad" age={27} email="prasad@prasad.com" />
     <User name="Sharma" age={27} email="sharma@sharma.com" />
     <hr/>
     <Job role="Graphic Designer" company="Amazon" salary={145000} arr={['A', 'B', 'C', 'D']} />
     <Job role="developer" company="Google" salary={1000000} />
    </div>
} */}
/*
const User = (props) => {
  // return is required if you are creating a component 
  return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.age} </h2>
      <h4> {props.email} </h4>
    </div>
  )
}

const Job = (props) => {
  console.log(props.arr);
  return (
    <div>
      <h1> { props.company } </h1>
      <h1> { props.role } </h1>
      <h2> { props.salary } </h2>
      <h2> { props.arr?.map(title => {
        if(title === 'C') return false
        return <div key={title}>{title}</div>;
      })} </h2>
    </div>
  )
}

export default App;
*/
// ------------------------------------------------------------------------------
// After learning conditionals 
/* import './App.css'
// import styles from './App.module.css'

function App() { */
  // Here we tried module wise importing styles
  // return <div className={styles.App}>
  //   <h1 className={styles.h1}> Trying CSS </h1>
  // </div>
  
  /* const age = 16;
  const isGreen = true; */
  
  /* if (age >= 18) {
      return <div className='App'> OverAge</div>
    }
  return <div className='App'>
    <h1 className='h1'> Trying CssUnderAge </h1>
  </div> */
 /*  return <div className='App'>
    { age > 18 ? <h1>OverAge</h1> : <h1> Under Age </h1> } */
    {/* <h1 style={isGreen ? {color: 'green'}: {color: 'black'}}> This has Color</h1> */}
    {/* <h1 style={{ color: isGreen ? 'green' : 'red' }}> This has Color</h1>

    {isGreen && <button> This is a Button</button>}
  </div>
}

export default App; */}
// ------------------------------------------------------------------------------
{/* <Lists></Lists> */}
/* import './App.css'
import { Planet } from './Planet';
import { User } from './User'

function App() {
  // const names = ['Bishal', 'Bibek', 'Bikram', 'Babu', 'Bedh', "Bhanu"];
  const users = [
    { name: 'Bedh', age: 27},
    { name: 'Bishal', age: 28},
    { name: 'Atharv', age: 1}
  ]

  return <div className='App'>
    {
      users.map((user, key) => {
      //  return <h1 key={key}>My name is {name}</h1>
      // return <div> Name is {user.name} and his age is {user.age} </div>
      return <User key={key} name={user.name} age={user.age} />
    })}
  </div>
}

export default App; */


// ------------------------------------------------------------------------------
// Exercise for <Planets></Planets>
/*
import './App.css'
import { Planet } from './Planet';

function App() {
 // Exercise : Show the name of planets only if they are gas planet
  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},
  ]
  return <div className='App'>
    {
      planets.map((planet, key) => planet.isGasPlanet && <Planet name={planet.name} />)
    }
  </div>
}

export default App;
*/

// ------------------------------------------------------------------------------
{/* <State Use Cases></State> */}

// ------------------------------------------------------------------------------


// ------------------------------------------------------------------------------


// ------------------------------------------------------------------------------


// ------------------------------------------------------------------------------


// ------------------------------------------------------------------------------


