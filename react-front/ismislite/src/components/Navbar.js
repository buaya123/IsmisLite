import {Nav, NavDropdown, Button} from 'react-bootstrap/'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

// const NavbarComp = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//         {/* <Navbar.Brand href="#home">ISMIS Lite</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto" style={{float: 'center'}}>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Enrollment</Nav.Link>
//             {/* <NavDropdown title="Student Task" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Enrollment</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">View Grades</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Assessment</NavDropdown.Item>
//             </NavDropdown> */}
//             </Nav>
//         </Navbar.Collapse>
//         </Navbar>
//     )
// }

const NavbarComp = () => {
    return (
        <div className="Nav">
            <h3>Logo</h3>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </div>
    )
}

export default NavbarComp