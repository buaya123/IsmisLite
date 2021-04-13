import { Container, Row, Col , Button} from "react-bootstrap"
import Logo from '../assets/img/logo.png'
import Banner from '../assets/img/bg1.png'
import Bg1 from '../assets/img/bg2.png'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  centerThing:{
    justifyContent: 'center',
    position: 'absolute',
    top:'50px',
    left:'100px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  navBtn:{
    padding: theme.spacing(2),
    textAlign: 'center',
    '@media (width: 250px) and (height: 250px)': {
        background: '#000',
      },
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    outline: 'none'
  },
  backgroundImg: {
    backgroundImage: "url('../assets/img/bg2.png')",
    height: 'auto',
    width: 'auto'
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Container>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
                <img
              src={ Logo } alt='logo'
              width="40"
              height="30"
              className="d-inline-block align-top"
            />
            ISMIS Lite</Navbar.Brand>
        </Navbar>
      </div>
      <div className={classes.backgroundImg}>
        <Row>
          <Col style={{margin: '50px'}}>
            <h2 style={{marginTop: '80px'}}>Lorem Ipsum</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
            <div style={{marginTop: '30px'}}>
              <Button variant="outline-success" style={{marginLeft: '40px'}}>Learn More</Button>
              <Button variant="outline-success" style={{marginLeft: '40px'}}>Contact Us</Button>
            </div>
          </Col>
          <Col >
          <img
              className={classes.centerThing}
              src={ Banner } alt='logo'
              width="300"
              height="200"
            />
          </Col>
        </Row>
      </div>
      <div style={{height:'10px', width: '100%', backgroundColor:'black'}}></div>
      <section>
        This is the 2nd section (Carousel/Products/Services)
      </section>
      <div style={{height:'10px', width: '100%', backgroundColor:'black'}}></div>
      <section>
        Enroll now!
      </section>
    </Container>
  );
}

export default Landing;