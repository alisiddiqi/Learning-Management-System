import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FileDown from '../Handling/FileDownload';
import FileUp from '../Handling/FileUpload';

function Dropbox(props) {
    return (
        <Container className="m-2" fluid>
            <Row>
                <Col style={{textAlign:'center'}}>
                    <p>{props.info.type}</p>
                    
                    {/* <FileDown downInfo={props.info} /> */}
                </Col>
                <Col>
                    <p>{props.info.status}</p>
                </Col>
                <Col>
                    <p>{props.info.grade}</p>
                </Col>
                <Col>
                    <p>{props.info.eval}</p>
                </Col>
                <Col>
                    {/* <FileUp upInfo={props.info} /> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Dropbox;