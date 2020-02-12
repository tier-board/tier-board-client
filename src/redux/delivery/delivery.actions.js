import uuid from 'uuid/v4';
import superagent from 'superagent';
import deliveryActionTypes from './delivery.types';
const url =  'https://tier-board.herokuapp.com/api/v1/delivery';


export const deliveryAdd = (delivery) => {
  console.log('addReducer', delivery);
  delivery.id = uuid();
  return dispatch => {
    superagent.post(url, delivery)
      .then(res => {
        dispatch({type: deliveryActionTypes.DELIVERY_ADD, payload: res.body});
      });
  };
};
  
export const deliveryAsyncAdd = (delivery) => {
  console.log('inside action creator', delivery);
  return {
    type: deliveryActionTypes.DELIVERY_ASYNC_ADD,
    payload: delivery,
  };
};
export const deliveryFetch = () => {
  return dispatch => {
    fetch(url)
      .then(function(res) { 
        return res.json();
      })
      .then((delivery) => {
        console.log('fetch data: ', delivery);
        dispatch(deliveryAsyncAdd(delivery));
      });
  };
};
  
export const deliveryUpdate = (delivery) => {
  return dispatch => {
    superagent.put(`${url}/${delivery._id}`)
      .send(delivery)
      .then(() => {
        dispatch({ 
          type: deliveryActionTypes.DELIVERY_UPDATE,
          payload: delivery,
        });
      });
  };
     
};
export const deliveryDelete = (delivery) => {
  return dispatch => {
    superagent.delete(`${url}/${delivery._id}`)
      .then(res => {
        return res.text;
      })
      .then(() => {
        dispatch(
          {type: deliveryActionTypes.DELIVERY_DELETE,
            payload: delivery,
          });
      });
  };
};