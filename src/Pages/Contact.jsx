import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Static_Pages/Footer';
import Navbar from '../Components/Navbar';
import contactMe from '../assets/contact-me.webp'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_59t0ja2', 'template_m80bken', form.current, {
        publicKey: 'ew3WfSbRUPKAGLGwr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    useEffect(() => {
      Aos.init()
    })
  }

  return (
    <div>
      <div style={{ backgroundColor: "#03052b", color: "white", }}>
        <Navbar />
        <div className='contact-main-heading'>
          <h1 className='contact-h1' data-aos='fade-up' data-aos-duration="2000"
          >Get <span style={{ color: "#00ff2f" }}>in touch</span>
          </h1>
        </div>

        <div className='contact-form-with-img'>
          <img src={contactMe} />
          <div className='contact-form ' >
            <form ref={form} onSubmit={sendEmail}>

              <label className='contact-label pb-1'>Name</label>
              <input type="text" name="from_name" className='contact-inp' />

              <label className='contact-label pt-3 pb-1'>Email</label>
              <input type="email" name="from_email" className='contact-inp' />

              <label className='contact-label pt-3 pb-1'>Message</label>
              <textarea name="message" className='contact-inp ' id='contact-textarea' />

              <input type="submit" value="Send" className='contact-submit-btn' />

            </form>
          </div>
        </div>
        <div><Footer /></div>
      </div>
    </div>
  )
};

export default Contact;