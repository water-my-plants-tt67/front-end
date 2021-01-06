import axios from 'axios';

export const FETCHING_PLANTS_START = 'FETCHING_PLANTS_START';
export const FETCHING_PLANTS_SUCCESS = 'FETCHING_PLANTS_SUCCESS';
export const FETCHING_PLANTS_FAIL = 'FETCHING_PLANTS_FAIL';

export const FETCHING_USERPLANTS_START = 'FETCHING_USERPLANTS_START';
export const FETCHING_USERPLANTS_SUCCESS = 'FETCHING_USERPLANTS_SUCCESS';
export const FETCHING_USERPLANTS_FAIL = 'FETCHING_USERPLANTS_FAIL';

export const POST_PLANT_SUCCESS = 'POST_PLANT_SUCCESS'
export const POST_PLANT_FAILURE = 'POST_PLANT_FAILURE'


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
export const postPlant = (plant) => {
  return (dispatch) => {
      axios.post('https://tt67-bw.herokuapp.com/users/plants', plant)
          .then(res => {
              console.log(res)
              dispatch({ type: POST_PLANT_SUCCESS, payload: res.data })
          })
          .catch(err => {
              console.log(err.message)
              dispatch({ type: POST_PLANT_FAILURE, payload: err.message })
          })
  }
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

