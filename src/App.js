import { Component, useState } from 'react';
import './App.css';

function App() {
  // const [ word, setWord ] = useState("Hello World")
  const [ count, setCount ] = useState(0);
  const [ amount, setAmount ] = useState(1);

  const handleIncrement=()=>{
    setCount(count + amount)
  }

  const handleDecrement=()=>{
    setCount(count - amount)
  }

  const handleChangeAmount=(e)=>{
    setAmount(Number(e.target.value))
  }

  return (
    <div>
      <h1>Functional Component</h1>
      <input value={amount} onChange={handleChangeAmount} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
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

//   handleDecrement=()=>{
//     this.setState({
//       count: this.state.count - 1,
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//         <div>Count: {this.state.count}</div>
//       </div>
//     )
//   }
// }


export default App;
