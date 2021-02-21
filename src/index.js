import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import Hello from "./hello";
import HelloClass from "./hello-class";
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
//  <div>
//      <Hello/>
//      <HelloClass/>
//  </div>
//  </React.StrictMode>,
//  document.getElementById('root')
//);

ReactDOM.render(
  <App/>,
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
