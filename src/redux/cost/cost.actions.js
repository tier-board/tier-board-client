import superagent from 'superagent';
import uuid from 'uuid';

import costActionTypes from './cost.types';

const url =  'https://tier-board.herokuapp.com/api/v1/cost';

export const costAdd = (cost) => {
  cost.id = uuid();
  return dispatch => {
    superagent.post(url, cost)
      .then(res => {
        dispatch({type: costActionTypes.COST_ADD, payload: res.body});
      });
  };
};
  
export const costAsyncAdd = (cost) => {
  return {
    type: costActionTypes.COST_ASYNC_ADD,
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
          type: costActionTypes.COST_UPDATE,
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
          {type: costActionTypes.COST_DELETE,
            payload: cost,
          });
      });
  };
};