import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../stu_main.css';

function EmailList(props) {
    return (
        <Container fluid>
            <Row>
                <Col style={{marginBottom: "5px", border: "1px solid #111"}}>
                    <h5>{props.info.firstname} {props.info.lastname}</h5>
                </Col>
                <Col style={{marginBottom: "5px", border: '1px solid #222'}}>
                    <a href="#">{props.info.email}</a>
                </Col>
            </Row>
        </Container>

    );
}

export default EmailList;