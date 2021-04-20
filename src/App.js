import logo from './logo.svg';
import './App.css';
import HelloComponent from "./hello.js"
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import CounterUp from "./components/counter/redux-state/counter-up";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

/**
 * We can create our own tags by using javascript. When we return the below scope, it will be rendered instead of
 * <App> tag in index.js. When we export this App function, we can import it in another pages and use it.
 * This helps us to split big programs into small pieces and reuse them.
 * We can reuse these exported functions many times.
 *
 * Whenever we need to embed javascript code into html we have to use {} (curly brakets)
 * This syntax is called jsx.
 *
 * As different from ES5, we use "classname" instead of "class" here.
 *
 *
 */
function App() {

  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
                {/*<CounterUp/>*/}
            </Route>
            <Route path="/courses/:layout" exact = {true}>
                <CourseManager/>
            </Route>
            <Route path="/courses/:courseId/quizzes" exact = {true}>
                <QuizzesList/>
            </Route>
            <Route path="/courses/:courseId/quizzes/:quizId" exact = {true}>
                <Quiz/>
            </Route>
            {/*/!*use params takes the following url, parse it and provider as params(moduleId, lessonId, courseId) to moduleList*!/*/}
            <Route path={[
                "/courses/:layout/edit/:courseId",
                "/courses/:layout/edit/:courseId/modules/:moduleId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
            ]}
                   exact={true}
                   render={(props) => <CourseEditor {...props}/>}>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;

