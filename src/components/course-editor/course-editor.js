import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import './course-editor.css';
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";

import {findCourseById} from "../../services/course-service";
import WidgetList from "./widgets/widget-list";

const CourseEditor = ({history, params}) =>//params parses the actual link to the link that we want to see on url.
{
    const{layout, courseId, moduleId} = useParams();

    const [courseTitle, setCourseTitle] = useState();

    useEffect(() => {

        findCourseById(courseId).then(course => setCourseTitle(course.title))

    }, [courseId])

    //we use explicit return because we want to do more than one thing.
    return (
        <div>
            <h1>
                {courseTitle}
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right">
                </i>
            </h1>

            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <br/>
                    <TopicPills/>
                    <br/>
                    <WidgetList/>
                </div>
            </div>

            <br/>
        </div>
    )
}

export default CourseEditor