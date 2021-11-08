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

class Course_main extends Component{
    // State
    constructor() {
        super()
        this.state = {
            navigation: {
                place1: "CONTENT",
                place1path: "/Course_main/ContentSec",
                place2: "COMMUNICATION",
                place2path: "/Course_main/CommunicationSec",
                place3: "GRADES",
                place3path: "/Course_main/GradesSec",
                place4: "DROPBOX",
                place4path: "/Course_main/DropboxSec"
            },
            platform: "Stu",
            profile: "KD",
            schoolName: "University of Calgary"
        }
    }

    // Functions 

    render() {
        return (
            <div className="course-main">
                <Banner type={this.state.platform} profile={this.state.profile} school={this.state.schoolName}
                />
                <GenNav studentNav={this.state.navigation}/>
                <Container>
                    <Row>
                        <Col>
                            <CourseBody title={"Lectures"}/>
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