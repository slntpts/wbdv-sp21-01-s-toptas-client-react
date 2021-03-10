const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001597039/courses";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001597039/lessons";

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`,{
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateLesson = (lesson) =>
    fetch(`${LESSONS_URL}/${lesson._id}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers:{
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json());


export const deleteLesson = (lesson) =>
    fetch(`${LESSONS_URL}/${lesson._id}`,{
        method: 'DELETE'
    })
        .then(response => response.json());

export const findLessonsForModule = (moduleId) =>
    //javascript can only have one thread but browser can many, fetch creates multi thread and goes and download images and
    //what is required. Javascript doesn't wait for that, we are using javascript and fetch with promise.
    //fetch returns an object called promis, a promise allows us register and call back. If we don't wanna wait,
    //fetch let the function will be invoked sometime in the future when the return object/downloaded data are ready
    //when the response comes back. .json starts parsing stream (if the return data is movie) from a response. response.json()
    //returns another promise because reading data takes time. and returns data and let know when the reading is finished.
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export default{
    findLessonsForModule, createLessonForModule, updateLesson, deleteLesson
}
