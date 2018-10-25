import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'https://tier-board.herokuapp.com/api/v1/safety';
// Actions
export const SAFETY_ADD = 'safety/ADD';
export const SAFETY_ASYNC_ADD = 'safety/ASYNC_ADD';
export const SAFETY_FETCH = 'safety/FETCH';
export const SAFETY_UPDATE = 'safety/UPDATE';
export const SAFETY_DELETE = 'safety/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case SAFETY_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case SAFETY_FETCH:
    return [...state, payload];
  case SAFETY_ASYNC_ADD:
    return [...state, ...payload];
  case SAFETY_UPDATE:  
    return state.map(safety => safety.id === payload.id ? payload : safety);
  case SAFETY_DELETE: 
    return state.filter(safety => safety.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const safetyAdd = (safety) => {
  console.log('addReducer', safety);
  safety.id = uuid();
  return dispatch => {
    superagent.post(url, safety)
      .then(res => {
        dispatch({type: SAFETY_ADD, payload: res.body});
      });
  };
};

export const safetyAsyncAdd = (safety) => {
  console.log('inside action creator', safety);
  return {
    type: SAFETY_ASYNC_ADD,
    payload: safety,
  };
};
export const safetyFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((safety) => {
        console.log('fetch data: ', safety);
        dispatch(safetyAsyncAdd(safety));
      });
  };
};

export const safetyUpdate = (safety) => {
  return dispatch => {
    superagent.put(`${url}/${safety._id}`)
      .send(safety)
      .then(() => {
        dispatch({ 
          type: SAFETY_UPDATE,
          payload: safety,
        });
      });
  };
   
};
export const safetyDelete = (safety) => {
  return dispatch => {
    superagent.delete(`${url}/${safety._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: SAFETY_DELETE,
            payload: safety,
          });
      });
  };
};