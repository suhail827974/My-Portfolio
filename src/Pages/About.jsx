import React from 'react'
import frontImg from '../assets/img.jpg'
import './About.css'
import Education from '../Static_Pages/Education'
import Skills from '../Static_Pages/Skills'
import MoreAboutMe from '../Static_Pages/MoreAboutMe'
import Footer from '../Static_Pages/Footer'
import TwitterIcon from '../assets/twitter-icon.png'
import resume from '../assets/Updated Resume.pdf'
import LinkedinIcon from '../assets/linked-in.png'
import GithubIcon from '../assets/github-icon.jpg'
import { NavLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function About() {
  return (
    <div>
      <Navbar />
      <div className='about-container' style={{
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <h3 className='about-hello' style={{ paddingTop: "70px", fontSize: "20px" }}>Hello, I am</h3>
        <h1 className='about-name fs-1 fw-bold' ><span>S</span>uhail</h1>
        <p className='about-course-para fs-3 f'>web developer</p>
        <p className='about-para' >
          I believe that web development is about more than just making things look pretty.
          It's about solving problems and making intuitive, enjoyable Experience for users.
          Every website should be built with two primary goals. fistly,
          it needs to work across all devices. secondly, it needs to be fast as possible.
          Whenever i'm working on a website, I bring my commitment to develop excellence
          and user-centered thinking to every project I work on.
        </p>


        <div>

          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0px" }}>
            <a href="https://x.com/SuhailA10733262" target='_blank' >
              <img src={TwitterIcon} alt="TwitterIcon" className='about-link-icon-btn'
                style={{
                  width: "30px", height: "30px",
                }} /></a>

            <a href="https://www.linkedin.com/in/suhail-a0a975253/" target='_blank' style={{ margin: "0px 20px" }}>
              <img src={LinkedinIcon} alt="LinkedinIcon" className='about-link-icon-btn'
                style={{
                  width: "30px", height: "30px",
                }} /></a>

            <a href="https://github.com/suhail827974?tab=repositories" target='blank' >
              <img src={GithubIcon} alt="GithubIcon" className='about-link-icon-btn'
                style={{
                  width: "30px", height: "30px", borderRadius: "8px"
                }} /></a>

          </div>

          <div className='about-btns-div' >
            <button className='about-btns download-resume-btn'>
              <a href={resume} download='resume'
                className='text-white text-decoration-none'
              >Download Resume</a>
            </button>

            <NavLink to="/contact">
              <button className='about-btns hire-me-btn'>
                Hire me
              </button>
            </NavLink>
          </div>

          <div className='about-circle'>
            <img src={frontImg} alt="front-img" className='about-front-img' />
            <div className='circle'></div>
          </div>

        </div>
      </div>

      <div><Education /></div>
      <div><Skills /></div>
      <div><MoreAboutMe /></div>
      <div><Footer /></div>
    </div>

  )
}

export default About