import "./first.scss"
import Avatar from "../assets/avatar.png"
import X from "../assets/x.svg"
import Horline from "../assets/line-hor.svg"
import Verline from "../assets/line-ver.svg"
import Test2 from "../assets/test2.png"
import About from "../assets/about2.png"
import Skill from "../assets/horskills.png"
import Skill2 from "../assets/verskills.png"


const First = () => {
  window.onscroll = function() {
    scrollRotate();
    scrollTranslate();
    aboutTranslate();
  };
  
  function scrollRotate() {
    let image = document.getElementById("X");
    image.style.transform = "rotate(" + window.scrollY*1 + "deg)";
  }

  function aboutTranslate() {
    let forY = window.scrollY*-2.05;
    if(forY > -1100){
      forY == forY;
    }
    else{
      forY = -1100;
    }
    let about = document.getElementById("test2");
    about.style.transform = "translateX(" + forY + "px)";
    let horskill = document.getElementById("horskill");
    horskill.style.transform = "translateX(" + forY + "px)";
  }

  function scrollTranslate() {
    let line = document.getElementById("verline");
    line.style.transform = "translateY(" + window.scrollY*2.05 + "px)";
    let line2 = document.getElementById("verline2");
    line2.style.transform = "translateY(" + window.scrollY*-1.5 + "px)";
    let abtimg = document.getElementById("abtimg");
    abtimg.style.transform = "translateY(" + window.scrollY*-1.30 + "px)";
    let verskill = document.getElementById("verskill");
    verskill.style.transform = "translateY(" + window.scrollY*-1.30 + "px)"; 
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
      <img className='verline' id="verline" src={Verline} alt='img'></img>
      <img className='verline2' id="verline2" src={Verline} alt='img'></img>
    </div>
  )
}

export default First