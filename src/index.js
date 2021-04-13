import React from 'react';//core functionality of core library
import ReactDOM from 'react-dom';//knows how to render browsers, seperated from core because core can render also mobile and others.
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';//imported from App component
import Hello from "./hello";
import HelloClass from "./hello-class";
import reportWebVitals from './reportWebVitals';
import CounterReact from "./components/counter/react-state/counter-react";
import CounterRedux from "./components/counter/redux-state/counter-redux";
import {combineReducers, createStore} from "redux";
import moduleReducer from "./reducers/module-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import widgetReducer from "./reducers/widget-reducer";
import quizReducer from "./reducers/quiz-reducer";
import questionReducer from "./reducers/question-reducer";
import {Provider} from "react-redux";

//ReactDOM.render(
//  <React.StrictMode>
//  <div>
//      <Hello/>
//      <HelloClass/>
//  </div>
//  </React.StrictMode>,
//  document.getElementById('root')
//);

const reducer = combineReducers({
    //combine all reducer in one single reducer, as map-value pairs. We will determine which one we are gonna use.
    //and once we do that we provide reducer as a top reducer to the createStore.
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
    quizReducer : quizReducer,
    questionReducer : questionReducer
})

const store = createStore(reducer)//we grab the store from module reducer.
//STEP2- and store goes to the <ModuleList/> below

//render this <App> and inject it to the "root" element
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();