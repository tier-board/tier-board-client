import rollupActionTypes from './rollup.types';

let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case rollupActionTypes.ROLLUP_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case rollupActionTypes.ROLLUP_FETCH:
    return [...state, payload];
  case rollupActionTypes.ROLLUP_ASYNC_ADD:
    return [...state, ...payload];
  case rollupActionTypes.ROLLUP_UPDATE:  
    return state.map(rollup => rollup.id === payload.id ? payload : rollup);
  case rollupActionTypes.ROLLUP_DELETE: 
    return state.filter(rollup => rollup.id !== payload.id);
  default: return state;
  }
};