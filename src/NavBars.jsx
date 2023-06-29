import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import'./style.css';

function NavBars() {

    return (
    <>
  <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto ">
          <NavLink  to="/" >Home </NavLink>
          <NavLink  to="/Employee/Formik_form" >Add User</NavLink>
          <NavLink  to="/Employee/Mainedit" >Employee</NavLink>
          <NavLink  to="/Employee" >Detail</NavLink>
          {/* <NavLink  to="/" >Login</NavLink> */}
          </Nav>
        </Container>
   </Navbar>
    </>
  );
    }
export default NavBars;

