import axios from 'axios';

export const FETCHING_PLANTS_START = 'FETCHING_PLANTS_START';
export const FETCHING_PLANTS_SUCCESS = 'FETCHING_PLANTS_SUCCESS';
export const FETCHING_PLANTS_FAIL = 'FETCHING_PLANTS_FAIL';
export const FETCHING_USERPLANTS_START = 'FETCHING_USERPLANTS_START';
export const FETCHING_USERPLANTS_SUCCESS = 'FETCHING_USERPLANTS_SUCCESS';
export const FETCHING_USERPLANTS_FAIL = 'FETCHING_USERPLANTS_FAIL';

export const getPlants = () => {
  return (dispatch => {
    dispatch({type:FETCHING_PLANTS_START});
      axios
        .get(`https://tt67-bw.herokuapp.com/dummydata`)
        .then(res=> {
          dispatch({type:FETCHING_PLANTS_SUCCESS, payload: res.data});
          })
        .catch(err => {
          dispatch({type:FETCHING_PLANTS_FAIL, payload: err.response.message});
        });
  });
}

export const getUserPlants = () => {
  return (dispatch => {
    dispatch({type:FETCHING_USERPLANTS_START});
      axios
        .get(`https://tt67-bw.herokuapp.com/users/plants`)
        .then(res=> {
          dispatch({type:FETCHING_USERPLANTS_SUCCESS, payload: res.data});
          })
        .catch(err => {
          dispatch({type:FETCHING_USERPLANTS_FAIL, payload: err.response.message});
        });
  });
}