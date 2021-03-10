import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service'
import moduleService from "../services/module-service";
//will bind with findLessonsForModule from lesson-service.js

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "LESSON A"},
        ],//in case the function does not receive the lessons, to pretend it to be undefined, we initialize it here.
        findLessonsForModule,
        createLessonForModule,
        updateLesson,
        deleteLesson,
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();//useParams parses the url and allows us to grab the values in url
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE")
        console.log(moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
            findLessonsForModule(moduleId)
        }
    }, [moduleId])//we stop infinite loop by adding this empty array []
                        //if the moduleId has changed trigger useEffect, otherwise don't.
    return (<div>
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            key={lesson._id}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}
                            active={lesson._id === lessonId}
                        />{/*instead of just adding lesson.title, we are using generic EditableItem*/}
                    </li>
                )
            }
            <li>
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => {//responsible for retrieving from the state
    return {
        lessons: state.lessonReducer.lessons// and map it to the property that expecting.We want lessons to be showed up under the lessonReducer.
    }
}
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)//when we call the findLessonsForModule from here, we get promise from lesson-service
            //while the json object is parsing in there. Dispatch here calls all the reducers and passes it in the json object down here
            //we have module reducer, lesson reducer, we call all and goes to the module reducer and check if it "FIND_LESSONS" fits with any of "FIND_MODULES_FOR_COURSE"
            //"CREATE_MODULE", "UPDATE_MODULE" etc. if any of them fits then check the lesson reducer.
             .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons: lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
               type: "CREATE_LESSON",
               lesson: lesson
            }))
    },
    updateLesson: (lessonToUpdate) => {
        lessonService.updateLesson(lessonToUpdate)
            .then(status => dispatch({type:"UPDATE_LESSON", lessonToUpdate: lessonToUpdate}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
})

export default connect(stpm,dtpm)(LessonTabs)//we connect it to the store by using "connect". Connect extracts the part
// of the state and maps it to property that lessonTabs expecting.