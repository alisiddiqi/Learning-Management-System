import '../c_main.css';
import '../HomePage.css';
import React, {Component} from 'react';
import Banner from "../Home_Comp/Banner";
import GenNav from "../Home_Comp/GenNav";
import CourseBody from "../Course_Comp/CourseBody";
import 'bootstrap/dist/css/bootstrap.min.css';

class GradesSec extends Component{
    // State
    constructor() {
        super()
        this.state = {
            navigation: {
                place1: "CONTENT",
                place2: "COMMUNICATION",
                place3: "GRADES",
                place4: "DROPBOX"
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
                <div className="contentBody">
                    <CourseBody title="Grades"/>
                </div>
            </div>
        );
    }
}

export default GradesSec;