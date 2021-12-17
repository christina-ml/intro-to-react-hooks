import { Component, useState } from 'react';
import './App.css';

function App() {

  return (
    <div>
      <h1>Functional Component</h1>

    </div>
  );
}


class App extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div>
        <h1>Class Component</h1>
      </div>
    )
  }
}

export default App;
