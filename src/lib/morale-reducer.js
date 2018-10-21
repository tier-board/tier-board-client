import uuid from 'uuid/v4';
import superagent from 'superagent';
const url =  'http://localhost:3003/api/v1/morale';
// Actions
export const MORALE_ADD = 'morale/ADD';
export const MORALE_ASYNC_ADD = 'morale/ASYNC_ADD';
export const MORALE_FETCH = 'morale/FETCH';
export const MORALE_UPDATE = 'morale/UPDATE';
export const MORALE_DELETE = 'morale/DELETE';

// Reducer
let initialState = [];
export default (state = initialState, action) => {
   let {type, payload} = action;
    switch (type) {
        case MORALE_ADD:
        localStorage.setItem('state', 'state');
          return [...state, payload];
        case MORALE_FETCH:
          return [...state, payload];
        case MORALE_ASYNC_ADD:
          return [...state, ...payload];
        case MORALE_UPDATE:  
          return state.map(morale => morale.id === payload.id ? payload : morale);
        case MORALE_DELETE: 
          return state.filter(morale => morale.id !== payload.id);
        default: return state;
    }
}

// Action Creators
export const moraleAdd = (morale) => {
    console.log('addReducer', morale);
    morale.id = uuid();
    return dispatch => {
        superagent.post(url, morale)
          .then(res => {
            dispatch({type: MORALE_ADD, payload: res.body})
          });
      };
};

export const moraleAsyncAdd = (morale) => {
    console.log('inside action creator', morale)
    return {
      type: MORALE_ASYNC_ADD,
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
    }
}

export const moraleUpdate = (morale) => {
    return dispatch => {
        superagent.put(`${url}/${morale._id}`)
        .send(morale)
        .then(() => {
            dispatch({ 
                type: MORALE_UPDATE,
                payload: morale,
            })
        })
    }
   
};
export const moraleDelete = (morale) => {
    return dispatch => {
      superagent.delete(`${url}/${morale._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
         {type: MORALE_DELETE,
          payload: morale,
          })
      });
    }
}