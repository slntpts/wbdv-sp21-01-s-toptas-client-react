import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
  <div>

      <thead>
            <tr>
                <th class="col-md-4">Recent Documents</th>
                <th class="col-md-3 d-none d-md-table-cell d-lg-table-cell">Owned by me</th>
                <th class="col-md-1 d-table-cell"><i class="fa fa-folder"></i></th>
                <th class="col-md-1 d-table-cell"><i class="fa fa-sort col-md-1"></i></th>
                <Link to="/courses/table">
                    <i className="fas fa-list fa-2x float-right"></i>
                </Link>
            </tr>
      </thead>

    <div className="row">
    {
      courses.map(course =>
        <CourseCard
            course={course}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
        />
      )
    }
    </div>
  </div>


export default CourseGrid
