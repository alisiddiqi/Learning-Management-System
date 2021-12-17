import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';

function Dropbox(props) {
    return (
        <Container className="m-2" fluid>
            <Row>
                <Col style={{textAlign:'center'}}>
                    <b><p>{props.info.assignment_name}</p></b>
                </Col>
                <Col>
                    <FileDown name={props.info.assignment_name} />
                    <p>Due: {props.info.due}</p>
                </Col>
                <Col>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <p>{props.info.feedback}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Dropbox;