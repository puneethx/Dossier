import "./home.scss"
import Insta from "../assets/instagram.png"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"
import Mail from "../assets/mail.png"

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
              <li className="about">ABOUT<div className="box"></div></li>
              <li>SKILLS</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/puneethx/" target="_blank"><img className='insta' id="insta" src={Insta} alt='img'></img></a>
            <a href="https://www.linkedin.com/in/puneeth-reddy-75069824b/" target="_blank"><img className='linkedin' id="linkedin" src={Linkedin} alt='img'></img></a>
            <a href="mailto:puneethreddyt2004@gmail.com"><img className='mail' id="mail" src={Mail} alt='img'></img></a>
            <a href="https://www.github.com/puneethx/" target="_blank"><img className='github' id="github" src={Github} alt='img'></img></a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="about" id="About">
        <span>
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
      </div>
    </div>
  )
}

export default Home