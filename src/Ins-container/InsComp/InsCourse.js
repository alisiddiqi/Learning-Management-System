import React, {Component} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../../Stu-container/stu_db.json";
import PageBody from './PageBody';
import '../../Stu-container/stu_main.css';

class InsCourse extends Component{
    render() {
        return (
            <div className="course-main">
                <Container className="course-cont">
                    <Row>
                        <Col>
                            <PageBody lectureInfo={StuData.LecturesData} title="Lectures"/>
                        </Col>
                    </Row>
                    <Row>
                        <Button href="/InsHome/Content">Add Lecture</Button> 
                    </Row>
                </Container>
            </div>
        );
    }
}

export default InsCourse;