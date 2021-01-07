import axiosWithAuth from "./../utils/axiosWithAuth";

export const FETCHING_USERPLANTS_START = 'FETCHING_USERPLANTS_START';
export const FETCHING_USERPLANTS_SUCCESS = 'FETCHING_USERPLANTS_SUCCESS';
export const FETCHING_USERPLANTS_FAIL = 'FETCHING_USERPLANTS_FAIL';

export const FETCHING_PLANT = 'FETCHING_PLANT';

export const POST_PLANT_FAILURE = 'POST_PLANT_FAILURE'
export const PUT_PLANT_FAILURE = 'PUT_PLANT_FAILURE'
export const DELETE_PLANT_FAILURE = 'DELETE_PLANT_FAILURE'

export const postPlant = (plant) => {
  return (dispatch) => {
      axiosWithAuth()
        .post('/plants', plant)
        .then((res)=>{
          console.log(res);
        })
        .catch(err => {
            console.log(err.message)
            dispatch({ type: POST_PLANT_FAILURE, payload: err.message })
        })
  }
}
export const putPlant = (plant) => {
  return (dispatch) => {
      axiosWithAuth()
        .put(`/plants/${plant.id}`, plant)
        .then((res)=>{
          console.log(res);
        })
        .catch(err => {
            console.log(err.message)
            dispatch({ type: PUT_PLANT_FAILURE, payload: err.message })
        })
  }
}
export const deletePlant = (plant) => {
  return (dispatch) => {
      axiosWithAuth()
        .delete(`/plants/${plant.id}`, plant)
        .then((res)=>{
          console.log(res);
        })
        .catch(err => {
            console.log(err.message)
            dispatch({ type: DELETE_PLANT_FAILURE, payload: err.message })
        })
  }
}

export const getUserPlants = () => {
  return (dispatch => {
    dispatch({type:FETCHING_USERPLANTS_START});
      axiosWithAuth()
        .get(`/users/plants`)
        .then(res=> {
          // console.log(res);
          dispatch({type:FETCHING_USERPLANTS_SUCCESS, payload: res.data});
          })
        .catch(err => {
          dispatch({type:FETCHING_USERPLANTS_FAIL, payload: err.response.message});
        });
  });
}

// export const logOut = () => {
//   return (dispatch => {
//     axiosWithAuth()

//   })
// }

export const getPlant = (plant) => {
  return {type:FETCHING_PLANT, payload: plant}
}
