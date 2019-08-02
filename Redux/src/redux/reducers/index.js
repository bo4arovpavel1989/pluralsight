import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";
import sort from "./sortReducer";

// называем редьюсеры согласно тому как они называются в store
const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
  sort
});

export default rootReducer;
