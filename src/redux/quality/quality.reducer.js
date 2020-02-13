import qualityActionTypes from './quality.types';

let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case qualityActionTypes.QUALITY_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case qualityActionTypes.QUALITY_FETCH:
    return [...state, payload];
  case qualityActionTypes.QUALITY_ASYNC_ADD:
    return [...state, ...payload];
  case qualityActionTypes.QUALITY_UPDATE:  
    return state.map(quality => quality.id === payload.id ? payload : quality);
  case qualityActionTypes.QUALITY_DELETE: 
    return state.filter(quality => quality.id !== payload.id);
  default: return state;
  }
};