import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Card from './components/Card'

class App extends Component {
  state = {
    text: "Soy el valor desde el estado"
  }

  handleInputChangeName = (params) => {
    console.log("Estoy cambiando!")
    console.log(params.target.value)
    this.setState({
      textName: params.target.value
    })
  }

  handleInputChangeDescription = (params) => {
    console.log("Estoy cambiando!")
    console.log(params.target.value)
    this.setState({
      textDescription: params.target.value
    })
  }

  handleInputChangeUrlImage = (params) => {
    console.log("Estoy cambiando!")
    console.log(params.target.value)
    this.setState({
      urlImage: params.target.value
    })
  }


   
  render() {
    console.log('Me estoy montando')
    return (
      <body>
      <form className="App">
        <label>
          Name:
          <input type="text" name="Name" onChange={this.handleInputChangeName}></input>
        </label>
        <label>
          Description:
          <input type="text" name="Description" onChange={this.handleInputChangeDescription}></input>
        </label>
        <label>
          URL Image:
          <input type="text" name="URLImage" onChange={this.handleInputChangeUrlImage}></input>
        </label>
       </form>  
        <div>
          <Card URLImage={this.state.urlImage} description={this.state.textDescription} name={this.state.textName}/>
        </div>
      </body>    
    );
  }
}
export default App;