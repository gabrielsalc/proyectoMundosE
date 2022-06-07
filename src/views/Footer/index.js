import Logo from './top-logo.png';

function Footer(){
    return(
    <div ClassName="container-fluid flex flex-box" id="footer">
    <p id="footerh4" >2020 © All rights reserved.</p>
    <a id="afooter" href="#home"><img src={Logo} alt="logo 25Watts" /></a>
    </div>
    )
}


export default Footer;