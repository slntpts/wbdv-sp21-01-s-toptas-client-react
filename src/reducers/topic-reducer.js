import React from 'react'

const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type){
        case "CREATE_TOPIC":
            return{
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    if(topic._id !== action.topicToDelete._id){
                        return true
                    }else{
                        return false
                    }
                })
            }
        case "UPDATE_TOPIC":
            return{
                ...state,
                topics: state.topics.map(topic => {
                    if(topic._id === action.topicToUpdate._id){
                        return action.topicToUpdate
                    }else{
                        return topic
                    }
                })
            }
        case "FIND_TOPICS":
            return{
                ...state,//copy the old state
                topics: action.topics//override topics
            }
        default:
            return state
    }
}

export default topicReducer

