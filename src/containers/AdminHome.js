import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'semantic-ui-react';

export default function Home() {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link a href="adminhome/student/view">Student</Nav.Link>
      <Nav.Link href="adminhome/teacher/view">Instructors</Nav.Link>
      <Nav.Link href="adminhome/evaluations/send">Evaluations</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}