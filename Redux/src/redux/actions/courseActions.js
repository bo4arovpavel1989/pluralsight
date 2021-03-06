import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCourseSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function deleteCpurseOptimistic(course) {
  return {
    type: types.DELETE_COURSE_OPTIMISTIC,
    course
  };
}

export function sortCoursesAction({ sort, authors }) {
  return { type: types.SORT_COURSES_ACTION, sort, authors };
}

export function changeSort(header) {
  return { type: types.CHANGE_COURSES_SORT, header };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    dispatch(deleteCpurseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}

export function sortCourses(header) {
  return function(dispatch, getState) {
    dispatch(changeSort(header));

    const { sort, authors } = getState();

    dispatch(sortCoursesAction({ sort, authors }));
  };
}
