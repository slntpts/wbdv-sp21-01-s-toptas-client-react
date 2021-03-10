import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
// import {findModulesForCourse, createModule} from "../services/module-service";
import moduleService from "../services/module-service";
import lessonService from "../services/lesson-service";

const ModuleList = (
    {
        //STEP5-ModuleList is mapped in here and rendered again in modules.map(module => ..) below. Everything is rerendered.
        modules=[],
        createModule,//we are adding a new property here to invoke the CREATE_MODULE
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        console.log(courseId)
        findModulesForCourse(courseId)
    },[])

    return(<div>
        <h2>Module List</h2>
        <ul>
            <li>layout: {layout}</li>
            <li>courseId: {courseId}</li>
            <li>moduleId: {moduleId}</li>
        </ul>

        <ul className="list-group">
            {
                modules.map(module =>
                <li className ={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                    <EditableItem
                        to ={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                        key={module._id}
                        deleteItem={deleteModule}
                        updateItem={updateModule}
                        item={module}
                        active={module._id === moduleId}/>
                </li>
                )
            }
            <li className="list-group-item">
                {/*to be able to use this createModule here somebody needs to pass it as a property in this class.We do this with the dispatch (dtpm) below. */}
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)}

//STEP3-ModuleList grab the modules here, includes the new item.
const stpm = (state) => {//responsible for retrieving from the state
    return {
        modules: state.moduleReducer.modules// and map it to the property that expecting.
    }
}
//this dispatch is what invokes that reducer
const dtpm = (dispatch) => ({
    //This createModule is what we are expecting. connect (below) passes it to us. Connect passes it to use the property (createModule)
    //that we are expecting that is bound to this function and moduleList gets it in the function above in const ModuleList() so that we can invoke.
    createModule:(courseId) => {
        moduleService.createModule(courseId, {title: 'New Module'})
            .then(module => dispatch({type:"CREATE_MODULE", module: module}))//we are invoking the alert inside of the module-reducer CREATE_MODULE
    },
    updateModule: (module) => {
        moduleService.updateModule(module._id, module)
            .then(status => dispatch({type:"UPDATE_MODULE", updatedModule: module}))
    },
    deleteModule: (module) => {
        moduleService.deleteModule(module._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: module}))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({type: "FIND_MODULES_FOR_COURSE", modules: modules}))
        // topicService.findTopicsForLesson(undefined)
        //     .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics}))
    }
})

//STEP4-Map the module list in the moduleList array on top.
export default connect(stpm,dtpm)(ModuleList)//we connect it to the store by using "connect". Connect extracts the part
// of the state and maps it to property that moduleList expecting.