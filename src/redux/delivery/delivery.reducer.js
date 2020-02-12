import deliveryActionTypes from './delivery.types';

let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case deliveryActionTypes.DELIVERY_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];

  case deliveryActionTypes.DELIVERY_FETCH:
    return [...state, payload];

  case deliveryActionTypes.DELIVERY_ASYNC_ADD:
    return [...state, ...payload];

  case deliveryActionTypes.DELIVERY_UPDATE:  
    return state.map(delivery => delivery.id === payload.id ? payload : delivery);

  case deliveryActionTypes.DELIVERY_DELETE: 
    return state.filter(delivery => delivery.id !== payload.id);

  default: return state;
  }
};