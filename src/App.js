import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    person: { name: 'Kristina', occupation: 'developer' }
  }

  inputChangeHandler = (event) => {
    this.setState( {
      person: { name: event.target.value, occupation: 'developer' }
    } )
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.inputChangeHandler} 
        currentName={this.state.person.name}/>
        <UserOutput 
          name={this.state.person.name} 
          occupation={this.state.person.occupation} />
        <UserOutput 
          name={this.state.person.name} 
          occupation={this.state.person.occupation} />
        <UserOutput 
          name={this.state.person.name} 
          occupation={this.state.person.occupation} />
      </div>
    );
  }
}

export default App;
