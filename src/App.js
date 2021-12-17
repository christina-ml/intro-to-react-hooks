import { Component, useState } from 'react';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);
  // const [ word, setWord ] = useState("Hello World")
  const handleIncrement=()=>{
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Functional Component</h1> 
      <button onClick={handleIncrement}>Increment</button>
      <div>{ count }</div>
    </div>
  );
}


// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       count: 0,
//       word: "Hello world"
//     }
//   }

//   handleIncrement=()=>{
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//         <div>Count: {this.state.count}</div>
//       </div>
//     )
//   }
// }


export default App;
