import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'http://localhost:3003/api/v1/quality';
// Actions
export const QUALITY_ADD = 'quality/ADD';
export const QUALITY_ASYNC_ADD = 'quality/ASYNC_ADD';
export const QUALITY_FETCH = 'quality/FETCH';
export const QUALITY_UPDATE = 'quality/UPDATE';
export const QUALITY_DELETE = 'quality/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
   let {type, payload} = action;
    switch (type) {
        case QUALITY_ADD:
        localStorage.setItem('state', 'state');
          return [...state, payload];
        case QUALITY_FETCH:
          return [...state, payload];
        case QUALITY_ASYNC_ADD:
          return [...state, ...payload];
        case QUALITY_UPDATE:  
          return state.map(quality => quality.id === payload.id ? payload : quality);
        case QUALITY_DELETE: 
          return state.filter(quality => quality.id !== payload.id);
        default: return state;
    }
}

// Action Creators
export const qualityAdd = (quality) => {
    console.log('addReducer', quality);
    quality.id = uuid();
    return dispatch => {
        superagent.post(url, quality)
          .then(res => {
            dispatch({type: QUALITY_ADD, payload: res.body})
          });
      };
};

export const qualityAsyncAdd = (quality) => {
    console.log('inside action creator', quality)
    return {
      type: QUALITY_ASYNC_ADD,
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
    }
}

export const qualityUpdate = (quality) => {
    return dispatch => {
        superagent.put(`${url}/${quality._id}`)
        .send(quality)
        .then(() => {
            dispatch({ 
                type: QUALITY_UPDATE,
                payload: quality,
            })
        })
    }
   
};
export const qualityDelete = (quality) => {
    return dispatch => {
      superagent.delete(`${url}/${quality._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
         {type: QUALITY_DELETE,
          payload: quality,
          })
      });
    }
}