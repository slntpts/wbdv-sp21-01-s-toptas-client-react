export const createWidgetForTopic = (topicId, widget) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget = (widget) =>
    fetch(`http://localhost:8080/api/widgets/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE",
    })

export const findWidgetsForTopic = (topicId) =>
    //we need to fetch the widgets data before update it.
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json());

export default{
    createWidgetForTopic, updateWidget, deleteWidget, findWidgetsForTopic
}