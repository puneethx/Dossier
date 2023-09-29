import React from 'react'
import "./contact.scss"
import {SiGmail} from "react-icons/si"
import {IoIosCall} from "react-icons/io"
import {BsGithub} from "react-icons/bs"

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
        <div className='title'><span>Feel free to Contact me</span></div>
        <div className="details">
            <div className="flex">
                <SiGmail/><span>puneethreddyt2004@gmail.com</span>
            </div>
            <div className='flex'>
                <IoIosCall/><span>9502478335</span>
            </div>
            <div className='flex'>
                <BsGithub/><a href="https://www.github.com/puneethx" target='_blank'><span>puneethx</span></a>
            </div>
        </div>
    </div>
  )
}

export default Contact