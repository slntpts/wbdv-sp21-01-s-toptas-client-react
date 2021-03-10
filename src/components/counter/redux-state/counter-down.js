import React from 'react'
import {connect} from 'react-redux'

const CounterDown = ({down}) =>
    <button onClick={down}>DOWN</button>

//dispatch allow us to invoke the reducer so that it passes the state
const propertyToDispatcher = (dispatch) => {
    return{
        down: () => {
            dispatch({type: "DOWN"})//by calling dispatch we are invoking the reducer in counter-redux
        }
    }
}

export default connect(
    ()=>{}, //this parameter allow us to map parameters to state variable
    propertyToDispatcher //this allow us to map parameter to function
    )(CounterDown)