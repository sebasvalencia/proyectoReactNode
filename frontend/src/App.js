import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state ={
      personas:[],
      pintar:false
    };
  }

  getPersonasFromAPI = ()=>{
    axios.get('http://localhost:3001/api/personas')
    .then(result=>{
      console.log("result", result.data);
      this.setState({
        personas: result.data
      })
    })
    .catch(err=>{
      this.setState({
        personas:[]
      })
    })
  }

  

  render() {
    return (
      <div className="App">
        <button onClick={this.getPersonasFromAPI}>Get</button>
      </div>
    );
  }
}

export default App;
