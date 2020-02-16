import moraleActionTypes from './morale.types';

let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case moraleActionTypes.MORALE_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case moraleActionTypes.MORALE_FETCH:
    return [...state, payload];
  case moraleActionTypes.MORALE_ASYNC_ADD:
    return [...state, ...payload];
  case moraleActionTypes.MORALE_UPDATE:  
    return state.map(morale => morale.id === payload.id ? payload : morale);
  case moraleActionTypes.MORALE_DELETE: 
    return state.filter(morale => morale.id !== payload.id);
  default: return state;
  }
};
