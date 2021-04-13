import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from '../../services/quiz-service'
import {connect} from "react-redux";

const QuizzesList = ({
         quizzes = [],
         findQuizzes
     }) => {
    const {courseId} = useParams()

    useEffect(() => {
        findQuizzes()
    },[])

    return(
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return(
                            <li>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

const stpm = (state) => {
    return{
        quizzes: state.quizReducer.quizzes
    }
}

const dtpm = (dispatch) => ({
    findQuizzes: () => {
        quizService.findAllQuizzes()
            .then(quizzes => dispatch({
                type: "FIND_QUIZZES",
                quizzes: quizzes
            }))
    },
})

export default connect(stpm, dtpm) (QuizzesList)