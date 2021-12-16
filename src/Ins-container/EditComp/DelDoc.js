import React, {useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import '../../Stu-container/stu_main.css';

function DelDoc() {
    const [docname, setName] = useState();

    return (
        <Container className="lecture" fluid>
            <Row>
                <form>
                    <input style={{margin: "10px"}} type="text" name="name" placeholder="Document Name" onChange={(e) => setName(e.target.value)} />
                    <Button>Delete</Button>
                </form>
            </Row>
        </Container>
    );
}

export default DelDoc;