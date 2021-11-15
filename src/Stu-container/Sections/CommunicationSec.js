import '../stu_main.css';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';
import StuData from "../stu_db.json";

class CommunicationSec extends Component{
    constructor() {
        super();
        this.state = {
            service: "Discussions",
            commData: StuData.DiscussionData
        }
    }

    render() {
        return (
            <div style={{textAlign:'center'}} className="course-main">
                <Banner bannerData={StuData.Banner} />
                <GenNav navData={StuData.stuNav}/>
                <div className="contentBody">
                    <Button 
                    onClick={() => {
                        this.setState({service: "Discussions"});
                        this.setState({commData: StuData.DiscussionData});
                    }}
                    variant="outline-primary">Discussion
                    </Button>
                    <Button 
                    onClick={() => {
                        this.setState({service: "Emails"});
                        this.setState({commData: StuData.EmailList});
                    }}
                    variant="outline-primary">Emails
                    </Button>
                    <CourseBody commInfo={this.state.commData} title={this.state.service}/>
                </div>
            </div>
        );
    }
}

export default CommunicationSec;