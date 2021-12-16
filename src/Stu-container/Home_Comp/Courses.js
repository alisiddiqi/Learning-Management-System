import React from 'react';
import CourseCard from './CourseCard';
import {Container, Row, Col} from 'react-bootstrap';

function Courses(props) {
    return (
        <div className="courses">
            <h2>Courses</h2>
            <Container className="cont" fluid="md">
                <Row className="justify-content-md-center">
                    {props.courseInfo.map((data) => <Col className="m-2"><CourseCard info={data} user={props.user} /></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default Courses;