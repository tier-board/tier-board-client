import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import qualityReducer from './quality-reducer';
import deliveryReducer from './delivery-reducer';
import costReducer from './cost-reducer';
import moraleReducer from './morale-reducer';
import rollupReducer from './rollup-reducer';

const appReducer = combineReducers({safety: reducer, quality: qualityReducer, delivery: deliveryReducer, cost: costReducer, morale: moraleReducer, rollup: rollupReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));