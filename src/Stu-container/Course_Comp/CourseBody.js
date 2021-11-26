import React, {useState} from 'react';
import '../stu_main.css';
import Lecture from './Lecture';
import Grade from './Grade';
import Dropbox from './Dropbox';
import EmailList from './EmailList';
import Evaluation from './Evaluation';
import { ButtonGroup, ToggleButton, Container, Row, Col } from 'react-bootstrap';

function CourseBody(props) {
    const [teacher, setTeacher] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    if (props.title === "Lectures") {
        return (
            <div className="courseTitle">
                <h1><b>{props.title}</b></h1>
                <input 
                    placeholder="Search..." 
                    type="text" 
                    className="todo-input"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                {props.lectureInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.instructor.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <Lecture info={data} />)}
            </div>
        );
    }
    if (props.title === "Content") {
        return (
            <div className="courseTitle">
                <h1><b>{props.title}</b></h1>
                <input 
                    placeholder="Search..." 
                    type="text" 
                    className="todo-input"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                {props.lectureInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.instructor.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <Lecture info={data} />)}
                {props.docInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <Lecture info={data} />)}
            </div>
        );
    }
    if (props.title === "Grades") {
        return (
            <div>
                <h1 className="courseTitle"><b>{props.title}</b></h1>
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
                <h1 className="courseTitle"><b>{props.title}</b></h1>
                <input 
                    placeholder="Search..." 
                    type="text" 
                    className="todo-input"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
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
                {props.dropboxInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <Dropbox info={data} />)}
            </div>
        );
    }
    if (props.title === "Evaluations") {
        return (
            <div>
                {
            props.data.map((item)=>(
              item['isEval'] === 1 ? (
                  <>
                <h1 className="courseTitle"><b>{props.title}</b></h1>
                <Container>
                    <Row>
                        <ButtonGroup>
                            {props.teacherInfo.map((data, idx) => <Col><ToggleButton 
                                type="radio" 
                                variant="outline-primary" 
                                key={idx}
                                name="radio"
                                id={`radio-${idx}`}
                                value={data.tID}
                                checked={teacher === data.tID}
                                onChange={(e) => setTeacher(e.currentTarget.value)}
                                >
                                {data.firstname} {data.lastname}
                            </ToggleButton></Col>)}
                        </ButtonGroup>
                    </Row>
                </Container>
                {props.evalInfo.map((data) => <Evaluation info={data} data={props.data} />)}
                </>
              ) : (
                    <h4>There are no evaluations avaiable at this time</h4>
              )
              
        ))
        }
            </div>
        );
    }
    if (props.title === "Emails") {
        return (
            <div>
                <h1 className="courseTitle"><b>{props.title}</b></h1>
                <input 
                    placeholder="Search..." 
                    type="text" 
                    className="todo-input"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                <h4 className="emailsTitle">Instructors</h4>
                {props.teacherInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data['firstname'].toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data['lastname'].toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <EmailList info={data} />)}
                <h4 className="emailsTitle">Students</h4>
                {props.studentInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data['firstname'].toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data['lastname'].toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <EmailList info={data} />)}
            </div>
        );
    }
}

export default CourseBody;