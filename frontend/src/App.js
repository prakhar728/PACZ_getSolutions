import './App.css';
import Form from './components/Form/Form';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

//function App() {
class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <nav className="headerContainer">
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
              <Link to='/form'>Problem</Link>

              </li>
            </ul>
            <div className="Title">
              <h1>MindSpace</h1>
            </div>
          </nav>
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
        </div>
      </Router>

    );
  }
}

export default App;
