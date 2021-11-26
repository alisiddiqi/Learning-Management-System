import React, {useState} from 'react';
import '../../Stu-container/stu_main.css';
import Lecture from '../../Stu-container/Course_Comp/Lecture';
import GradeItem from '../EditComp/GradeItem';
import EmailList from '../../Stu-container/Course_Comp/EmailList';
import Eval from '../EditComp/Eval';
import AddDoc from '../EditComp/AddDoc';
import DelDoc from '../EditComp/DelDoc';
import { ButtonGroup, ToggleButton, Container, Row, Col } from 'react-bootstrap';

function PageBody(props) {
    const [student, setStudent] = useState();
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
                <AddDoc />
                <DelDoc />
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
    if (props.title === "Assignments") {
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
                            <h4>Student</h4>
                        </Col>
                        <Col>
                            <h4>Grade Item</h4>
                        </Col>
                        <Col>
                            <h4>File</h4>
                        </Col>
                        <Col>
                            <h4>Grade</h4>
                        </Col>
                        <Col>
                            <h4>Feedback</h4>
                        </Col>
                    </Row>
                </Container>
                {props.gradeInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.student.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <GradeItem info={data} />)}
            </div>
        );
    }
    if (props.title === "Evaluations") {
        return (
            <div>
                <h1 className="courseTitle"><b>{props.title}</b></h1>
                <Container>
                    <Row>
                        <ButtonGroup>
                            {props.studentInfo.map((data, idx) => <Col><ToggleButton 
                                type="radio" 
                                variant="outline-primary" 
                                key={idx}
                                name="radio"
                                id={`radio-${idx}`}
                                value={data.sID}
                                checked={student === data.sID}
                                onChange={(e) => setStudent(e.currentTarget.value)}
                                >
                                {data.first_name} {data.last_name}
                            </ToggleButton></Col>)}
                        </ButtonGroup>
                    </Row>
                </Container>
                {props.evalInfo.map((data) => (student === data.sID) ? (<Eval info={data} stu_id={student} />) : <Container fluid><h4>Select a Student</h4></Container> )}
            </div>
        );
    }
    if (props.title === "ClassList") {
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
                <h4 className="emailsTitle">Students</h4>
                {props.classInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) => <EmailList info={data} />)}
            </div>
        );
    }
}

export default PageBody;