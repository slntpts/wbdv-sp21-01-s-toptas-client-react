import React from 'react'

const initialState = {
    questions: []
}

const questionReducer = (state = initialState, action) => {
    switch (action.type){

        case "FIND_QUESTIONS":
            return{
                ...state,
                questions: action.questions
            }
        default:
            return state
    }
}

export default questionReducer