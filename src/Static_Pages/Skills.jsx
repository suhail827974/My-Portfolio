import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Skills.css'
import java from '../assets/java.webp'
import javascript from '../assets/javascript.jpeg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import git from '../assets/git.jpeg'
import nodejs from '../assets/nodejs.png'
import react from '../assets/reactjs.png'
import bootstrap from '../assets/bootstrap.jpeg'
import expressjs from '../assets/expressjs.png'
import mongodb from '../assets/mongodb.png'


function Skills() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='skills-component'>
      <div className='skills-main-heading'>
        <h1 className='heading-h1' data-aos="fade-up" data-aos-duration="2000"
        >My <span style={{ color: "#00ff2f" }}>Skills</span></h1>
      </div>

      <div className='skills-section' >

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={java} alt="Java-img" />
          <div className='skill-name'>
            <h3 className='heading-h3'>Core Java</h3>
            <p className='para'>Solved 100+ DSA questions</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={html} alt="HTML-img" style={{}} />
          <div className='skill-name'>
            <h3>HTML</h3>
            <p>Developed many pages</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={css} alt="CSS-img" />
          <div className='skill-name'>
            <h3>CSS</h3>
            <p>Styling many pages</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={bootstrap} alt="Bootstrap-img" />
          <div className='skill-name'>
            <h3>Bootstrap</h3>
            <p>Styling many pages......</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={javascript} alt="JavaScript-img" />
          <div className='skill-name'>
            <h3>JavaScript</h3>
            <p>Developed more than five projects</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={react} alt="React-img" id='react-img' />
          <div className='skill-name'>
            <h3>React</h3>
            <p>Developed more than five projects</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={nodejs} alt="Node-img" />
          <div className='skill-name'>
            <h3>Node.js</h3>
            <p>Created Full Stack Online-Shopping App</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={expressjs} alt="Express-img" />
          <div className='skill-name'>
            <h3>Express.js</h3>
            <p>Created Full Stack Online-Shopping App</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={mongodb} alt="Mongodb-img" />
          <div className='skill-name'>
            <h3>Mongodb</h3>
            <p>Created Full Stack Online-Shopping App</p>
          </div>
        </div>

        <div className='skill skills' data-aos="fade-up" data-aos-duration="2000">
          <img src={git} alt="Git-img" />
          <div className='skill-name'>
            <h3>Git</h3>
            <p>Basic commands in Git</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills