import uuid from 'uuid/v4';
import superagent from 'superagent';
import moraleActionTypes from './morale.types';
const url =  'https://tier-board.herokuapp.com/api/v1/morale';

export const moraleAdd = (morale) => {
  console.log('addReducer', morale);
  morale.id = uuid();
  return dispatch => {
    superagent.post(url, morale)
      .then(res => {
        dispatch({type: moraleActionTypes.MORALE_ADD, payload: res.body});
      });
  };
};
  
export const moraleAsyncAdd = (morale) => {
  console.log('inside action creator', morale);
  return {
    type: moraleActionTypes.MORALE_ASYNC_ADD,
    payload: morale,
  };
};
export const moraleFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((morale) => {
        console.log('fetch data: ', morale);
        dispatch(moraleAsyncAdd(morale));
      });
  };
};
  
export const moraleUpdate = (morale) => {
  return dispatch => {
    superagent.put(`${url}/${morale._id}`)
      .send(morale)
      .then(() => {
        dispatch({ 
          type: moraleActionTypes.MORALE_UPDATE,
          payload: morale,
        });
      });
  };
     
};
export const moraleDelete = (morale) => {
  return dispatch => {
    superagent.delete(`${url}/${morale._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: moraleActionTypes.MORALE_DELETE,
            payload: morale,
          });
      });
  };
};