import moduleService from "../services/module-service";

    export const CREATE_MODULE = "CREATE_MODULE"
    export const DELETE_MODULE = "DELETE_MODULE"
    export const UPDATE_MODULE = "UPDATE_MODULE"
    export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

    export const createModule = (dispatch, courseId) => {
    moduleService.createModule(courseId, {title: 'New Module'})
        .then(module => dispatch({type:CREATE_MODULE, module: module}))//we are invoking the alert inside of the module-reducer CREATE_MODULE
}
    export const updateModule = (dispatch, module) => {
    moduleService.updateModule(module._id, module)
        .then(status => dispatch({type:UPDATE_MODULE, updatedModule: module}))
}
    export const deleteModule = (dispatch, module) => {
    moduleService.deleteModule(module._id)
        .then(status => dispatch({type: DELETE_MODULE, moduleToDelete: module}))
}
    export const findModulesForCourse = (dispatch, courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({type: FIND_MODULES_FOR_COURSE, modules: modules}))
    // topicService.findTopicsForLesson(undefined)
    //     .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics}))
}

const moduleActions = {
        createModule, findModulesForCourse, updateModule, deleteModule
}

export default moduleActions;