import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ numCourses }) => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses ({numCourses})
      </NavLink>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    numCourses: state.courses.length
  };
}

Header.propTypes = {
  numCourses: PropTypes.number.isRequired
};

// connect автоматически добавляет dispatch в props,
// если мы опускаем mapDispatchToProps (2-й аргумент connect)
export default connect(mapStateToProps)(Header);
