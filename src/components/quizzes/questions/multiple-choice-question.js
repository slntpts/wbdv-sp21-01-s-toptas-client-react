import React, {useState} from "react";

const MultipleChoiceQuestion = ({question, isGrading}) => {
    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === question.answer &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== question.answer &&
                    <i className="fas fa-times"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(

                            <li className={`list-group-item
                            ${ isGrading && (choice === question.correct) ? 'list-group-item-success' :  (question.answer === choice ? (question.answer == question.correct ? 'list-group-item-success' : 'list-group-item-danger') : '' )}`}>
                                <label><input
                                    onClick={() => {
                                        question.answer = choice
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {question.answer}
            </p>
            <p>{question.correct}</p>
            <p></p>
            <p>{question.type}</p>
        </div>
    )
}

export default MultipleChoiceQuestion
