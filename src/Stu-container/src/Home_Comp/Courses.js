import React from 'react';
import CourseCard from './CourseCard';
import {Container, Row, Col} from 'react-bootstrap';

function Courses(props) {
    return (
        <div className="courses">
            <h2>Courses</h2>
            <Container className="cont" fluid="md">
                <Row className="justify-content-md-center">
                    <Col className="m-2">
                        {/* {props.courseInfo.map((CourseCard) => <CourseCard info={props.courseInfo} />)} */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Courses;