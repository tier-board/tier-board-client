import uuid from 'uuid/v4';
import superagent from 'superagent';
import safetyActionTypes from './safety.types';
//const url =  'https://tier-board.herokuapp.com/api/v1/safety';
const url =  'https://localhost:3003/api/v1/safety';

export const safetyAdd = (safety) => {
  safety.id = uuid();
  return dispatch => {
    superagent.post(url, safety)
      .then(res => {
        dispatch({type: safetyActionTypes.SAFETY_ADD, payload: res.body});
      });
  };
};
  
export const safetyAsyncAdd = (safety) => ({
  type: safetyActionTypes.SAFETY_ASYNC_ADD,
  payload: safety,
});
  
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
          type: safetyActionTypes.SAFETY_UPDATE,
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
          {type: safetyActionTypes.SAFETY_DELETE,
            payload: safety,
          });
      });
  };
};