import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ButtonOr } from 'semantic-ui-react';
import FileDownload from '../../Stu-container/Handling/FileDownload';
import '../../Stu-container/stu_main.css';

function GradeItem(props) {
    return (
        <Container style={{boxShadow: "1px 1px 3px", padding: "10px", marginTop: "15px"}} fluid>
            <Row>
                <Col>
                    <p>{props.info.studentID}</p>
                </Col>
                <Col>
                    <p>{props.info.assignment_name}</p>
                </Col>
                <Col>
                    <FileDownload name={props.info.assignment_name}></FileDownload>
                </Col>
                <Col>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <p>{props.info.feedback}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={(e) => document.getElementById(props.info.assignment_name).style.display = "block"}>Add Grade</Button>
                </Col>
                <Col>
                    <form className="editGrade" id={props.info.assignment_name}>
                        <input style={{margin: "10px"}} type="text" name="Grade" placeholder="Grade" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        <input style={{margin: "10px"}} type="text" name="Feedback" placeholder="Feedback" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        <Button style={{margin: "10px"}} type="submit" onClick={async()=>{
                            const response=await fetch('/teacher/courses/grades',{
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8" 
                                },
                                body: JSON.stringify({
                                    grade: sessionStorage.getItem("Grade"),
                                    feedback: sessionStorage.getItem("Feedback"),
                                    assignment_name: props.info.assignment_name,
                                    stuID: props.info.studentID
                              }
                              )
                            })
                        }}>Enter Grade</Button>
                        <Button style={{margin: "10px"}} onClick={() => document.getElementById(props.info.assignment_name).style.display = "none"} >Cancel</Button>
                    </form>
                </Col>
            </Row>
        </Container>

    );
}

export default GradeItem;