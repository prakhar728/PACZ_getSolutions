import './App.css';
import Title from './components/Header/Title.js';
import Form from './components/Form/Form';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

//function App() {
class App extends Component {
   render() {
    return (
      <div className="App">
        <Title />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route exact path='/form'>
              <Form />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
