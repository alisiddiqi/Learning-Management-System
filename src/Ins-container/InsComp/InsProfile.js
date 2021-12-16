import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import StuData from "../../Stu-container/stu_db.json";
import GenData from "../../Stu-container/gen_db.json";
import Banner from '../../Stu-container/Home_Comp/Banner';
import GenNav from '../../Stu-container/Home_Comp/GenNav';
import '../../Stu-container/stu_main.css';

class InsProfile extends Component{
    render() {
        // pull data from data base with get request.
        return (
            <div>
                <Banner />
                <GenNav navData={GenData.insNav} user="Teacher" />
                <Container style={{textAlign: "center"}} fluid>
                    <h2 style={{margin: "20px"}}>(Prof.) {StuData.TeacherData[0].first_name} {StuData.TeacherData[0].last_name}</h2>
                    <Row style={{margin: "20px", padding: "10px"}}>
                        <Col><b>Username:</b><br/>{StuData.TeacherData[0].username}</Col>
                        <Col><b>Role:</b><br/>{StuData.TeacherData[0].role}</Col>
                        <Col><b>Date of Birth:</b><br/>{StuData.TeacherData[0].dob}</Col>
                        <Col><b>Phone Number:</b><br/>{StuData.TeacherData[0].phone}</Col>
                        <Col><b>Email:</b><br/>{StuData.TeacherData[0].email}</Col>
                    </Row>
                    <Row className="enrolled">
                        <Col>
                            <h4><b>Teaching Courses</b></h4>
                        </Col>
                        <Col>
                            {StuData.courseData.map((data) => <h5>{data.name}</h5>)}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default InsProfile;