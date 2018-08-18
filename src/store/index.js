import { combineReducers } from "redux";
import videoReducer from "./videos";

const reducers = combineReducers({
  video: videoReducer
});

export default reducers;
