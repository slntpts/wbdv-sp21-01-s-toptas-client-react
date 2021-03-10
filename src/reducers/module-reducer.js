import React from 'react'

const initialState = {
    modules: [],
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            return {
                //STEP1-State is returned
                modules: [
                    ...state.modules,
                    action.module
                ]
                //if we add newModule here, the newModule would be added prepend
                //we are doing this to copy everything and just update the module.
            }
        case "DELETE_MODULE":
            return {
                ...state, // (sprader) copy entire state, because there is only modules, we can remove this state. Modules u zaten kopyaliyoruz alt satirda.
                modules: state.modules.filter(module => {
                    if (module._id !== action.moduleToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_MODULE":
            return {
                //iterate over arrays and if it matches with the module that we just modified, update it otherwise keep the old one.
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.updatedModule._id) {
                        return action.updatedModule
                    } else {
                        return module
                    }
                })
            }
        case "FIND_MODULES_FOR_COURSE":
            return{
                ...state,
                modules: action.modules
            }
            default:
            return state
    }
}

export default moduleReducer

