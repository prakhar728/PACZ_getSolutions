import './App.css';
import Title from './components/Header/Title.js';
import Form from './components/Form/Form';
import { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';

//function App() {
class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount = () => {
    this.getPost();
  };

  getPost = () => {
    axios.get('http://localhost:5000/problem/')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received!!');
    })
    .catch(() => {
      alert('Data has not been received!!'); //change to error catch
    });
  }

  onSubmit = (fields) => {
    console.log("App comp got: ", fields);
  };

  displayPosts = (posts) => {
    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div key={index}>
        <h3>{post.subject}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render() {
    return (
      <div className="App">
        {/* <Title />
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <div className="posts">
          {this.displayPosts(this.state.posts)}
        </div> */}
        <Title />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route exact path='/form'>
              <Form />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
