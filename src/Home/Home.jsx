import "./home.scss"
import Insta from "../assets/instagram.svg"
import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import Mail from "../assets/twitterx.svg"
import {SiJavascript,SiPython,SiTypescript,SiReact,
  SiAngularjs,SiBootstrap, SiSvelte,SiTailwindcss,SiMongodb,SiMysql} from "react-icons/si"
import {FaJava} from "react-icons/fa"
import {FaGolang,FaNodeJs} from "react-icons/fa6"
import {TbBrandNextjs} from "react-icons/tb"


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
        <div className="about" id="About">
        <span>
          Hello! I'm Puneeth Reddy, a dedicated and motivated student currently in my 6th Semester (3rd Year) at Vellore Institute of Technology,
          pursuing b.tech in Computer Science Engineering. <br/><br/>
          With a passion for technology and deep interest in web development, I have started learning to become a proficient full-stack web developer.
          My main objective is to create exceptional websites that not only function flawlessly but also provide a delightful user experience through intuitive and aesthetically pleasing designs.
          I've been marked a strong commitment to learning new technologies, frame works and methodologies. 
          <br/>I genuinely think that flexibility is the key to success in web development, and I am constantly keen to investigate and implement cutting-edge solutions into my projects.
          <br/>
          <br/>
          As I progress in my academic journey, I am actively seeking opportunities to apply my skills and knowledge in real-world settings.
          I've created several websites that reflect my dedication to the craft of web development, and I encourage you to explore these projects in more detail in Projects section.
        </span>
        </div>
        <div className="mainskill">
          <div className="skills">
              <div className="pro">
                <span className="head">Programming Languages</span><br/>
                <span className="body">Languages that I have practiced and have hands-on experience with</span>
                <div className="icons">
                  <div className="icon"><SiJavascript/></div>
                  <div className="icon"><SiTypescript/></div>
                  <div className="icon"><FaJava/></div>
                  <div className="icon"><FaGolang/></div>
                  <div className="icon"><SiPython/></div>
                </div>
              </div>
          </div>
          <div className="skills">
              <div className="pro">
                <span className="head">Frameworks & Libraries</span><br/>
                <span className="body">Libraries and Frameworks that I commonly work with</span>
                <div className="icons">
                  <div className="icon"><SiReact/></div>
                  <div className="icon"><SiAngularjs/></div>
                  <div className="icon"><SiBootstrap/></div>
                  <div className="icon"><SiSvelte/></div>
                  <div className="icon"><TbBrandNextjs/></div>
                  <div className="icon"><FaNodeJs/></div>
                  <div className="icon"><SiTailwindcss/></div>
                </div>
              </div>
          </div>
          <div className="skills">
              <div className="pro">
                <span className="head">Databases</span><br/>
                <span className="body">Databases that I have practiced and have hands-on experience with</span>
                <div className="icons">
                  <div className="icon"><SiMongodb/></div>
                  <div className="icon"><SiMysql/></div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home