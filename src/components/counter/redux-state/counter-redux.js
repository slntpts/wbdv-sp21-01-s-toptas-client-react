import React from 'react'
import CounterDisplay from "./counter-display";
import CounterDown from "./counter-down";
import CounterUp from "./counter-up";
import {createStore} from "redux";
import {Provider} from "react-redux";
import CounterClear from "./counter-clear";
import reducer from "./reducers/count-reducer";


//as the reduces generates the states, they're gonna be stored in store.
//reducer populated the state and send to the components in return then components will decide either use it or not.
//We use Provider to realize that. Provider is part of the glue allows glue reducer to react.
//Store is a map collects all the possible states that generated.
const store = createStore(reducer)

export default class CounterRedux
    extends React.Component{

    render(){
        return(

            /**
             * Connect is called/invoked by the provider
             * Provider calls all the connects in all the components that are children to provider
             * Provider looks for anyone who has a connect function and call it and it pass the state
             */
            <Provider store={store}>
                <div>
                    <CounterDisplay/>
                    <CounterDown/>
                    <CounterUp/>
                    <CounterClear/>
                </div>
            </Provider>
        );
    }
}