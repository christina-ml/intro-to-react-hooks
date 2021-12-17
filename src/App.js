import { Component, useState } from 'react';
import './App.css';

// function App() {
//   const [ count, setCount ] = useState(0);

//   return (
//     <div>
//       <div>{ count }</div>
//       <div>Functional Component</div> 
//     </div>
//   );
// }


class App extends Component{
  constructor(){
    super();
    this.state={
      count: 0,
    }
  }

  handleIncrement=()=>{
    this.setState({
      count: this.state.count + 1,
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <div>Count: {this.state.count}</div>
        <div>Class Component</div>
      </div>
    )
  }
}


export default App;
