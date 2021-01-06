import { FETCHING_PLANTS_START, FETCHING_PLANTS_SUCCESS, FETCHING_PLANTS_FAIL, FETCHING_USERPLANTS_START, FETCHING_USERPLANTS_SUCCESS, FETCHING_USERPLANTS_FAIL  } from "./../Actions/index";

const initialState = {
  plants: [],
  userPlants: [],
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
        isFetching: false
      });
    case FETCHING_PLANTS_FAIL :
      return ({
        ...state,
        error: action.payload,
        isFetching: false
      });
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
    default:
      return state;
  }
};