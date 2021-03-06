import React, {useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import '../../Stu-container/stu_main.css';
import FileUp from '../../Stu-container/Handling/FileUpload';

function AddDoc() {
    return (
        <Container className="lecture" fluid>
            <Row>
                <h4>Upload Documents Here</h4>
                <form>
                    <input style={{margin: "10px"}} type="text" name="name" placeholder="Document Name" onChange={(e) => sessionStorage.setItem('fileName',e.target.value)} />
                    {/* <input style={{margin: "10px"}} type="text" name="type" placeholder="Document Type" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} /> */}
                    {/* <input style={{margin: "10px"}} type="text" name="date" placeholder="Time / Due Date" onChange={(e) => sessionStorage.setItem(e.target.name, e.target.value)} /> */}
                </form>
                <FileUp type="Teacher"/>
            </Row>
        </Container>
    );
}

export default AddDoc;