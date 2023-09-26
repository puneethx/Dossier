import "./first.scss"
import Avatar from "../assets/avatar.png"
import X from "../assets/x.svg"
import Horline from "../assets/line-hor.svg"
import Verline from "../assets/line-ver.svg"
import Test2 from "../assets/test2.png"
import About2 from "../assets/about2.png"


const First = () => {
  window.onscroll = function() {
    scrollRotate();
    scrollTranslate();
  };

  function scrollRotate() {
    let image = document.getElementById("X");
    image.style.transform = "rotate(" + window.scrollY*1 + "deg)";
    let img = document.getElementById("X2");
    img.style.transform = "rotate(" + window.scrollY*0.5 + "deg)";
  }

  function scrollTranslate() {
    let ro = document.getElementById("ro");
    ro.style.transform = "translateY(" + window.scrollY*1 + "px)";
    let line = document.getElementById("verline");
    line.style.transform = "translateY(" + window.scrollY*3.5 + "px)";
    let line2 = document.getElementById("verline2");
    line2.style.transform = "translateY(" + window.scrollY*-1.5 + "px)";
    let about = document.getElementById("test2");
    about.style.transform = "translateX(" + window.scrollY*-2.05 + "px)";
    let horline = document.getElementById("horline");
    horline.style.transform = "translateX(" + window.scrollY*3.5 + "px)";
    let span = document.getElementById("span");
    span.style.transform = "translateX(" + window.scrollY*2 + "px)";
    let abt = document.getElementById("about");
    abt.style.transform = "translateY(" + window.scrollY*10 + "px)";
    
    
  }
  return (
    <div className='first'>
      <div className="image">
        <img src={Avatar} alt="Avatar-img"/>
      </div>
      <img className='X' id="X" src={X} alt='x'></img>
      <div className="ro" id="ro"><img className='X2' id="X2" src={X} alt='x2'></img></div>
      <div className="about">
        <img className='test2' id="test2" src={Test2} alt=''></img>
      </div>
      <img className="about2" src={About2} id="about" alt="about" />
      <img className='horline' id="horline" src={Horline} alt='img'></img>
      <img className='horline2' src={Horline} alt='img'></img>
      <img className='verline' id="verline" src={Verline} alt='img'></img>
      <img className='verline2' id="verline2" src={Verline} alt='img'></img>
    </div>
  )
}

export default First