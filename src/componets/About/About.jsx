
import React from "react";
import "./about.css";
import Card from "../Card/Card";
import full from "../../assets/Full stack.png";
import web from "../../assets/web-development.jpg";
import app from "../../assets/app developer.jpg";

function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circule-line">
          <div className="circle"></div>
          <div className="line"></div>

          <div className="circle"></div>
          <div className="line"></div>

          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : SANJEEV KUMAR
              </li>
              <li>
                <span>AGE</span> : 29
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : ENGLISH, HINDI, PUNJABI
              </li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B.COM
              </li>
              <li>
                <span>UNIVERSITY</span> : KURUKSHETRA UNIVERSITY
              </li>
              <li>
                <span>MARKS</span> : 63%
              </li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>FULL STACK</li>
              <li>WEB DEVELOPER</li>
              <li>APP DEVELOPER</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title="FULL STACK DEVELOPER" image={full} />
        <Card title="WEB DEVELOPER" image={web} />
        <Card title="APP DEVELOPER" image={app} />
      </div>
    </div>
  );
}

export default About;

