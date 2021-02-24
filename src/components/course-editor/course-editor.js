import React from 'react'
import {Link} from "react-router-dom";
import './course-editor.css';

const CourseEditor = ({history}) => {

 return [
  <React.Fragment>
  <div>
    <h2>
        <Link to="/courses/table">
            <i className="fas fa-arrow-left"></i>
        </Link>
        Course Editor
        <i onClick={() => history.goBack()}
           className="fas fa-times float-right">
        </i>
    </h2>
  </div>

  <br/>

  <div class="wbdv-padding-5px color-me-smooky color-me-smooky-text">
    <div class="row">
        <div class="col-1">
            <i class="fa fa-times fa-2x"></i>
        </div>
        <div class="col-3">
            <h4>CS5610 - WebDev</h4>
        </div>
        <div class="col-7">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link color-me-light-smooky" href="#">Build</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        Pages
                        <i class="pull-right"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-me-light-smooky" href="#">Theme</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-me-light-smooky" href="#" tabindex="-1">Store</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-me-light-smooky" href="#" tabindex="-1">Settings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link color-me-light-smooky" href="#" tabindex="-1">Apps</a>
                </li>
            </ul>
        </div>
        <div class="col-1">
            <i class="fa fa-plus fa-2x pull-right"></i>
        </div>
    </div>
  </div>

<div class="row">
    <div class="col-4 left-column wbdv-padding-5px">
        <ul class="list-group">
            <li class="list-group-item border-me-gray color-me-smooky color-me-smooky-text">
                Module 1 - JQuery
                <i class="pull-right fa fa-trash"></i>
            </li>
            <li class="list-group-item active border-me-gray color-me-smooky color-me-smooky-text">
                Module 2 - React
                <i class="pull-right fa fa-trash"></i>
            </li>
            <li class="list-group-item border-me-gray color-me-smooky color-me-smooky-text">
                Module 3 - Redux
                <i class="pull-right fa fa-trash"></i>
            </li>
            <li class="list-group-item border-me-gray color-me-smooky color-me-smooky-text">
                Module 4 - Native
                <i class="pull-right fa fa-trash"></i>
            </li>
            <li class="list-group-item border-me-gray color-me-smooky color-me-smooky-text">
                Module 5 - Angular
                <i class="pull-right fa fa-trash"></i>
            </li>
            <li class="list-group-item border-me-gray color-me-smooky color-me-smooky-text">
                Module 6 - Node
                <i class="pull-right fa fa-trash"></i>
            </li>
            <li class="list-group-item border-me-gray color-me-smooky color-me-smooky-text">
                Module 7 - Mongo
                <i class="pull-right fa fa-trash"></i>
            </li>
            <div class="col-12 color-me-smooky-text">
                <i class="pull-right fa fa-plus fa-2x color-me-gray"></i>
            </div>
        </ul>
    </div>

    <div class="col-8 right-column">
        <br/>
        <div class="col-12">
            <div class="col-10">
                <ul class="nav nav-pills wbdv-active-color">
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-button" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active wbdv-topic-button" aria-current="page" href="#">Topic 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-button" href="#">Topic 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-button" href="#" tabindex="-1">Topic 4</a>
                    </li>
                    <li class="nav-item wbdv-font-size">
                        <a class="nav-link fa fa-plus fa-3x wbdv-topic-button" href="#" tabindex="-1"></a>
                    </li>
                </ul>
            </div>

            <div class="row">
                <div class="col-8"/>
                <div class="col-2">
                    <button class="btn btn-primary pull-right btn-success">Save</button>
                </div>
                <div class="col-1 pull-left">
                    <label>Preview</label>
                </div>
                <div class="col-1 pull-left">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>

  </React.Fragment>

 ]
}

export default CourseEditor
