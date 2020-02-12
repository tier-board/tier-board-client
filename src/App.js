import React, { Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import createStore from './redux/store.js';
import Dashboard from './components/dashboard.js';
import About from './components/about.js';

const store = createStore();
export default class App extends Component {

  render() {

      return(
          <div>
            <Provider store={store}>
              <HashRouter>
                <div>
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
                  </div>
              </HashRouter>
            </Provider>
          </div>
      );
  }
}
