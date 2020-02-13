import safetyActionTypes from './safety.types';

let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case safetyActionTypes.SAFETY_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case safetyActionTypes.SAFETY_FETCH:
    return [...state, payload];
  case safetyActionTypes.SAFETY_ASYNC_ADD:
    return [...state, ...payload];
  case safetyActionTypes.SAFETY_UPDATE: 
    return [...state && state.map(safety => safety.id === payload.id ? payload : safety)];
  case safetyActionTypes.SAFETY_DELETE: 
    return state.filter(safety => safety.id !== payload.id);
  default: return state;
  }
};