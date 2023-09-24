import "./first.scss"
import Avatar from "../assets/Avatar.jpg"
import X from "../assets/x.svg"
import Horline from "../assets/line-hor.svg"

const First = () => {
  return (
    <div className='first'>
      <div className='text'>
        <span>Puneeth is a Full-stack Web Developer <br/> and UI/UX Javascript specialist.</span>
      </div>
      <div className="image">
        <img src={Avatar} alt="Avatar-img"/>
      </div>
      <img className='x' src={X} alt='x'></img>
      <img className='horline' src={Horline} alt='img'></img>
      <span> who loves to build Web Applications that leads to success <br/>of the overall product.</span>
    </div>
  )
}

export default First