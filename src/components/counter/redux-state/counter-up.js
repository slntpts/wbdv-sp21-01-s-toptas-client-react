import React from 'react'
import CounterDisplay from "./counter-display";
import {connect} from 'react-redux'

const CounterUp = ({increaseCounter}) =>
    <button onClick={increaseCounter}>UP</button>

const stpm = (state) => {}

const dtpm = (dispatch) => {
    return{
        increaseCounter: () => {
            dispatch({
                type: "UP" //the action
            })//calls dispatch which calls our reducer. and reducer expects an action
        }
    }
}

export default connect
(stpm, dtpm)
(CounterUp)