import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './components/dashboard.js';

const store = createStore();
export default class App extends Component {

  render() {

      return(
          <div>
            <Provider store={store}>
              <BrowserRouter>
                  <Fragment>
                    {/* <Route exact path="/" component={Landing}/> */}
                    <Route exact path={`/`} component={Dashboard}/>
                    {/* <Route exact path="/safety" component={Safety}/> */}
                  </Fragment>
              </BrowserRouter>
            </Provider>
          </div>
      );
  }
}
