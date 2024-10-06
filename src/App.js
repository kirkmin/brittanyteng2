import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import NotWork from './containers/NotWork/NotWork';
import Work from './containers/Work/Work';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          {(setMainBackground)  => (
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} setMainBackground={setMainBackground} />} />
              <Route path="/notwork" render={(props) => <NotWork {...props} setMainBackground={setMainBackground} />} />
              <Route path="/work" render={(props) => <Work {...props} setMainBackground={setMainBackground} />} />
              {/* <Route path="/daily" render={(props) => <Daily {...props} setMainBackground={setMainBackground} />} />
              <Route path="/athlete" render={(props) => <Athlete {...props} setMainBackground={setMainBackground} />} />
              <Route path="/teamwork" render={(props) => <Teamwork {...props} setMainBackground={setMainBackground} />} />
              <Route path="/transcendent" render={(props) => <Transcendent {...props} setMainBackground={setMainBackground} />} />
              <Route path="/craft" render={(props) => <Craft {...props} setMainBackground={setMainBackground} />} />
              <Route path="/happy" render={(props) => <Happy {...props} setMainBackground={setMainBackground} />} />
              <Route path="/breadblok" render={(props) => <Breadblok {...props} setMainBackground={setMainBackground} />} />
              <Route path="/apple" render={(props) => <Apple {...props} setMainBackground={setMainBackground} />} /> */}
              <Redirect to="/" />
            </Switch>
          )}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;