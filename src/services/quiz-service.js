const QUIZZES_URL = 'https://cs5610-sp21-stoptas-nodeserver.herokuapp.com/api/quizzes';
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const submitQuiz = (qid, questions) => {

    console.log(JSON.stringify(questions))

    return fetch(`${QUIZZES_URL}/${qid}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const findAttemptsById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(response => response.json())
}

export default {
    findAllQuizzes, findQuizById, submitQuiz, findAttemptsById
}