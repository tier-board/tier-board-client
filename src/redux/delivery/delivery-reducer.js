import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'https://tier-board.herokuapp.com/api/v1/delivery';
// Actions
export const DELIVERY_ADD = 'delivery/ADD';
export const DELIVERY_ASYNC_ADD = 'delivery/ASYNC_ADD';
export const DELIVERY_FETCH = 'delivery/FETCH';
export const DELIVERY_UPDATE = 'delivery/UPDATE';
export const DELIVERY_DELETE = 'delivery/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case DELIVERY_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case DELIVERY_FETCH:
    return [...state, payload];
  case DELIVERY_ASYNC_ADD:
    return [...state, ...payload];
  case DELIVERY_UPDATE:  
    return state.map(delivery => delivery.id === payload.id ? payload : delivery);
  case DELIVERY_DELETE: 
    return state.filter(delivery => delivery.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const deliveryAdd = (delivery) => {
  console.log('addReducer', delivery);
  delivery.id = uuid();
  return dispatch => {
    superagent.post(url, delivery)
      .then(res => {
        dispatch({type: DELIVERY_ADD, payload: res.body});
      });
  };
};

export const deliveryAsyncAdd = (delivery) => {
  console.log('inside action creator', delivery);
  return {
    type: DELIVERY_ASYNC_ADD,
    payload: delivery,
  };
};
export const deliveryFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((delivery) => {
        console.log('fetch data: ', delivery);
        dispatch(deliveryAsyncAdd(delivery));
      });
  };
};

export const deliveryUpdate = (delivery) => {
  return dispatch => {
    superagent.put(`${url}/${delivery._id}`)
      .send(delivery)
      .then(() => {
        dispatch({ 
          type: DELIVERY_UPDATE,
          payload: delivery,
        });
      });
  };
   
};
export const deliveryDelete = (delivery) => {
  return dispatch => {
    superagent.delete(`${url}/${delivery._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: DELIVERY_DELETE,
            payload: delivery,
          });
      });
  };
};