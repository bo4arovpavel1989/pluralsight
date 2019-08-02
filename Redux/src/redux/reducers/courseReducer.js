import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { coursesSortFn } from "../../utils";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      /* клонируем state и action.course */
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => action.course.id !== course.id);
    case types.SORT_COURSES_ACTION:
      return state
        .map(course => ({
          ...course,
          authorName: action.authors.find(val => val.id === course.authorId)
            .name
        }))
        .sort((a, b) =>
          coursesSortFn(a, b, action.sort.courses, action.authors)
        );
    default:
      return state;
  }
}
