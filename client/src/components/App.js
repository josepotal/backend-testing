import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './About';
import Home from './Home';

import '../styles/index.scss';

const App = () => (
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

export default App;
