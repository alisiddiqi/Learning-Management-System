import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../Stu-container/stu_main.css';

function GradeItem(props) {
    return (
        <Container style={{boxShadow: "1px 1px 3px", padding: "10px", marginTop: "15px"}} fluid>
            <Row>
                <Col>
                    <p>{props.info.student}</p>
                </Col>
                <Col>
                    <p>{props.info.name}</p>
                </Col>
                <Col>
                    <p>{props.info.filename}</p>
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
                    <Button onClick={(e) => document.getElementById(props.info.name).style.display = "block"}>Add Grade</Button>
                </Col>
                <Col>
                    <form className="editGrade" id={props.info.name}>
                        <input style={{margin: "10px"}} type="text" name="Grade" placeholder="Grade" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        <input style={{margin: "10px"}} type="text"name="Feedback" placeholder="Feedback" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} />
                        <Button style={{margin: "10px"}} type="submit">Enter Grade</Button>
                        <Button style={{margin: "10px"}} onClick={() => document.getElementById(props.info.name).style.display = "none"} >Cancel</Button>
                    </form>
                </Col>
            </Row>
        </Container>

    );
}

export default GradeItem;