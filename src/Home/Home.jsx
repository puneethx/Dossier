import "./home.scss"
import Insta from "../assets/instagram.svg"
import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import Mail from "../assets/twitterx.svg"

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
            <a href="https://www.instagram.com/puneethx/" target="_blank"><img className='insta' id="insta" src={Insta} alt='img'></img></a>
            <a href="https://www.linkedin.com/in/puneeth-reddy-75069824b/" target="_blank"><img className='linkedin' id="linkedin" src={Linkedin} alt='img'></img></a>
            <a href="https://www.x.com/puneeth2x" target="_blank"><img className='mail' id="mail" src={Mail} alt='img'></img></a>
            <a href="https://www.github.com/puneethx/" target="_blank"><img className='github' id="github" src={Github} alt='img'></img></a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="about" id="About">
        <span>
          Hello! I'm Puneeth Reddy, a 5th Semester (3rd Year) student at Vellore Institute of Technology
          Organized and dependable candidate successful at managing 
          <br/>
          multiple priorities with a positive attitude. Willingness to take on
          <br/>
          added responsibilities to meet team goals. Detail-oriented team
          <br/>
          member with strong organizational skills. Ability to handle multiple

          projects simultaneously with a high degree of accuracy.


          Experienced Web Developer adept in all Stages Of web development.

          Knowledgeable in user interface, testing, and debugging processes,

          Bringing forth expertise in design, installation, testing and

          maintenance of web systems.
          <br/>
          • Applied emerging technologies to update and maintain site

          applicability. 
          <br/>
          • Implemented content management and security
          resource tutorials to assist end-user training.
          • Provided security maintenance and patching on website interface
          to maintain viability after launch.
          <br/>
          • Experienced UI/UX
          <br/>
          • Worked closely with UX and product teams to define visual and
          functional requirements.
          <br/>
          • Used wireframes, mock-ups and prototypes myself to establish

          user interface design and architecture
        </span>
        </div>
        <div className="skills">
          
        </div>
      </div>
    </div>
  )
}

export default Home