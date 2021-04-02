const HEROKU_URL = "http://localhost:8080/api/001597039/topics/";//https://cs5610-sp21-stoptas-javaserver.herokuapp.com/";

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


// export const findAllWidgets = () =>
//     fetch(`http://localhost:8080/api/widgets`)
//         .then(response => response.json());
//
//
// export const findWidgetById = (wid) =>
//     fetch(`http://localhost:8080/api/widgets/${wid}`)
//         .then(response => response.json());


export default{
    createWidgetForTopic, updateWidget, deleteWidget, findWidgetsForTopic
}