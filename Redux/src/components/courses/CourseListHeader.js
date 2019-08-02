import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";
import "./triangles.css";

const CourseListHeader = ({ actions, sort }) => {
  const headers = [
    { title: "Title" },
    { authorName: "Author" },
    { category: "Category" }
  ];
  const handleSortClick = event => {
    const header = event.target.dataset.header;
    actions.sortCourses(header);
  };

  return (
    <thead>
      <tr>
        <th />
        {headers.map(h => {
          const short = Object.keys(h)[0];
          const full = h[short];
          return (
            <th key={short} data-header={short} onClick={handleSortClick}>
              {full} &nbsp;
              {sort.header === short ? (
                sort.direction > 0 ? (
                  <span className="triangle-up" />
                ) : (
                  <span className="triangle-down" />
                )
              ) : (
                ""
              )}
            </th>
          );
        })}
        <th />
      </tr>
    </thead>
  );
};

CourseListHeader.propTypes = {
  actions: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    sort: state.sort.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      sortCourses: bindActionCreators(courseActions.sortCourses, dispatch)
    }
  };
}

// connect автоматически добавляет dispatch в props,
// если мы опускаем mapDispatchToProps (2-й аргумент connect)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseListHeader);
