import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'

export default function Home() {
  return(
    <>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
      Student
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="student/view" id="dropdown-menu-align-responsive-1">View Student List</Dropdown.Item>
      <Dropdown.Item href="student/edit" id ="dropdown-menu-align-responsive-1">Edit Student List</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <br></br>
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
      Teacher
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item a href="teacher/view" id="dropdown-menu-align-responsive-1">View Teacher List</Dropdown.Item>
      <Dropdown.Item a href="teacher/edit" id="dropdown-menu-align-responsive-1">Edit Teacher List</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
      Courses
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="adminhome/course/view" id="dropdown-menu-align-responsive-1">View Course List</Dropdown.Item>
      <Dropdown.Item href="adminhome/course/edit" id="dropdown-menu-align-responsive-1">Edit Course List</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </>
  );
}