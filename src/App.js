import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './components/dashboard.js';

const store = createStore();
export default class App extends Component {

  render() {

      return(
          <div>
            <Provider store={store}>
              <HashRouter>
                  <Fragment>
                    <Route exact path={`/`} component={Dashboard}/>
                  </Fragment>
              </HashRouter>
            </Provider>
          </div>
      );
  }
}
