import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  /* Стрелочная функция, чтобы не биндить функцию в конструкторе */
  handleChange = event => {
    /* Клонируем state, чтобы сохранять его неизменным */
    const course = { ...this.state.course, title: event.target.value };

    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3> Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// функция связывает данные в store и props в компоненте
function mapStateToProps(state) {
  // Будьте точны. Запрашивайте только данные, которые нужны компоненту.
  // Компонент перерендерится когда изменятся данные в store
  return {
    courses: state.courses
  };
}

// функция оборачивае все вызовы action в dispatch
// и возвращает один объект actions
function mapDispatchToProps(dispatch) {
  // обязательно вызывайте dispatch, иначе ничего не произойдет
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// connect автоматически добавляет dispatch в props,
// если мы опускаем mapDispatchToProps (2-й аргумент connect)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
