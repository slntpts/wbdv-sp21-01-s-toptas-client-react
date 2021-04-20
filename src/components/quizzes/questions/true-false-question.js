import React, {useState} from "react";

const TrueFalseQuestion = ({question, isGrading}) => {
    return(
        <div>
            <h5>{question.question}</h5>
            <label className={`list-group-item
                    ${isGrading && ("true" === question.correct) ? 'list-group-item-success' : (question.answer === "true" ? (question.answer === question.correct ? 'list-group-item-success' : 'list-group-item-danger') : '')}`}>
                <input
                onClick={() => {
                    question.answer = "true"
                }}
                type="radio" name={question._id}
            /> True</label>
            <label className={`list-group-item
                            ${isGrading && ("false" === question.correct) ? 'list-group-item-success' : (question.answer === "false" ? (question.answer === question.correct ? 'list-group-item-success' : 'list-group-item-danger') : '')}`}>
                <input
                onClick={() => {
                    question.answer = "false"
                }}
                type="radio" name={question._id}/> False</label>
            <hr/>
        </div>
    )
}

export default TrueFalseQuestion
