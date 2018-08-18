import {
  LOAD_POPULAR_VIDEO,
  LOAD_GENRE_LIST,
  SEARCH_POPULAR_VIDEO,
  SET_CURRENT_VIDEO
} from "./actionType";
import { video } from "../../API";

const createAction = ({ type, payload }) => {
  return {
    type,
    payload
  };
};

const loadGenreList = () => async dispatch => {
  const res = await video.genres();
  dispatch(createAction({ type: LOAD_GENRE_LIST, payload: res.data.genres }));
};

const loadPopularVideo = page => async dispatch => {
  const res = await video.list(page);
  dispatch(
    createAction({ type: LOAD_POPULAR_VIDEO, payload: res.data.results })
  );
};

const searchPopularVideo = data => async dispatch => {
  const res = data.length ? await video.search(data) : await video.list(1);
  dispatch(
    createAction({ type: SEARCH_POPULAR_VIDEO, payload: res.data.results })
  );
};

const getMoreInfo = id => async dispatch => {
  const movie = await video.movie(id);
  const recommendations = await video.recommendations(id);
  const similar = await video.similar(id);
  const keywords = await video.keywords(id);
  dispatch(
    createAction({
      type: SET_CURRENT_VIDEO,
      payload: {
        movie: movie.data,
        recommendations: recommendations.data.results,
        similar: similar.data.results,
        keywords: keywords.data.keywords
      }
    })
  );
  return true;
};

export { loadGenreList, loadPopularVideo, searchPopularVideo, getMoreInfo };
