import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

export const Footer = () => {
    return(
        <div className='Footer-container'>
            <hr />
            <div className='footer'>
                <div className='social-links'>
                    <img src={Github} alt=""/>
                    <img src={Instagram} alt=""/>
                    <img src={LinkedIn} alt=""/>
                </div>
                <div className='logo-f'>
                    <img src={Logo} alt=""/>
                </div>
                <div className='blur blur-f-2'></div>
            </div>
            <div className='blur blur-f-1'></div>

        </div>
    )
}