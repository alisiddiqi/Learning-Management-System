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
                <Lecture />
            </div>
        );
    }
    if (props.title === "Grades") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                <Grade />
            </div>
        );
    }
    if (props.title === "Dropboxes") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                <Dropbox />
            </div>
        );
    }
    if (props.title === "Discussions") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                <EmailList />
            </div>
        );
    }
    if (props.title === "Emails") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                <Discussion />
            </div>
        );
    }
}

export default CourseBody;