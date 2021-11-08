import './c_main.css';
import './HomePage.css';
import './Todolist.css';
import React, {Component} from 'react';
import Banner from "./Home_Comp/Banner";
import GenNav from "./Home_Comp/GenNav";
import CourseBody from "./Course_Comp/CourseBody";
import Schedule from './Course_Comp/Schedule';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "./stu_db.json";

class Course_main extends Component{
    render() {
        return (
            <div className="course-main">
                <Banner type={StuData.Banner.platform} profile={StuData.Banner.profile} school={StuData.Banner.schoolName}/>
                <GenNav studentNav={StuData.stuNav}/>
                <Container>
                    <Row>
                        <Col>
                            <CourseBody lectureInfo={StuData.LecturesData} title={"Lectures"}/>
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

export default Course_main;