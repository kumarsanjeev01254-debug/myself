import React, { useEffect, useRef } from 'react'
import Card from "../Card/Card"
import "./Project.css"

import virtaul from "../../assets/virtual.jpg"
import ai from "../../assets/AI POWER.jpg"
import aichat from "../../assets/ai chatbox.jpg"
import aiimage from "../../assets/ai text.jpg"
import airemover from "../../assets/ai remover.jpg"
import imagesearch from "../../assets/image search.jpg"

function Project() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (slider) {
        if (
          slider.scrollLeft + slider.clientWidth >= slider.scrollWidth
        ) {
          slider.scrollLeft = 0; // reset when end reached
        } else {
          slider.scrollLeft += 1; // speed control
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="projects">
      <h1 id="para">+2 YEARS EXSPERIENCE IN PROJECTS</h1>

      {/* 👇 ADD ref HERE */}
      <div className="slider" ref={sliderRef}>
        <Card title="VIRTUAL ASSISTANT" image={virtaul} />
        <Card title="AI POWERED FITNESS WEBSITE" image={ai} />
        <Card title="AI CHAT BOX" image={aichat} />
        <Card title="AI TEXT TO IMAGE" image={aiimage} />
        <Card title="AI BACKGROUND REMOVER" image={airemover} />
        <Card title="IMAGE SEARCH ENGINE" image={imagesearch} />
      </div>
    </div>
  )
}

export default Project