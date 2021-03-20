import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () => {
    //TODO: move state management to widgets-reducer.js as described in the assignment.
    const{topicId} = useParams()
    const[widgets, setWidgets] = useState([]);
    const [editingWidget, setEditingWidget] = useState({widgets:[]});
    useEffect(() => {
        //TODO: Move server communication to widget-service
        //we need to fetch the widgets data before update it.
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])//to not end up with a infinite loop we are adding this [topicId] array here.

    const createWidgetForTopic = () => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: 'POST',
            body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
            headers: {
                "content-type": 'application/json'
            }
        })
            .then(response => response.json())
            .then(actualWidget => setWidgets((widgets) => [...widgets, actualWidget]))
    }

    const updateWidget = (wid, widget) => {
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify({widget}),
            headers: {
                "content-type": 'application/json'
            }
        }).then(response => {
            setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
            setEditingWidget({})//we turn off the form editor after come back from server.
        })
    }
    const deleteWidget = (wid) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE",
        }).then(response => {
            setWidgets((widgets) => widgets.filter(w => w.id !== wid))
        })
    return(
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus float-right fa-2x"></i>

            {JSON.stringify(widgets)}

            <h1>Widget List ({widgets.length}) {editingWidget.id}</h1>

            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li key={widget.id} className="list-group-item">
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                            }
                            {
                                widget.type === "HEADING" &&
                                    <HeadingWidget
                                        editing={editingWidget.id === widget.id}
                                        widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WidgetList