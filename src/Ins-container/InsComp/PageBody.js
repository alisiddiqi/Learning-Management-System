import React, {useState} from 'react';
import '../../Stu-container/stu_main.css';
import Lecture from '../../Stu-container/Course_Comp/Lecture';
import GradeItem from '../EditComp/GradeItem';
import EmailList from '../../Stu-container/Course_Comp/EmailList';
import AddDoc from '../EditComp/AddDoc';
import DelDoc from '../EditComp/DelDoc';
import { Button} from 'react-bootstrap';
import FileDown from '../../Stu-container/Handling/FileDownload';
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
        console.log(props.docInfo);
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
                }).map((data) => { <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h3>{data.name}</h3>
                    <p>{data.instructor}</p>
                </Col>
                <Col>
                    <Button variant="outline-primary"><FileDown />Download</Button>
                </Col>
            </Row>
        </Container>})}
                {props.docInfo.filter((data) => {
                    if (searchTerm === "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                }).map((data) =>  <Container className="lecture" fluid>
                <Row>
                    <Col>
                        <h3>{data.document_name}</h3>
                    </Col>
                    <Col>
                        <FileDown name={data.document_name}/>
                    </Col>
                </Row>
            </Container>)}
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