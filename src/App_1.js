
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
     <User name="Bedh" age={27} email="bedh@bedh.com" />
     <User name="Prasad" age={27} email="prasad@prasad.com" />
     <User name="Sharma" age={27} email="sharma@sharma.com" />
     <hr/>
     <Job role="Graphic Designer" company="Amazon" salary={145000} arr={['A', 'B', 'C', 'D']} />
     <Job role="developer" company="Google" salary={1000000} />
    </div>
}

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
