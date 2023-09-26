import "./main.scss";
import First from "../First/First";
import Home from "../Home/Home";


const Main = () => {
    window.onload = function(){
      var back = document.querySelector('.main')
      back.onmousemove = function(e) {
      var x = e.pageX - back.offsetLeft - back.offsetParent.offsetLeft
      var y = e.pageY - back.offsetTop - back.offsetParent.offsetTop
      back.style.setProperty('--x', x + 'px')
      back.style.setProperty('--y', y + 'px')
      }
    }
  return (
    <div className='main'>
        <First/>
        <Home/>
        <First/>
        <Home/>
    </div>
  )
}

export default Main