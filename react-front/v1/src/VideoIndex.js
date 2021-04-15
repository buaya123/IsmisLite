import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Container, Row, Col } from 'react-grid-system'


const useStyles = makeStyles({
    Video: {
        
        opacity: '0.5',
        position: 'relative',
        top:'0',
        marginBottom: '50px',
        width:'100%',
        objectFit: 'cover',
      
    },
    Motto : {
        float:'left' , 
        position:'absolute',
        fontSize: '84px',
        lineHeight: '1em',
        left: '200px'
    }
  });


const VideoIndex = () => {
    const classes = useStyles();
    return (
        <div >
            
            <video className={classes.Video} autoPlay={true} width="100%" height="840px" muted>
                <source src="indexVid.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <div>
            <h1 className={classes.Motto} style={{top:'440px'}}>SCIENTIA</h1>
            <h1 className={classes.Motto} style={{top:'510px'}}>VIRTUS</h1>
            <h1 className={classes.Motto} style={{top:'580px'}}>DEVOTIO</h1>
            </div>
		</div>
    )
}

export default VideoIndex
