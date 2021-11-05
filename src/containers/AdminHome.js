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
      <Dropdown.Item href="adminhome/student/view" id="dropdown-menu-align-responsive-1">View Student List</Dropdown.Item>
      <Dropdown.Item href="adminhome/student/edit" id ="dropdown-menu-align-responsive-1">Edit Student List</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <br></br>
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
      Teacher
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="adminhome/teacher/view" id="dropdown-menu-align-responsive-1">View Teacher List</Dropdown.Item>
      <Dropdown.Item href="adminhome/teacher/edit" id="dropdown-menu-align-responsive-1">Edit Teacher List</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </>
  );
}