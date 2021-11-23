import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function EmailList(props) {
    return (
        <Container fluid>
            <Row>
                <Col style={{marginBottom: "5px", border: "1px solid #111"}}>
                    <h5>{props.info.first_name} {props.info.last_name}</h5>
                </Col>
                <Col style={{marginBottom: "5px", border: '1px solid #222'}}>
                    <a href="#">{props.info.email}</a>
                </Col>
            </Row>
        </Container>

    );
}

export default EmailList;