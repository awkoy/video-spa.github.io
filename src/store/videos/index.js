import initialState from "./initialState";
import {
  LOAD_POPULAR_VIDEO,
  SEARCH_POPULAR_VIDEO,
  LOAD_GENRE_LIST,
  SET_CURRENT_VIDEO
} from "./actionType";

const videoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_POPULAR_VIDEO:
      return {
        ...state,
        popularVideoList: [...state.popularVideoList, ...action.payload]
      };
    case SEARCH_POPULAR_VIDEO:
      return {
        ...state,
        popularVideoList: action.payload
      };
    case LOAD_GENRE_LIST:
      return {
        ...state,
        popularVideoGenres: action.payload
      };
    case SET_CURRENT_VIDEO:
      const { movie, recommendations, similar, keywords } = action.payload;
      return {
        ...state,
        movie,
        recommendations,
        similar,
        keywords
      };
    default:
      return state;
  }
};

export default videoReducer;
