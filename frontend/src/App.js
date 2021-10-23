import './App.css';
import Title from './Title';
import './Title.css'
import Form from './Form'
import './Form.css'
import { Component } from 'react';
import axios from 'axios';

//function App() {
class App extends Component {

  onSubmit = (fields) => {
    console.log("App comp got: ", fields);
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
