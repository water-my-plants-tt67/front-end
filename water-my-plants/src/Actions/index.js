import axios from 'axios';

export const FETCHING_PLANTS_START = 'FETCHING_PLANTS_START';
export const FETCHING_PLANTS_SUCCESS = 'FETCHING_PLANTS_SUCCESS';
export const FETCHING_PLANTS_FAIL = 'FETCHING_PLANTS_FAIL';

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

// export const getUserPlants = () => {
//   return (dispatch => {
//     dispatch({type:FETCHING_PLANTS_START});
//       axios
//         .get(`https://tt67-bw.herokuapp.com/dummydata`)
//         .then(res=> {
//           dispatch({type:FETCHING_PLANTS_SUCCESS, payload: res.data});
//           })
//         .catch(err => {
//           dispatch({type:FETCHING_PLANTS_FAIL, payload: err.response.message});
//         });
//   });
// }