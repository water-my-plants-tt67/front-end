import { FETCHING_USERPLANTS_START, FETCHING_USERPLANTS_SUCCESS, FETCHING_USERPLANTS_FAIL, POST_PLANT_FAILURE  } from "./../Actions/index";

const initialState = {
  plants: [],
  userPlants: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERPLANTS_START:
        return ({
          ...state,
          isFetching: true,
          error: ''
        });
     case FETCHING_USERPLANTS_SUCCESS :
        return ({
          ...state,
          userPlants: action.payload,
          isFetching: false
        });
     case FETCHING_USERPLANTS_FAIL :
        return ({
          ...state,
          error: action.payload,
          isFetching: false
        });
     case POST_PLANT_FAILURE:
       return {
           ...state,
           error: action.payload,
       }    
    default:
      return state;
  }
};