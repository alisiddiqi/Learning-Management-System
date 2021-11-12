import React from 'react';
import Lecture from './Lecture';
import Grade from './Grade';
import Dropbox from './Dropbox';
import EmailList from './EmailList';
import Discussion from './Discussion';
import { Container, Row, Col } from 'react-bootstrap';

function CourseBody(props) {
    if ((props.title === "Lectures") || (props.title === "Content")) {
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
                <Container style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}} fluid>
                    <Row>
                        <Col>
                            <h4>Grade Item</h4>
                        </Col>
                        <Col>
                            <h4>Weight</h4>
                        </Col>
                        <Col>
                            <h4>Grade</h4>
                        </Col>
                        <Col>
                            <h4>Feedback</h4>
                        </Col>
                    </Row>
                </Container>
                {props.gradeInfo.map((data) => <Grade info={data} />)}
            </div>
        );
    }
    if (props.title === "Dropboxes") {
        return (
            <div>
                <h1>{props.title}</h1>
                <input placeholder="Search" type="text" className="todo-input"/>
                <Container style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}} fluid>
                    <Row>
                        <Col>
                            <h4>File Item</h4>
                        </Col>
                        <Col>
                            <h4>Completion Status</h4>
                        </Col>
                        <Col>
                            <h4>Grade</h4>
                        </Col>
                        <Col>
                            <h4>Evaluation</h4>
                        </Col>
                        <Col>
                            <h4>Submission</h4>
                        </Col>
                    </Row>
                </Container>
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