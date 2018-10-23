import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import setGlobalStyles from './styles/globals';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './serviceWorker';

setGlobalStyles();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// registerServiceWorker();
//serviceWorker();
