const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001597039/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001597039/topics";

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`,{
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateTopic = (topic) =>
    fetch(`${TOPICS_URL}/${topic._id}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers:{
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json());


export const deleteTopic = (topic) =>
    fetch(`${TOPICS_URL}/${topic._id}`,{
        method: 'DELETE'
    })
        .then(response => response.json());

export const findTopicsForLesson = (lessonId) =>
    //javascript can only have one thread but browser can many, fetch creates multi thread and goes and download images and
    //what is required. Javascript doesn't wait for that, we are using javascript and fetch with promise.
    //fetch returns an object called promis, a promise allows us register and call back. If we don't wanna wait,
    //fetch let the function will be invoked sometime in the future when the return object/downloaded data are ready
    //when the response comes back. .json starts parsing stream (if the return data is movie) from a response. response.json()
    //returns another promise because reading data takes time. and returns data and let know when the reading is finished.
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export default{
    findTopicsForLesson, createTopicForLesson, updateTopic, deleteTopic
}
