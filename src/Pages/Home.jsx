import React from 'react'
import { NavLink } from 'react-router-dom'
import TwitterIcon from '../assets/twitter-icon.png'
import LinkedinIcon from '../assets/linked-in.png'
import GithubIcon from '../assets/github-icon.jpg'
import frontImage from '../assets/img.jpg'
import resume from '../assets/Updated Resume.pdf'
import WhyMe from '../Static_Pages/WhyMe'
import MoreAboutMe from '../Static_Pages/MoreAboutMe'
import Skills from '../Static_Pages/Skills'
import Contact from './Contact'
import Navbar from '../Components/Navbar'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='home-container' >
                <div className='home-text-container'>
                    <div className='home-front-text-container'>
                        <h1 className='home-hello-heading'>Hello, <span> I'm</span> </h1>
                        <h1 className='home-name-text'>Suhail</h1>

                        <p className='home-profile-text'>
                            Full Stack developer
                        </p>
                        <div className='home-profile-description'>
                            <p >
                                This is my Portfolio website to show my details and works.
                                As a skilled Web developer, I am dedicated to turning
                                ideas into innovative web applications. Also i can provide a
                                clean code and responsive websites. I take pride in paying
                                attention to the smallest details and making sure that my
                                work is pixel perfect.
                            </p>
                            <p style={{color:"#00ff0d",letterSpacing:"1px"}}>
                                Let Me Get You A Beautiful Website.
                            </p>
                        </div>
                    </div>

                    <div className='home-btns-div' style={{margin:"20px 0px"}}>
                        <button className='home-resume-btn' >
                            <a href={resume} download='resume' className='resume-btn text-decoration-none' >
                                Resume
                            </a>
                        </button>

                        <NavLink to="/contact">
                            <button className='home-talk-btn'>
                                Let's Talk
                            </button>
                        </NavLink>
                    </div>

                    <div style={{position:"relative",}}>
                        <a href="https://x.com/SuhailA10733262" target='_blank' style={{marginRight:"20px"}}>
                            <img src={TwitterIcon} alt="TwitterIcon" className='home-link-icon-btn' />
                        </a>

                        <a href="https://www.linkedin.com/in/suhail-a0a975253/" target='_blank' style={{marginRight:"20px"}}>
                            <img src={LinkedinIcon} alt="LinkedinIcon" className='home-link-icon-btn'/>
                        </a>

                        <a href="https://github.com/suhail827974?tab=repositories" target='blank' >
                            <img src={GithubIcon} alt="GithubIcon" className='home-link-icon-btn'
                                    style={{borderRadius:"8px"}} />
                        </a>

                    </div>
                </div>
                <img src={frontImage} alt="front-img" className='home-font-img' />
            </div>

            <WhyMe />
            <Skills />
            <MoreAboutMe />
            <Contact />

        </div>
    )
}

export default Home