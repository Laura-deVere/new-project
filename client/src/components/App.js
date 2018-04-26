import React, { Component } from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
            <Route path="*" component={About} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
