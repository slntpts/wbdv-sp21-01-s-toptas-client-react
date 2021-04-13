import React, {useState} from "react";

const TrueFalseQuestion = ({question, isGrading}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    return(
        <div>
            <h5>{question.question}</h5>
            <label className={`list-group-item
                    ${isGrading && ("true" === question.correct) ? 'list-group-item-success' : (yourAnswer === "true" ? (yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger') : '')}`}>
                <input
                onClick={() => {
                    setYourAnswer("true")
                }}
                type="radio" name={question._id}
            /> True</label>
            <label className={`list-group-item
                            ${isGrading && ("false" === question.correct) ? 'list-group-item-success' : (yourAnswer === "false" ? (yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger') : '')}`}>
                <input
                onClick={() => {
                    setYourAnswer("false")
                }}
                type="radio" name={question._id}/> False</label>
            <hr/>
        </div>
    )
}

export default TrueFalseQuestion
