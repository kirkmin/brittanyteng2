import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Info from './containers/Info/Info';
import Daily from './containers/Pages/Daily';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          {(setMainBackground)  => (
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} setMainBackground={setMainBackground} />} />
              <Route path="/info" render={(props) => <Info {...props} setMainBackground={setMainBackground} />} />
              <Route path="/daily" render={(props) => <Daily {...props} setMainBackground={setMainBackground} />} />
              <Redirect to="/" />
            </Switch>
          )}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;