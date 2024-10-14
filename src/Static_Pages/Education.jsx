import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Education.css'

const Education = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='education-container'>
      <div className='education-main-heading'>
        <h1 data-aos="fade-up" data-aos-duration="2000"
          className='education-heading'
        >My <span style={{color:"#00ff2f"}}>Education</span>
        </h1>
      </div>

      <div className='all-course border p-4  rounded mt-5'>
        <h4 className='education-text-color'>Master of Computer Application (2022 - 2024)</h4>
        <p className='education-para mb-3'>Galgotias University, Greater Noida</p>
    
        <h4 className='education-text-color'>Bachelor of Science (2017 - 2021)</h4>
        <p className='education-para mb-3'>Nehtaur Degree College , Nehtaur</p>

        <h4 className='education-text-color'>Intemediate (2016 - 2017)</h4>
        <p className='education-para mb-3'>S.M.S Inter College, Nehtaur</p>

        <h4 className='education-text-color'>High School (2014 - 2015)</h4>
        <p className='education-para'>S.M.S Inter College, Nehtaur</p>
      </div>
    </div>
  )
}

export default Education