import React, { Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import createStore from './lib/store.js';
import Dashboard from './components/dashboard.js';
import About from './components/about.js';

const store = createStore();
export default class App extends Component {

  render() {

      return(
          <div>
            <Provider store={store}>
              <HashRouter>
                <nav>
                  <ul>
                    <li className="nav"><Link to="/">home</Link></li>
                    <li className="nav"><Link to="/about">about</Link></li>
                  </ul>
                </nav>
                  <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/about" component={About}/>
                  </Switch>
              </HashRouter>
            </Provider>
          </div>
      );
  }
}
