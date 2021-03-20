//
// export const createWidgetForTopic = () => {
//     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
//         method: 'POST',
//         body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
//         headers: {
//             "content-type": 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(actualWidget => setWidgets((widgets) => [...widgets, actualWidget]))
// }
//
// export const updateWidget = (wid, widget) => {
//     fetch(`http://localhost:8080/api/widgets/${wid}`, {
//         method: "PUT",
//         body: JSON.stringify({widget}),
//         headers: {
//             "content-type": 'application/json'
//         }
//     }).then(response => {
//         setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
//         setEditingWidget({})//we turn off the form editor after come back from server.
//     })
// }
// export const deleteWidget = (wid) =>
//     fetch(`http://localhost:8080/api/widgets/${wid}`, {
//         method: "DELETE",
//     }).then(response => {
//         setWidgets((widgets) => widgets.filter(w => w.id !== wid))
//     })
//
// export default{
//     createWidgetForTopic, updateWidget, deleteWidget
// }