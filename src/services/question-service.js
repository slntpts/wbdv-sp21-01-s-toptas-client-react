const QUIZZES_URL = 'https://cs5610-sp21-stoptas-nodeserver.herokuapp.com/api/quizzes';
const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz
}