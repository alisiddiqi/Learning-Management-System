import React from 'react';
import Lecture from './Lecture';
import Grade from './Grade';
import Dropbox from './Dropbox';
import EmailList from './EmailList';
import Discussion from './Discussion';

function CourseBody(props) {
    if (props.title === "Lectures") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                {props.lectureInfo.map((data) => <Lecture info={data} />)}
            </div>
        );
    }
    if (props.title === "Grades") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                {props.gradeInfo.map((data) => <Grade info={data} />)}
            </div>
        );
    }
    if (props.title === "Dropboxes") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                {props.dropboxInfo.map((data) => <Dropbox info={data} />)}
            </div>
        );
    }
    if (props.title === "Discussions") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                {props.commInfo.map((data) => <Discussion info={data} />)}
            </div>
        );
    }
    if (props.title === "Emails") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                {props.commInfo.map((data) => <EmailList info={data} />)}
            </div>
        );
    }
}

export default CourseBody;