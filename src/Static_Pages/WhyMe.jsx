import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './WhyMe.css'
// import SideImage from '../assets/sideImage.jpg'
import whyme from '../assets/whyme.webp'

function WhyMe() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='whyme-container'
      style={{ background: "#03052b", color: "white" }}>
      <div className='why-me-heading'>
        <h1 className='why-h1' data-aos="fade-up" data-aos-duration="2000"
        >WHY <span style={{ color: "#00ff2f" }}>ME</span></h1>
      </div>

      <div className='whyme-text-container' data-aos="fade-up" data-aos-duration="2000">
        <div className='whyme-text' >
          <p className='whyme-text-para' style={{ fontFamily: "Poppins, sans-serif", padding: "10px 10px" }}>
            I'd like to share with you the reasons why you should consider working with me or
            exploring opportunities together. In a world filled with talent and potential
            collaborators, you might be wondering, " Why me ? " <br />
            <span style={{ color: "#00ff2f", padding: "5px 0px", fontWeight: "bold" }}>Here's why:</span>
          </p>
          <p className='points-text'><span className='why-me-points'>1.</span> I never stop to improve myself, never give up for hard work and try my best.</p>
          <p className='points-text'><span className='why-me-points'>2.</span> I love to take responsibility and I like challenges.</p>
          <p className='points-text'><span className='why-me-points'>3.</span> I need the right opportunity and you are the response.</p>
          <p className='points-text'><span className='why-me-points'>4.</span> I bring my unique perspective, personality, and creativity to every project.</p>
          <p className='points-text'><span className='why-me-points'>5.</span> I am deeply passionate about what I do.</p>

        </div>

        <div className='whyme-img-div'>
          <img src={whyme} alt="side-img"  data-aos="fade-up" data-aos-duration="2000"
            className='whyme-img rounded' />
        </div>

      </div>

    </div>
  )
}

export default WhyMe