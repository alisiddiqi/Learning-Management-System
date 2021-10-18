import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Learning Management System</h1>
        <p className="text-muted">
          A light-weight Learning Management System
          </p>
        <h1>
          Motivation
        </h1>
        <p1>
        Despite the growing efforts to spread the capabilities of more education, there is still a pocket of improvement. 
        Schools in Kenya and other developing countries do not have access to affordable learning management systems(LMS). They need a platform where students can view the professor's notes, submit assignments, view their grades and more. 
        The solution is building a web based LMS where students can have access to their course content, view the status of their grades and communicate to teachers or students. 
        The motivation is because building schools in Kenya is expensive so instead, having a LMS where students can learn through the web is a much more efficient option. 
        </p1>
        <p1>
          The admin view helps the adminstrators assign instructors to the student, add or remove students from the course. 
          It is intended to be used by the Institution to manage all faculty, staff and students.
        </p1>
        <p1>
          The guest view helps a non-Institution person login and view the page as a guest.
        </p1>
        <p1>
          Future plans includes adding a login method via Google and Facebook. 
        </p1>
      </div>
    </div>
  );
}