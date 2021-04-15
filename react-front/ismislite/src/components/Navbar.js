import {Nav, NavDropdown, Button, Container, Row, Col} from 'react-bootstrap/'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/img/banner.png';

// const NavbarComp = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//         {/* <Navbar.Brand href="#home">ISMIS Lite</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto" style={{float: 'center'}}>
//             <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
//             <Link to="/enrollment"><Nav.Link href="#link">Enrollment</Nav.Link></Link>
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



const useStyles = makeStyles((theme) => ({
    navbar: {
        maxwidth: '100%',
         height: '80px',
         backgroundColor: 'rgba(255,266,255,0.1)',
         '&:hover':{
            backgroundColor: 'rgba(255,266,255,1.0)',
           }, 
         justifyContent: 'space-between',
         display: 'flex',
         position: 'absolute',
         
    },

    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '0px',
        
    },

    li: {
        paddingLeft: '35px',
        marginTop: '10px',
        textDecoration: 'none',
        color: 'gray',
    },

    logo: {
        alignItems: 'center',
        marginTop: '20px',
        width: '300px',
        height: '40px',
    },

    button: {
        alignItems: 'center',
        display: 'flex',
        height: '40px',
        marginTop: '20px',
    }
  }));



const NavbarComp = () => {
    const classes = useStyles();

    return (
        <Container>
        <div className={classes.navbar}>
            <Row>
                <Col>
                    <img src={ Logo } alt='logo' className={classes.logo}></img>
                </Col>
                <Col>
                <ul className={classes.ul}>
                    <Link to="/"><li className={classes.li}>Home</li></Link>
                    <Link to="/services"><li className={classes.li}>Services</li></Link>
                    <Link to="/contact"><li className={classes.li}>Contact Us</li></Link>
                    <Link to="/about"><li className={classes.li}>About</li></Link>
                </ul>
                </Col>
                <Col>
                    <Button variant="outline-primary" className={classes.button} >Login</Button>
                </Col>
            </Row>
        </div>
        </Container>
    )
}

export default NavbarComp