import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from '../../services/question-service'
import {connect} from "react-redux";

const Quiz = ({
        questions = [],
        findQuestions
}) => {
    const {quizId} = useParams()
    const [isGrading, setIsGrading] = useState(false)

    useEffect(() => {
        findQuestions(quizId)
    },[])

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
        </div>
    )
}

const stpm = (state) => {
    return{
        questions: state.questionReducer.questions
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
})

export default connect(stpm, dtpm) (Quiz)