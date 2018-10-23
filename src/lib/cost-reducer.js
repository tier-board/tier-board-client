import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'https://tier-board.herokuapp.com/api/v1/cost';
// Actions
export const COST_ADD = 'cost/ADD';
export const COST_ASYNC_ADD = 'cost/ASYNC_ADD';
export const COST_FETCH = 'cost/FETCH';
export const COST_UPDATE = 'cost/UPDATE';
export const COST_DELETE = 'cost/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
  case COST_ADD:
    localStorage.setItem('state', 'state');
    return [...state, payload];
  case COST_FETCH:
    return [...state, payload];
  case COST_ASYNC_ADD:
    return [...state, ...payload];
  case COST_UPDATE:  
    return state.map(cost => cost.id === payload.id ? payload : cost);
  case COST_DELETE:
    return state.filter(cost => cost.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const costAdd = (cost) => {
  cost.id = uuid();
  return dispatch => {
    superagent.post(url, cost)
      .then(res => {
        dispatch({type: COST_ADD, payload: res.body});
      });
  };
};

export const costAsyncAdd = (cost) => {
  return {
    type: COST_ASYNC_ADD,
    payload: cost,
  };
};
export const costFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((cost) => {
        console.log('fetch data: ', cost);
        dispatch(costAsyncAdd(cost));
      });
  };
};

export const costUpdate = (cost) => {
  return dispatch => {
    superagent.put(`${url}/${cost._id}`)
      .send(cost)
      .then(() => {
        dispatch({ 
          type: COST_UPDATE,
          payload: cost,
        });
      });
  };
   
};
export const costDelete = (cost) => {
  return dispatch => {
    superagent.delete(`${url}/${cost._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: COST_DELETE,
            payload: cost,
          });
      });
  };
};