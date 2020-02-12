import costActionTypes from './cost.types';

let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case costActionTypes.COST_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case costActionTypes.COST_FETCH:
    return [...state, payload];
  case costActionTypes.COST_ASYNC_ADD:
    return [...state, ...payload];
  case costActionTypes.COST_UPDATE:  
    return state.map(cost => cost.id === payload.id ? payload : cost);
  case costActionTypes.COST_DELETE:
    return state.filter(cost => cost.id !== payload.id);
  default: return state;
  }
};

