import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './components/dashboard.js';
import About from './components/about';

const store = createStore();
export default class App extends Component {

  render() {

      return(
          <div>
            <Provider store={store}>
              <HashRouter>
                  <Fragment>
                    <Route exact path={`/`} component={Dashboard}/>
                    <Route exact path={`/about`} component={About}/>
                  </Fragment>
              </HashRouter>
            </Provider>
          </div>
      );
  }
}
