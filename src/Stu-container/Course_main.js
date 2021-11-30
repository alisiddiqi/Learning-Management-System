import './stu_main.css';
import React, {Component} from 'react';
import Banner from "./Home_Comp/Banner";
import GenNav from "./Home_Comp/GenNav";
import CourseBody from "./Course_Comp/CourseBody";
import Schedule from './Course_Comp/Schedule';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "./stu_db.json";
import GenData from "./gen_db.json";
import {withRouter} from 'react-router';

function Course_main(props){
     {
        return (
            <div className="course-main">
                <Banner bannerData={GenData.Banner} user="Student" />
                <GenNav navData={GenData.stuNav} courseID={props.match.params.courseID} />
                <Container className="course-cont">
                    <Row>
                        <Col>
                            <CourseBody lectureInfo={StuData.LecturesData} title="Lectures"/>
                        </Col>
                        <Col>
                            <Schedule />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(Course_main);