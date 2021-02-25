import logo from './logo.svg';
import './App.css';
import HelloComponent from "./hello.js"
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path="/courses">
                <CourseManager/>
            </Route>
            <Route path="/course-editor">
                <CourseEditor/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;

