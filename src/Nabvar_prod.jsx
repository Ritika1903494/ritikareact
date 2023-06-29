import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import'./style.css';

function Nabvar_prod() {

    return (
    <>
  <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto ">
          <NavLink  to="/" >Home </NavLink>
          <NavLink  to="/productdetail" >Details</NavLink>
          </Nav>
        </Container>
   </Navbar>
    </>
  );
    }
export default Nabvar_prod;

