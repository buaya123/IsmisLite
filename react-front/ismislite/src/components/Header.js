// import { Container } from "react-bootstrap"
// import PropTypes from 'prop-types'
// import '../assets/img/banner.png'
import Logo from '../assets/img/banner.png';

// Colors:
// #68CCA1
// #D9EDDF
// #006CD0

const Header = () => {
    return (
    <div className="banner" style={{height:'100px', width: '100%'}}>
        <img src={ Logo } alt='logo' style={{height:'60px', width: '400px', margin: '20px', float: 'left'}}></img>
        <div style={{height:'10px', width: '100%', color:'#68CCA1'}}></div>
    </div>
    )
}

export default Header