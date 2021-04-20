import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from '../../services/question-service'
import quizService from '../../services/quiz-service'
import {connect} from "react-redux";

const Quiz = ({
        questions = [],
        attempts = [],
        findQuestions,
        findAttempts,
        submitQuiz,
}) => {
    const {quizId} = useParams()
    const [isGrading, setIsGrading] = useState(false)

    useEffect(() => {
        console.log(quizId)
        findQuestions(quizId)
        findAttempts(quizId)
    },[quizId])

    return(
        <div>
            <h3>Quiz {quizId} ({questions.length}) </h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                                <Question question={question}
                                          isGrading={isGrading}>
                                </Question>
                            </li>
                        )
                    })
                }
            </ul>

            <button
                onClick={() => {
                    setIsGrading(true)
                }}
                class = "btn btn-success float-right">Grade</button>

            <button
                onClick={() => {
                    submitQuiz(quizId, questions)
                }}
                class = "btn btn-success float-right">Submit</button>

                <h3>ATTEMPTS {quizId} ({attempts.length}) </h3>
                <ul>
                    {
                        attempts.map((attempt) => {
                            return (
                                <li>
                                    {attempt.score}
                                    {attempt.attemptId}
                                </li>
                            )
                        })
                    }
                </ul>
        </div>
    )
}

const stpm = (state) => {
    return{
        questions: state.questionReducer.questions,
        attempts: state.quizReducer.attempts
    }
}

const dtpm = (dispatch) => ({
    findQuestions: (quizId) => {
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => dispatch({
                type: "FIND_QUESTIONS",
                questions: questions
            }))
    },

    findAttempts: (quizId) => {
        quizService.findAttemptsById(quizId)
            .then(attempts => dispatch({
                type: "FIND_ATTEMPTS",
                attempts: attempts
            }))
    },

    submitQuiz: (quizId, questions) => {
        quizService.submitQuiz(quizId, questions);
    }
})

export default connect(stpm, dtpm) (Quiz)