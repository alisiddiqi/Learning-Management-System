import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Discussion(props) {
    return (
        <Container fluid>
            <Row>
                <Col sm={8}>
                    <h4>{props.info.postTitle}</h4>
                    <p>{props.info.postContent}</p>
                </Col>
                <Col sm={4} style={{background: '#d7e5f0', boxShadow: '1px 1px 3px'}}>
                    <h4>{props.info.authorName}</h4>
                    <p>Role: {props.info.authorRole}</p>
                </Col>
            </Row>
        </Container>

    );
}

export default Discussion;