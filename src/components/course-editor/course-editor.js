import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import './course-editor.css';
import moduleReducer from "../../reducers/module-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import lessonReducer from "../../reducers/lesson-reducer";
import LessonTabs from "./lesson-tabs";
import topicReducer from "../../reducers/topic-reducer";
import TopicPills from "./topic-pills";
import {findCourseById} from "../../services/course-service";
import WidgetList from "./widgets/widget-list";

const reducer = combineReducers({
    //combine all reducer in one single reducer, as map-value pairs. We will determine which one we are gonna use.
    //and once we do that we provide reducer as a top reducer to the createStore.
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)//we grab the store from module reducer.
//STEP2- and store goes to the <ModuleList/> below

const CourseEditor = ({history, params}) =>//params parses the actual link to the link that we want to see on url.
{
    const{layout, courseId, moduleId} = useParams();

    const [courseTitle, setCourseTitle] = useState();

    useEffect(() => {

        findCourseById(courseId).then(course => setCourseTitle(course.title))

    }, [courseId])

    //we use explicit return because we want to do more than one thing.
    return (
        <Provider store={store}>

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
    </Provider>
    )
}

export default CourseEditor