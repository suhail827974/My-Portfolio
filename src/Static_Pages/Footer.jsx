import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import LinkedinIcon from '../assets/linked-in.png'
import GithubIcon from '../assets/github-icon.jpg'
import MailLogo from '../assets/mailcopy.png'

const Footer = () => {
    return (

        <div className='footer-container'>
            <div className='footer-text'>
                <h1 className='footer-h'>Contact</h1>
                <p className='footer-p'>Feel free to reach out!</p>
            </div>

            <div className='footer-all-links'>

                <div className='footer-mail-link'>
                    <NavLink to="/contact" className="d-flex text-decoration-none align-items-center">
                        <img src={MailLogo} alt="mail-img" />
                        <p className='footer-link-text'>suhailntr02@gmail.com</p>
                    </NavLink>
                </div>

                <div className='footer-linkedin-link' >
                    <img src={LinkedinIcon} alt="linkedin-img"  />
                    <a href="https://www.linkedin.com/in/suhail-a0a975253/" target='_blank'
                        className='footer-link-text text-decoration-none'>Linkedin.com/Suhail</a>
                </div>

                <div className='footer-github-link'>
                    <img src={GithubIcon} alt="github-img" />
                    <a href="https://github.com/suhail827974?tab=repositories" target='blank'
                        className='footer-link-text text-decoration-none'>Github.com/suhail827974</a>
                </div>

            </div>
        </div>

    )
}

export default Footer