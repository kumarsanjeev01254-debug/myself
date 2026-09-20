import React from 'react'
import "./home.css"
import dark from "../../assets/darkweb.webp"
import { TypeAnimation } from "react-type-animation"

function Home() {
  return (
    <div id="home">

      <div className="lefthome">
        <div className="homedetails">

          <div className="line1">I'M</div>
          <div className="line2">SANJEEV KUMAR</div>

          <div className="line3">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                2000,
                "SOFTWARE DEVELOPER",
                2000,
                "FULL STACK DEVELOPER",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <button>HIRE ME</button> 
        </div>
      </div>

      <div className="righthome">
        <img src={dark} alt="dark web" />
      </div>

    </div>
  )
}

export default Home