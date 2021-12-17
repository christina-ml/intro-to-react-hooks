import { Component, useState } from 'react';
import './App.css';

// function App() {

//   return (
//     <div>
//       <h1>Functional Component</h1>

//     </div>
//   );
// }


class App extends Component{
  constructor(){
    super();
    this.state={
      shows: [],
    }
  }

  componentDidMount(){
    this.handleFetch();
  }

  handleFetch=()=>{
    fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
      .then(res=>res.json())
      .then((data)=>{
        console.log(data);

        let limitShows = data.filter((show, index)=>{
          return index < 20;

          // if (index < 20){
          //   return true;
          // }
        })

        this.setState({
          shows: limitShows,
        })
      })
  }


  render(){
    let showsElArr = this.state.shows.map((show)=>{
      return (
        <div>{ show.title }</div>
      )
    })

    return(
      <div>
        <h1>Class Component</h1>
        { showsElArr }
      </div>
    )
  }
}

export default App;
