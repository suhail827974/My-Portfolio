import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import walkingMan from '../assets/walking-man.jpg'
import growth from '../assets/growth.jpeg'
import coding from '../assets/coding.jpg'
import nature from '../assets/nature.jpg'
import join from '../assets/join-team.jpeg'

import './MoreAboutMe.css'


function MoreAboutMe() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className='more-about-container'>

      <div className='moreaboutme-main-heading'>
        <h1 data-aos='fade-up' data-aos-duration='2000'
        className='moreabout-h1'
        >More <span style={{ color: '#00ff2f' }}>About Me</span>
        </h1>
      </div>
      <div className='more-about-section more-about'
        data-aos='fade-up' data-aos-duration='2000'>
        <img src={walkingMan} />
        <div className='more-about-text description'>
          <h4 className='more-about-heading'>A Curious Wanderer</h4>
          <p className='more-about-para'>Life is a fascinating journey, and I embrace it with an insatiable curiosity.
            I find joy in exploring the mysteries of the world.
            The pursuit of knowledge, for me, is an ever-evolving adventure.</p>
        </div>
      </div>

      <div className='more-about-section more-about'
        data-aos='fade-up' data-aos-duration='2000'>
        <img src={growth} />
        <div className='more-about-text description'>
          <h4 className='more-about-heading'>An Advocate for Growth</h4>
          <p className='more-about-para'>Personal growth and self-improvement are essential pillars of my life.
            I believe that we have boundless potential within us, and by continually
            challenging ourselves, we can become the best version of who we are meant to be.
            I'm always seeking opportunities to learn, to expand my horizons,
            and to support others on their journeys.</p>
        </div>
      </div>

      <div className='more-about-section more-about'
        data-aos='fade-up' data-aos-duration='2000'>
        <img src={coding} />
        <div className='more-about-text description'>
          <h4 className='more-about-heading'>Tech Enthusiast</h4>
          <p className='more-about-para'>Living in the digital age, technology has become an integral part of our lives.
            I'm fascinated by the latest tech trends and innovations, and I'm always eager to
            explore how technology can positively impact our world. Whether it's the latest gadgets,
            software, or developments in artificial intelligence, I'm intrigued by it all</p>
        </div>
      </div>

      <div className='more-about-section more-about'
        data-aos='fade-up' data-aos-duration='2000'>
        <img src={nature} />
        <div className='more-about-text description'>
          <h4 className='more-about-heading'>A Nature Lover</h4>
          <p className='more-about-para'>While technology enthralls me, I find solace and rejuvenation in nature.
            Whether it's hiking through lush forests, strolling along sandy beaches, or
            simply admiring a breathtaking sunset, spending time outdoors reminds me of
            the beauty and interconnectedness of our world.</p>
        </div>
      </div>
      
      <div className='more-about-section more-about'
        data-aos='fade-up' data-aos-duration='2000'>
        <img src={join} />
        <div className='more-about-text description'>
          <h4 className='more-about-heading'>Join Me in the Journey</h4>
          <p className='more-about-para'>I'm delighted to share this journey with you. Through this platform,
            I hope to inspire, entertain, and connect with wonderful people like yourself.
            Let's learn from each other, grow together, and make this world a brighter place.</p>
        </div>
      </div>

    </div>
  )
}

export default MoreAboutMe