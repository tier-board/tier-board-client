import uuid from 'uuid/v4';
import superagent from 'superagent';
import rollupActionTypes from './rollup.types';
const url =  'https://tier-board.herokuapp.com/api/v1/rollup';


export const rollupAdd = (rollup) => {
  console.log('addReducer', rollup);
  rollup.id = uuid();
  return dispatch => {
    superagent.post(url, rollup)
      .then(res => {
        dispatch({type: rollupActionTypes.ROLLUP_ADD, payload: res.body});
      });
  };
};

export const rollupAsyncAdd = (rollup) => {
  console.log('inside action creator', rollup);
  return {
    type: rollupActionTypes.ROLLUP_ASYNC_ADD,
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
          type: rollupActionTypes.ROLLUP_UPDATE,
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
          {type: rollupActionTypes.ROLLUP_DELETE,
            payload: rollup,
          });
      });
  };
};