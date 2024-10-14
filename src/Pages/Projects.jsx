import React, { useEffect } from 'react'
import './Projects.css'
import Aso from 'aos'
import 'aos/dist/aos.css'
import { FcCalendar } from "react-icons/fc";
import Footer from '../Static_Pages/Footer'
import Navbar from '../Components/Navbar'
import { FaExternalLinkAlt } from 'react-icons/fa';
import tictactoe from '../assets/tic-tac-toe.png'
import ecart from '../assets/e-cart.png'
import randomPassword from '../assets/random-password-generator.png'
import appleCalculator from '../assets/apple-calculator.png'
import studyblogs from '../assets/study-blogs.png'
// import movieA from '../assets/movie-fetchinga.png'
import movieB from '../assets/movie-fetchingb.png'
import weather from '../assets/weather-app.png'
import randomGif from '../assets/gif.png'
import testimonial from '../assets/My-Testimonial.png'
import spotify from '../assets/spotify.png'
import Aos from 'aos';


function Projects() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className='project-container '>
      <Navbar />
      <div className='all-projects-child-container pt-5'>
        <div className='projects-main-heading'>
          <h1 className='project-heading'
            data-aos="fade-up" data-aos-duration="2000"
          >My <span style={{ color: "#00ff2f" }}
          >Projects</span></h1>
        </div>

        <div
          className='single-project-detail special-height  mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> July - 2024</p>
            <h4 style={{ color: "#00ff2f" }}>Online Shopping</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The E-commerce project that offers a seamless shopping experience.
              The platform will feature an intuitive user interface, efficient product categorization.
              The technology I used in this project are ReactJs, Fake Store API and Bootstrap CSS.
            </p>
            <a href='https://suhail-e-cart-react.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span >Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={ecart} className='projects-img rounded' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
          style={{}}
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> June - 2024</p>
            <h4 style={{ color: "#00ff2f" }}>Tic Tac Toe</h4>
            <div style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              <p> <span className='projucct-points-color'>1. </span>Players take turns putting their marks in empty squares. </p>
              <p> <span className='projucct-points-color'>2. </span>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. </p>
              <p> <span className='projucct-points-color'>3. </span>When all 9 squares are full, the game is over. </p>
              <p> <span className='projucct-points-color'>4. </span>If no player has 3 marks in a row, the game ends in a tie.</p>
            </div>
            <a href='https://suhail827974.github.io/Tic-Tac-Toe-game/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={tictactoe} className='projects-img rounded' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> May - 2024</p>
            <h4 style={{ color: "#00ff2f" }} id='random-id'>Random Password Generator</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Random Password Generator is a JavaScript-based project that generates
              secure, random passwords based on user-specified criteria, such as length and inclusion of characters
              (uppercase, lowercase, numbers, and special symbols). also shows the strength of the password
              This tool ensures strong, unpredictable passwords, enhancing security for online accounts and sensitive data.
            </p>
            <a href='https://suhail-random-password-genrerator.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='align-self-center'>
            <img src={randomPassword} className='projects-img rounded' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> April - 2024</p>
            <h4 style={{ color: "#00ff2f" }}>Apple Calculator</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Calculator is a JavaScript project that performs basic arithmetic operations
              like addition, subtraction, multiplication, and division.
              It features an interactive user interface, allowing users to input numbers and operators,
              delivering real-time results for quick and efficient calculations.
            </p>
            <a href='https://suhail-apple-calculator.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='align-self-center'>
            <img src={appleCalculator} className='projects-img rounded' />
          </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5 '>
          <div className='project-all-details'>
            <p><FcCalendar /> March - 2024</p>
            <h4 style={{ color: "#00ff2f" }}>Study Blogs</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Study Blogs project is a React.js-based platform where users can read, and share educational content.
              It offers a clean, user-friendly interface for writing and browsing study-related blogs,
              promoting knowledge sharing and collaboration among students and educators.
            </p>
            <a href='https://suhail-blogs.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={studyblogs} className='projects-img rounded' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> February - 2024</p>
            <h4 style={{ color: "#00ff2f" }}>Movie Fetching App</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Movie Fetching App is a project that allows users to
              search and browse movies by fetching data from an external API.
              It provides movie details like name, title, rating, and length, of the Movie.
              good interface for discovering and exploring films.
            </p>
            <a href='https://suhail-movie-fetching-app.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={movieB} className='projects-img rounded' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> January - 2024</p>
            <h4 style={{ color: "#00ff2f" }}>Weather App</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Weather App is a JavaScript project that provides real-time weather updates for any location using an API.
              It features a simple, user-friendly interface where users can input a city name to view
              current weather conditions, including temperature, humidity, and forecasts.
            </p>
            <a href='https://suhail-weather-app.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={weather} className='projects-img rounded' />
          </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> November - 2023</p>
            <h4 style={{ color: "#00ff2f" }}>Spotify</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Spotify App is a front-end project built with HTML and CSS, designed to mimic the interface of Spotify.
              It features a clean, responsive design that includes elements like playlists,
              and album art, providing a visually appealing music streaming experience.
            </p>
            <a href='https://suhail827974.github.io/Spotify-Clone/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={spotify} className='projects-img rounded' />
          </div>
        </div>


        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> October - 2023</p>
            <h4 style={{ color: "#00ff2f" }}>Testimonial</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              It features an engaging layout that showcases your
              credibility and providing visitors with insights into your skills.
            </p>
            <a href='https://suhail-testimonial-mocha.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={testimonial} className='projects-img rounded' />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000"
          className='single-project-detail mt-5 mb-5'>
          <div className='project-all-details'>
            <p><FcCalendar /> September - 2023</p>
            <h4 style={{ color: "#00ff2f" }}>Random GIF</h4>
            <p style={{ wordBreak: "break-word", margin: "30px 0px" }}>
              The Random GIF project is a React.js application that fetches and displays random GIFs from a public API.
              Users can explore a variety of animated images with a simple interface,
              allowing for an engaging and fun experience in discovering and sharing GIFs.
            </p>
            <a href='https://suhail-random-gif-smoky.vercel.app/' target='-blank'>
              <button className='projects-all-btns'>
                <span>Visit</span> <FaExternalLinkAlt />
              </button></a>
          </div>
          <div className='projucts-img-div'>
            <img src={randomGif} className='projects-img rounded' />
          </div>
        </div>


      </div>

      <div><Footer /></div>

    </div>
  )
}

export default Projects