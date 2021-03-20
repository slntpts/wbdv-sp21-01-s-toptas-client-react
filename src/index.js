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

//ReactDOM.render(
//  <React.StrictMode>
//  <div>
//      <Hello/>
//      <HelloClass/>
//  </div>
//  </React.StrictMode>,
//  document.getElementById('root')
//);

//render this <App> and inject it to the "root" element
ReactDOM.render(//ReactDOM knows how to render the dom
  <App/>,
  //   <CounterRedux/>,
  document.getElementById('root')//Go fetch me element that has the id "root"
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
