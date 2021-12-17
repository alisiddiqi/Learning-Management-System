import React from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';

function Lecture(props) {
    console.log(props);
    return (
        <>
        <Container className="lecture" fluid>
            <Row>
                <Col>
                    <h3>{props.info.document_name}</h3>
                </Col>
                <Col>
                    <FileDown name={props.info.document_name}/>
                </Col>
            </Row>
        </Container>
        </>

    );
}

export default Lecture;