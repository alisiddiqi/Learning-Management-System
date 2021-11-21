import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CourseCard from './CourseCard';
import StuData from "../stu_db.json";
import GenData from "../gen_db.json";
import Banner from './Banner';
import GenNav from './GenNav';
import '../stu_main.css';

class StuProfile extends Component{
    render() {
        return (
            <div>
                <Banner bannerData={GenData.Banner} />
                <GenNav navData={GenData.stuNav}/>
                <Container fluid>
                    <h2>{StuData.StudentData.first_name} {StuData.StudentData.last_name}</h2>
                    <Row>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>DoB</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{StuData.StudentData.username}</td>
                                    <td> {StuData.StudentData.role}</td>
                                    <td>{StuData.StudentData.dob}</td>
                                    <td> {StuData.StudentData.phone}</td>
                                    <td>{StuData.StudentData.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Enrolled Courses</h4>
                        </Col>
                        <Col>
                            {StuData.courseData.map((data) => <h4>{data.name}</h4>)}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default StuProfile;