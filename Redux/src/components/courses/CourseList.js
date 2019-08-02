import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseListHeader from "./CourseListHeader";

const CourseList = ({ courses, onDeleteClick, onSortClick }) => (
  <table className="table">
    <CourseListHeader onSortClick={onSortClick} />
    <tbody>
      {courses.map(course => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/courses/" + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(course)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onSortClick: PropTypes.func.isRequired
};

export default CourseList;
