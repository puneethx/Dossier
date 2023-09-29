import React from 'react'
import {SiJavascript,SiPython,SiTypescript,SiReact,
    SiAngularjs,SiBootstrap, SiSvelte,SiTailwindcss,SiMongodb,SiMysql} from "react-icons/si"
import {FaJava} from "react-icons/fa"
import {FaGolang,FaNodeJs} from "react-icons/fa6"
import {TbBrandNextjs} from "react-icons/tb"
import "./skillmain.scss"


const Skillmain = () => {
  return (
    <div className="skillmain">
          <div className="skills">
              <div className="pro">
                <span className="head">Programming Languages</span><br/>
                <span className="body">Languages that I have practiced and have hands-on experience with</span>
                <div className="icons">
                  <div className="icon"><SiJavascript/>
                    <div className="hovername">
                      Javascript
                    </div>
                  </div>
                  <div className="icon"><SiTypescript/>
                    <div className="hovername">
                      Typescript
                    </div>
                  </div>
                  <div className="icon"><FaJava/>
                    <div className="hovername">
                      Java
                    </div>
                  </div>
                  <div className="icon"><FaGolang/>
                    <div className="hovername">
                        GoLang
                      </div>
                    </div>
                  <div className="icon"><SiPython/>
                    <div className="hovername">
                      Python
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="skills">
              <div className="pro">
                <span className="head">Frameworks & Libraries</span><br/>
                <span className="body">Libraries and Frameworks that I commonly work with</span>
                <div className="icons">
                  <div className="icon"><SiReact/>
                    <div className="hovername">
                      React
                    </div>
                  </div>
                  <div className="icon"><SiAngularjs/>
                    <div className="hovername">
                      Angular
                    </div>  
                  </div>
                  <div className="icon"><SiBootstrap/>
                    <div className="hovername">
                      Bootstrap
                    </div>
                  </div>
                  <div className="icon"><SiSvelte/>
                    <div className="hovername">
                      Svelte
                    </div>
                  </div>
                  <div className="icon"><TbBrandNextjs/>
                    <div className="hovername">
                      Next
                    </div>
                  </div>
                  <div className="icon"><FaNodeJs/>
                    <div className="hovername">
                      Node
                    </div>
                  </div>
                  <div className="icon"><SiTailwindcss/>
                    <div className="hovername">
                      Tailwind
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="skills">
              <div className="pro">
                <span className="head">Databases</span><br/>
                <span className="body">Databases that I have practiced and have hands-on experience with</span>
                <div className="icons">
                  <div className="icon"><SiMongodb/>
                    <div className="hovername">
                      MongoDB
                    </div>
                  </div>
                  <div className="icon"><SiMysql/>
                    <div className="hovername">
                      MySQL
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Skillmain