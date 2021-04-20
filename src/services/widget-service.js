const HEROKU_URL = "https://cs5610-sp21-stoptas-javaserver.herokuapp.com";

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${HEROKU_URL}/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget = (widget) =>
    fetch(`${HEROKU_URL}/api/widgets/${widget.id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const deleteWidget = (wid) =>
    fetch(`${HEROKU_URL}/api/widgets/${wid}`, {
        method: "DELETE",
    })

export const findWidgetsForTopic = (topicId) =>
    //we need to fetch the widgets data before update it.
    fetch(`${HEROKU_URL}/api/topics/${topicId}/widgets`)
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