import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from '../src/lib/store';
import Dashboard from '../src/components/dashboard';

const store = createStore();
// import logo from './logo.svg';
// import './App.css';


export default class App extends Component {

  render() {
      return(
          <div>
            <Provider store={store}>
              <BrowserRouter>
                  <Fragment>
                    {/* <Route exact path="/" component={Landing}/> */}
                    <Route exact path="/dashboard" component={Dashboard}/>
                    {/* <Route exact path="/safety" component={Safety}/> */}
                  </Fragment>
              </BrowserRouter>
            </Provider>
          </div>
      );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
