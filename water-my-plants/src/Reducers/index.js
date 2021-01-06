import { FETCHING_PLANTS_START, FETCHING_PLANTS_SUCCESS, FETCHING_PLANTS_FAIL, POST_PLANT_FAILURE, POST_PLANT_SUCCESS } from "./../Actions/index";

const initialState = {
  plants: [],
  plant:{
    nickname:'',
    species: '',
    h2oFrequency: ''
  },
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PLANTS_START:
      return ({
        ...state,
        isFetching: true,
        error: ''
      });
      case FETCHING_PLANTS_SUCCESS :
        return ({
          ...state,
          plants: action.payload,
          plant: action.payload,
        isFetching: false
      });
    case FETCHING_PLANTS_FAIL :
      return ({
        ...state,
        error: action.payload
      });
      case POST_PLANT_SUCCESS:
        return {
            ...state,
            plant: state.plant,
         }
   case POST_PLANT_FAILURE:
       return {
           ...state,
           error: action.payload,
       }    
    default:
      return state;
  }
};