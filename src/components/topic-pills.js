import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../services/topic-service'

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "TOPIC A"},
        ],//in case the function does not receive the lessons, to pretend it to be undefined, we initialize it here.
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic,
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();//useParams parses the url and allows us to grab the values in url
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON")
        console.log(lessonId)
        findTopicsForLesson(lessonId)
    }, [lessonId, moduleId])//we stop infinite loop by adding this empty array []
                        //if the moduleId has changed trigger useEffect, otherwise don't.
    return (<div>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            key={topic._id}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}
                            active={topic._id === topicId}
                        />{/*instead of just adding lesson.title, we are using generic EditableItem*/}
                    </li>
                )
            }
            {
                lessonId &&
            <li>
                <i onClick={() => {createTopicForLesson(lessonId)}} className="fas fa-plus"></i>
            </li>
            }
        </ul>
    </div>)
}

const stpm = (state) => {//responsible for retrieving from the state
    return {
        topics: state.topicReducer.topics// and map it to the property that expecting.We want lessons to be showed up under the topicReducer.
    }
}
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        console.log("LOAD LESSONS FOR MODULE")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)//when we call the findLessonsForModule from here, we get promise from lesson-service
            //while the json object is parsing in there. Dispatch here calls all the reducers and passes it in the json object down here
            //we have module reducer, lesson reducer, we call all and goes to the module reducer and check if it "FIND_LESSONS" fits with any of "FIND_MODULES_FOR_COURSE"
            //"CREATE_MODULE", "UPDATE_MODULE" etc. if any of them fits then check the lesson reducer.
             .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics: topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService.createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
               type: "CREATE_TOPIC",
               topic: topic
            }))
    },
    updateTopic: (topicToUpdate) => {
        topicService.updateTopic(topicToUpdate)
            .then(status => dispatch({type:"UPDATE_TOPIC", topicToUpdate: topicToUpdate}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
})

export default connect(stpm,dtpm)(TopicPills)//we connect it to the store by using "connect". Connect extracts the part
// of the state and maps it to property that lessonTabs expecting.