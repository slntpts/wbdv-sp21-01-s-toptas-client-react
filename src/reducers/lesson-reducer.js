import React from 'react'

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type){
        case "CREATE_LESSON":
            return{
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id !== action.lessonToDelete._id){
                        return true
                    }else{
                        return false
                    }
                })
            }
        case "UPDATE_LESSON":
            return{
                ...state,
                lessons: state.lessons.map(lesson => {
                    if(lesson._id === action.lessonToUpdate._id){
                        return action.lessonToUpdate
                    }else{
                        return lesson
                    }
                })
            }
        case "FIND_LESSONS":
            return{
                ...state,//copy the old state
                lessons: action.lessons//override lessons
            }
        default:
            return state
    }
}

export default lessonReducer

