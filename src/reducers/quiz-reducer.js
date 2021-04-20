import React from 'react'

const initialState = {
    quizzes: [],
    attempts: []
}

const quizReducer = (state = initialState, action) => {
    switch (action.type){

        case "FIND_QUIZZES":
            return{
                ...state,
                quizzes: action.quizzes
            }
        case "FIND_ATTEMPTS":
            return{
                ...state,
                attempts: action.attempts
            }
        default:
            return state
    }
}

export default quizReducer

