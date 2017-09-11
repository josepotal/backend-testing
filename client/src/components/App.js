import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/home" component={Home} />
            <Route path="/settings" render={() => <h1>Hello Settings</h1>} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
