import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function sortReducer(state = initialState.sort, action) {
  switch (action.type) {
    case types.CHANGE_COURSES_SORT:
      return {
        ...state,
        courses: {
          header: action.header,
          direction:
            // если кликнули на тот же самый заголовок то меняем направление на противоположное
            state.courses.header === action.header
              ? state.courses.direction * -1
              : 1
        }
      };
    default:
      return state;
  }
}
