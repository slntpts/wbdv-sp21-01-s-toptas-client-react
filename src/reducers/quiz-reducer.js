import React from 'react'

const initialState = {
    quizzes: []
}

const quizReducer = (state = initialState, action) => {
    switch (action.type){

        case "FIND_QUIZZES":
            return{
                ...state,
                quizzes: action.quizzes
            }
        default:
            return state
    }
}

export default quizReducer

