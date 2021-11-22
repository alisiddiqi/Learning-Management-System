import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function EmailList(props) {
    return (
        <Container style={{border: '1px solid #222'}} fluid>
            <Row>
                <Col>
                    <h4>Name: {props.info.first_name} {props.info.last_name}</h4>
                </Col>
                <Col>
                    <h4>Email:</h4>
                    <a href="#">{props.info.email}</a>
                </Col>
            </Row>
        </Container>

    );
}

export default EmailList;