import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import './course-manager.css';

class CourseManager extends React.Component {
  state = {
    courses: [],
    qwe: 123,
    sdf: 456
  }

  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)

          // courses: prevState.courses.map(c => {
          //   if(c._id === course._id) {
          //     return course
          //   } else {
          //     return c
          //   }
          // })
        })))
  }

  componentDidMount = () =>
    // findAllCourses()
    //     .then(actualCourses => this.setState({
    //       courses: actualCourses
    //     }))
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = () => {
    const newCourse = {
      title: this.refs.newCourseInp.value==="" ? "New Course" : this.refs.newCourseInp.value,//reaching the name with refs
      owner: "me",
      lastModified: new Date().toLocaleString()
    }

    this.refs.newCourseInp.value = ""

    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
          // const newCourses = this.state.courses
          //     .filter(course => course !== courseToDelete)
          // this.setState({
          //   courses: newCourses
          // })
          // this.setState((prevState) => {
          //   // let nextState = {...prevState}
          //   // nextState.courses =
          //   //     prevState
          //   //         .courses
          //   //         .filter(course => course !== courseToDelete)
          //
          //   let nextState = {
          //     ...prevState,
          //     courses: prevState.courses.filter
          //               (course => course !== courseToDelete)
          //   }
          //
          //   return nextState
          // })

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  render() {
    return(
      <div>

          <div className="row wbdv-sticky-top wbdv-padding-10px">
              <div className="col-1">
                  <i className="fa fa-bars fa-2x"></i>
              </div>
              <div className="col-2">
                  <h4>Course Manager</h4>
              </div>
              <div className="col-7">
                  <input
                    ref="newCourseInp"
                    className="form-control"/>
              </div>

              <div className="col-1">
                  <i onClick={this.addCourse} className="fa fa-plus-circle fa-2x color-me-red"></i>
              </div>

              <div className="col-1">
                  <Link to="/">
                      <i className="fas fa-2x fa-home float-right"></i>
                      {/*<i className="fas fa-2x fa-list float-left"></i>*/}
                  </Link>
              </div>
          </div>


        {/*<h1>Course Manager</h1>*/}


        <div className="wbdv-padding-30px">
            {/*<button onClick={this.addCourse}>Add Course</button>*/}
        </div>

        <div className="wbdv-plus-add-course">
            <i onClick={this.addCourse} className="fa fa-plus-circle fa-3x color-me-red"></i>
        </div>


        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              deleteCourse={this.deleteCourse}
              updateCourse={this.updateCourse}
              courses={this.state.courses}/>
        </Route>
          {/*<Route path="/courses/editor">*/}
          {/*    <CourseEditor/>*/}
          {/*</Route>*/}
          {/*<Route path="/courses/editor"*/}
          {/*       render={(props) => <CourseEditor props={props}/>}>*/}
          {/*</Route>*/}
          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
      </div>

    )
  }
}

export default CourseManager
