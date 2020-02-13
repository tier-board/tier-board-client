import uuid from 'uuid/v4';
import superagent from 'superagent';
import qualityActionTypes from './quality.types';
const url =  'https://tier-board.herokuapp.com/api/v1/quality';

export const qualityAdd = (quality) => {
  console.log('addReducer', quality);
  quality.id = uuid();
  return dispatch => {
    superagent.post(url, quality)
      .then(res => {
        dispatch({type: qualityActionTypes.QUALITY_ADD, payload: res.body});
      });
  };
};
  
export const qualityAsyncAdd = (quality) => {
  console.log('inside action creator', quality);
  return {
    type: qualityActionTypes.QUALITY_ASYNC_ADD,
    payload: quality,
  };
};
export const qualityFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((quality) => {
        console.log('fetch data: ', quality);
        dispatch(qualityAsyncAdd(quality));
      });
  };
};
  
export const qualityUpdate = (quality) => {
  return dispatch => {
    superagent.put(`${url}/${quality._id}`)
      .send(quality)
      .then(() => {
        dispatch({ 
          type: qualityActionTypes.QUALITY_UPDATE,
          payload: quality,
        });
      });
  };
     
};
export const qualityDelete = (quality) => {
  return dispatch => {
    superagent.delete(`${url}/${quality._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: qualityActionTypes.QUALITY_DELETE,
            payload: quality,
          });
      });
  };
};