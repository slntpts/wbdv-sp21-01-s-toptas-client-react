import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './course-table.css';

export default class CourseTable
  extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(

      <div className="row table-responsive">

        <table className="table table-striped table-fixed table-hover table-condensed">
          {/*<CourseRow title="CS1234" owner="alice" lastModified={"1/12/34"}/>*/}
          {/*<CourseRow title="CS2345" owner="bob"   lastModified={"2/23/24"}/>*/}
          {/*<CourseRow title="CS3456" owner="charlie" lastModified={"3/22/14"}/>*/}

          <thead>
              <tr>
                  <th class="col-md-4">Title</th>
                  <th class="col-md-3 d-none d-lg-block">Owned by</th>
                  <th class="col-md-2 d-none d-sm-none d-md-none d-lg-block">Last modified</th>
                  <th class="col-md-1"><i class="fa fa-folder"></i></th>
                  <th class="col-md-1"><i class="fa fa-sort col-md-1"></i></th>
                  <th><Link to="/courses/grid">
                        <i class = "col-md-1" className="fas fa-2x fa-th"></i>
                  </Link></th>
              </tr>
          </thead>
          <tbody>

          {
            this.props.courses.map((course, ndx) =>
              <CourseRow
                updateCourse={this.props.updateCourse}
                deleteCourse={this.props.deleteCourse}
                key={ndx}
                course={course}
                title={course.title}
                owner={course.owner}
                lastModified={course.lastModified}
              />)
          }
          </tbody>
        </table>
      </div>
    )
  }
}
