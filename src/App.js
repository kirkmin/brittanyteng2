import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Daily from './containers/Pages/Daily';
import Athlete from './containers/Pages/Athlete';
import Teamwork from './containers/Pages/Teamwork';
import Transcendent from './containers/Pages/Transcendent';
import Craft from './containers/Pages/Craft';
import Happy from './containers/Happy/Happy';
import Breadblok from './containers/Pages/Breadblok';
import Apple from './containers/Pages/Apple';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          {(setMainBackground)  => (
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} setMainBackground={setMainBackground} />} />
              <Route path="/daily" render={(props) => <Daily {...props} setMainBackground={setMainBackground} />} />
              <Route path="/athlete" render={(props) => <Athlete {...props} setMainBackground={setMainBackground} />} />
              <Route path="/teamwork" render={(props) => <Teamwork {...props} setMainBackground={setMainBackground} />} />
              <Route path="/transcendent" render={(props) => <Transcendent {...props} setMainBackground={setMainBackground} />} />
              <Route path="/craft" render={(props) => <Craft {...props} setMainBackground={setMainBackground} />} />
              <Route path="/happy" render={(props) => <Happy {...props} setMainBackground={setMainBackground} />} />
              <Route path="/breadblok" render={(props) => <Breadblok {...props} setMainBackground={setMainBackground} />} />
              <Route path="/apple" render={(props) => <Apple {...props} setMainBackground={setMainBackground} />} />
              <Redirect to="/" />
            </Switch>
          )}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;