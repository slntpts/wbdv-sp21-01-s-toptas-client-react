import React from 'react'

const initialState = {
    widgets: [{type: "HEADING", size: 1, text: "Empty Widget", id: undefined}]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type){

        case "CREATE_WIDGET":
            return{
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if(widget.id !== action.widgetToDelete){
                        return true
                    }else{
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            console.log("[WIDGET REDUCER] - HEADER UPDATED:" + action.widgetToUpdate.size)
            return{
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widgetToUpdate.id){
                        return action.widgetToUpdate
                    }else{
                        return widget
                    }
                })
            }
        case "FIND_WIDGETS":
            return{
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer