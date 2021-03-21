import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../../services/widget-service'

const WidgetList = (
    {
        widgets = [{type: "HEADING", size: 1, text: "Empty Widget", id: undefined}],
        findWidgetsForTopic,
        createWidgetForTopic,
        updateWidget,
        deleteWidget,
    }) => {
    const{layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams()
    useEffect(() => {
        console.log("LOAD WIDGETS FOR TOPIC")
        findWidgetsForTopic(topicId)
    }, [topicId, lessonId])//to not end up with a infinite loop we are adding this [topicId] array here.
    return(
        <div>
            {
                topicId &&

                <i onClick={() => {
                    createWidgetForTopic(topicId)
                }} className="fas fa-plus float-right fa-2x"></i>
            }

            <h1>Widget List ({widgets.length}) </h1>

            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item">
                            {
                                widget.type === "HEADING" &&
                                    <HeadingWidget
                                        widget={widget}
                                        deleteWidget={deleteWidget}
                                        updateWidget={updateWidget}
                                    />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return{
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS",
                widgets: widgets
            }))
    },
    createWidgetForTopic: (topicId) => {
        widgetService.createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget"}) // {type: "PARAGRAPH", text: "New Widget"}
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    },
    updateWidget: (widgetToUpdate) => {
        console.log("WIDGETS HEADER UPDATED:" + widgetToUpdate.size)
        widgetService.updateWidget(widgetToUpdate)
            .then(status => dispatch({type:"UPDATE_WIDGET", widgetToUpdate: widgetToUpdate}))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },
})

export default connect(stpm, dtpm) (WidgetList)