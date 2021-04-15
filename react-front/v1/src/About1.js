import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Parallax, Background } from 'react-parallax'
import about1Img from './about1.jpg'
import { Container, Row, Col } from 'react-grid-system'

const useStyles = makeStyles({
    About_container: {
        height: '54vh',
        background: 'white',
        opacity: '1',
        position: 'relative',
        flexDirection: 'row',
        position: ' relative',
        
    },
    About_img: {
        position: 'relative',
        maxwidth: 'auto',
        height: '54vh',
    },
    About_title: {
        width: '686px',
        color: 'rgba(0,0,0,1)',
        position: 'absolute',
        fontFamily: 'Arial Black',
        fontWeight: 'Bold',
        fontSize: '3vw',
        opacity: '1',
        textAlign: 'left',
        left: '100px',
        
    },
    About_text :{
        width: '500px',
        color: 'rgba(0,0,0,0.800000011920929)',
        position: 'absolute',
        fontFamily: 'Arial',
        fontWeight: 'Regular',
        fontSize: '1.1vw',
        opacity: '1',
        textAlign: 'justify',
        textJustify: 'inter-word',
        marginTop: '30px',
        left: '100px',
        height: '500px'
        
    },
    About_line:{
        borderBottom: '23px ridge #ED2E20',
        width:'60vh',
        top: '100px',
        left: '950px',
        margin: '0px'
    },
    About_left:{
        
        margin: '0',
        overflow:'hidden'
    },
    About_right:{
        margin: '0',
        
    },
    About_row:{
        margin: '80px'
    }

  });


const About1 = () => {
    const classes = useStyles();
    return (
        <div>
            <Container fluid className={classes.About_container}>
                <Row className={classes.About_row}>
                    <Col sm={7} className={classes.About_left}>
                        <Parallax className={classes.About_img} bgImage={about1Img} strength={600}>        
                        </Parallax>
                    </Col>
                    <Col sm={5} className={classes.About_right}>
                            <Col className={classes.About_title} style={{marginTop: '30px'}}>ACADEMIC</Col>
                            <Col className={classes.About_title} style={{top: '' }}>EXCELLENCE<hr className={classes.About_line} ></hr></Col>
                            <Col className={classes.About_text}>Laboris veniam magna labore minim non qui dolore incididunt non minim fugiat nostrud amet. Exercitation officia incididunt qui occaecat pariatur non nostrud pariatur qui ad id. Exercitation labore id eu quis veniam. Tempor non officia aliqua amet sunt enim pariatur ad ad tempor. Eu consequat sunt consectetur eu reprehenderit labore. Sint do nulla dolore irure aliquip. Minim quis veniam nulla cillum consequat quis ea Lorem sit Lorem officia. Reprehenderit amet do laboris commodo consequat fugiat pariatur id sit dolore velit. Nisi do enim dolore reprehenderit do dolor. Eu irure sint duis ut do elit mollit veniam esse.</Col>  
                    </Col>
                </Row>
                </Container>
                <Container fluid className={classes.About_container}>
                <Row className={classes.About_row}>
                    <Col sm={5} className={classes.About_left}>
                            <Col className={classes.About_title} style={{marginTop: '30px'}}>ACADEMIC</Col>
                            <Col className={classes.About_title} style={{top: ''}}>EXCELLENCE<hr className={classes.About_line}  align='right'></hr></Col>
                            <Col className={classes.About_text}>Laboris veniam magna labore minim non qui dolore incididunt non minim fugiat nostrud amet. Exercitation officia incididunt qui occaecat pariatur non nostrud pariatur qui ad id. Exercitation labore id eu quis veniam. Tempor non officia aliqua amet sunt enim pariatur ad ad tempor. Eu consequat sunt consectetur eu reprehenderit labore. Sint do nulla dolore irure aliquip. Minim quis veniam nulla cillum consequat quis ea Lorem sit Lorem officia. Reprehenderit amet do laboris commodo consequat fugiat pariatur id sit dolore velit. Nisi do enim dolore reprehenderit do dolor. Eu irure sint duis ut do elit mollit veniam esse.</Col>
                    </Col>
                    <Col sm={7} className={classes.About_right}>
                    <Parallax className={classes.About_img} bgImage={about1Img} strength={600}>        
                        </Parallax>
                    </Col>
                </Row>
                </Container>
                <Container fluid className={classes.About_container}>
                <Row className={classes.About_row}>
                    <Col sm={7} className={classes.About_left}>
                        <Parallax className={classes.About_img} bgImage={about1Img} strength={600}>        
                        </Parallax>
                    </Col>
                    <Col sm={5} className={classes.About_right}>
                        <Col className={classes.About_title} style={{marginTop: '30px'}}>ACADEMIC</Col>
                        <Col className={classes.About_title} style={{top: ''}}>EXCELLENCE<hr className={classes.About_line}></hr></Col>
                        <Col className={classes.About_text}>Laboris veniam magna labore minim non qui dolore incididunt non minim fugiat nostrud amet. Exercitation officia incididunt qui occaecat pariatur non nostrud pariatur qui ad id. Exercitation labore id eu quis veniam. Tempor non officia aliqua amet sunt enim pariatur ad ad tempor. Eu consequat sunt consectetur eu reprehenderit labore. Sint do nulla dolore irure aliquip. Minim quis veniam nulla cillum consequat quis ea Lorem sit Lorem officia. Reprehenderit amet do laboris commodo consequat fugiat pariatur id sit dolore velit. Nisi do enim dolore reprehenderit do dolor. Eu irure sint duis ut do elit mollit veniam esse.</Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About1
