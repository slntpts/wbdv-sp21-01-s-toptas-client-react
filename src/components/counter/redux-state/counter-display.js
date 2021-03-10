 import React from 'react'
 import {connect} from "react-redux";
 import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

 const CounterDisplay = ({theCount = 321}) =>
     <h1>Counter: {theCount} </h1>

 const stateToPropertyMapper = (state) => {

   //Grab the property that we are expecting from state by using map
   return {
    theCount: state.count
   }
 }

 //connect() returns a function and that function takes as argument the thing that we want to connect
 export default connect
         (stateToPropertyMapper,
        (dispatch) => {})//we are not using this now
 (CounterDisplay)