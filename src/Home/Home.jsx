import "./home.scss"
import Insta from "../assets/instagram.svg"
import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import Mail from "../assets/twitterx.svg"

import Skill from "../Skillmain/Skillmain";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="span"> 
          <span className="big"><a href="/">Puneeth Reddy</a></span><br/>
          <span className="med">Computer Science Engineer</span><br/>
          <div className="small">
            <span>I build accessible, inclusive websites<br/> 
            that leads to success to the overall product.</span>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#About">ABOUT<div className="line"></div></a></li>
              <li><a href="#Skills">SKILLS<div className="line"></div></a></li>
              <li><a href="#Projects">PROJECTS<div className="line"></div></a></li>
              <li><a href="#Contact">CONTACT<div className="line"></div></a></li>
            </ul>
          </div>
          <div className="social">
            <a id="instagram" href="https://www.instagram.com/puneethx/" target="_blank"><img className='insta' id="insta" src={Insta} alt='img'></img></a>
            <a href="https://www.linkedin.com/in/puneeth-reddy-75069824b/" target="_blank"><img className='linkedin' id="linkedin" src={Linkedin} alt='img'></img></a>
            <a href="https://www.x.com/puneeth2x" target="_blank"><img className='mail' id="mail" src={Mail} alt='img'></img></a>
            <a href="https://www.github.com/puneethx/" target="_blank"><img className='github' id="github" src={Github} alt='img'></img></a>
          </div>
        </div>
      </div>
      <div className="right">
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home