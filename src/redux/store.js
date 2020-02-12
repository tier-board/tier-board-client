import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import safetyReducer from './safety/safety-reducer';
import qualityReducer from './quality/quality-reducer';
import deliveryReducer from './delivery/delivery-reducer';
import costReducer from './cost/cost-reducer';
import moraleReducer from './morale/morale-reducer';
import rollupReducer from './rollup/rollup-reducer';

const appReducer = combineReducers({safety: safetyReducer, quality: qualityReducer, delivery: deliveryReducer, cost: costReducer, morale: moraleReducer, rollup: rollupReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
