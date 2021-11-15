import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';
import FileUp from '../Handling/FileUpload';

function Dropbox(props) {
    return (
        <Container fluid>
            <Row>
                <Col style={{textAlign:'center'}}>
                    <p>{props.info.type}</p>
                    <FileDown fileData={props.info} />
                </Col>
                <Col>
                    <p>{props.info.status}</p>
                </Col>
                <Col>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <FileUp fileData={props.info} />
                </Col>
            </Row>
        </Container>
    );
}

export default Dropbox;