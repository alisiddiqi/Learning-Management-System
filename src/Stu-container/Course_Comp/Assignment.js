import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';

function Assignment(props) {
    return (
        <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h1>{props.info.type}</h1>
                    <h4>{props.info.name}</h4>
                </Col>
                <Col>
                    <FileDown />
                </Col>
            </Row>
        </Container>

    );
}

export default Assignment;