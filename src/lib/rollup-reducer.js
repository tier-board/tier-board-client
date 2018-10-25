import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'https://tier-board.herokuapp.com/api/v1/rollup';
// Actions
export const ROLLUP_ADD = 'rollup/ADD';
export const ROLLUP_ASYNC_ADD = 'rollup/ASYNC_ADD';
export const ROLLUP_FETCH = 'rollup/FETCH';
export const ROLLUP_UPDATE = 'rollup/UPDATE';
export const ROLLUP_DELETE = 'rollup/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case ROLLUP_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case ROLLUP_FETCH:
    return [...state, payload];
  case ROLLUP_ASYNC_ADD:
    return [...state, ...payload];
  case ROLLUP_UPDATE:  
    return state.map(rollup => rollup.id === payload.id ? payload : rollup);
  case ROLLUP_DELETE: 
    return state.filter(rollup => rollup.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const rollupAdd = (rollup) => {
  console.log('addReducer', rollup);
  rollup.id = uuid();
  return dispatch => {
    superagent.post(url, rollup)
      .then(res => {
        dispatch({type: ROLLUP_ADD, payload: res.body});
      });
  };
};

export const rollupAsyncAdd = (rollup) => {
  console.log('inside action creator', rollup);
  return {
    type: ROLLUP_ASYNC_ADD,
    payload: rollup,
  };
};
export const rollupFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((rollup) => {
        console.log('fetch data: ', rollup);
        dispatch(rollupAsyncAdd(rollup));
      });
  };
};

export const rollupUpdate = (rollup) => {
  return dispatch => {
    superagent.put(`${url}/${rollup._id}`)
      .send(rollup)
      .then(() => {
        dispatch({ 
          type: ROLLUP_UPDATE,
          payload: rollup,
        });
      });
  };
   
};
export const rollupDelete = (rollup) => {
  return dispatch => {
    superagent.delete(`${url}/${rollup._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: ROLLUP_DELETE,
            payload: rollup,
          });
      });
  };
};