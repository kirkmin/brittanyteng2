import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';

class App extends Component {
  render () {
    return (
        <div>
          <div>
            <Link to="/">FirstPage</Link> | <Link to="second">SecondPage</Link>
          </div>
          <div>
            <Route path="/" exact component={FirstPage} />
            <Route path="/second" component={SecondPage} />
          </div>
        </div>
    );
  }
}

export default App;