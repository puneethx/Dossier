import "./first.scss"
import Avatar from "../assets/avatar.png"
import X from "../assets/x.svg"
import Horline from "../assets/line-hor.svg"
import Verline from "../assets/line-ver.svg"
import Test2 from "../assets/test2.svg"
import About from "../assets/about2.png"
import Skill from "../assets/horskills.png"
import Skill2 from "../assets/verskills.png"
import Puneeth from "../assets/puneeth.svg";
import Reddy from "../assets/reddy.svg";
import Projects from "../assets/projects.svg";
import Projects2 from "../assets/projects2.svg";
import Contact from "../assets/horcon.svg";
import Contact2 from "../assets/vercon.svg";

const First = () => {
  window.onscroll = function() {
    scrollRotate();
    scrollTranslate();
    aboutTranslate();
    skillsTranslate();
    projectsTranslate();
  };
  
  function scrollRotate() {
    let image = document.getElementById("X");
    image.style.transform = "rotate(" + window.scrollY*1 + "deg)";
  }

  function aboutTranslate() {
    let forY = window.scrollY*-2.05;
    let cos = window.scrollY;
    console.log(cos);
    if(forY > -1100){
      forY == forY;
    }
    else{
      forY = -1100;
    }
    let about = document.getElementById("test2");
    about.style.transform = "translateX(" + forY + "px)";
  }

  function skillsTranslate() {
    let forS = window.scrollY*-1.95;
    if(forS > -2173){
      forS == forS;
    }
    else{
      forS = -2173;
    }
    let horskill = document.getElementById("horskill");
    horskill.style.transform = "translateX(" + forS + "px)";
  }

  function projectsTranslate() {
    let forP = window.scrollY*-1.95;
    if(forP > -4261){
      forP == forP;
    }
    else{
      forP = -4261;
    }
    let horpro = document.getElementById("horpro");
    horpro.style.transform = "translateX(" + forP + "px)";
  }


  function scrollTranslate() {
    let horline = document.getElementById("horline");
    horline.style.transform = "translateX(" + window.scrollY*2.05 + "px)";
    let line2 = document.getElementById("verline2");
    line2.style.transform = "translateY(" + window.scrollY*-1.5 + "px)";
    let abtimg = document.getElementById("abtimg");
    abtimg.style.transform = "translateY(" + window.scrollY*-1.30 + "px)";
    let verskill = document.getElementById("verskill");
    verskill.style.transform = "translateY(" + window.scrollY*-1.30 + "px)";
    let verpro = document.getElementById("verpro");
    verpro.style.transform = "translateY(" + window.scrollY*-1.30 + "px)";
    let vercon = document.getElementById("vercon");
    vercon.style.transform = "translateY(" + window.scrollY*-1.30 + "px)";  
    let puneeth = document.getElementById("puneeth");
    puneeth.style.transform = "translateY(" + window.scrollY*-0.75 + "px)"; 
    let reddy = document.getElementById("reddy");
    reddy.style.transform = "translateY(" + window.scrollY*-1.5 + "px)"; 
  }
  return (
    <div className='first'>
      <div className="image">
        <img src={Avatar} alt="Avatar-img"/>
      </div>
      <img className='X' id="X" src={X} alt='x'></img>
      <div className="about">
        <img className='test2' id="test2" src={Test2} alt=''></img>
      </div>
      <img className="abtimg" src={About} id="abtimg" alt="about" />
      <img className="horskill" src={Skill} id="horskill" alt="skill" />
      <img className="verskill" src={Skill2} id="verskill" alt="skill" />
      <img className='horline2' src={Horline} alt='img'></img>
      <img className='horline' id="horline" src={Horline} alt='img'></img>
      <img className='verline2' id="verline2" src={Verline} alt='img'></img>
      <img className="puneeth" id="puneeth" src={Puneeth} alt="puneeth" />
      <img className="reddy" id="reddy" src={Reddy} alt="reddy" />
      <img className="verpro" id="verpro" src={Projects2} alt="verpro"></img>
      <img className="horpro" id="horpro" src={Projects} alt="horpro"></img>
      <img className="horcon" id="horcon" src={Contact} alt="horcon"></img>
      <img className="vercon" id="vercon" src={Contact2} alt="vercon"></img>
    </div>
  )
}

export default First