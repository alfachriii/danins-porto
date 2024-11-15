import React from "react";
import pict2 from "../assets/pict-2.jpg";
import { BsTrophyFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

const About = () => {
  return (
    <div className="container">
      <div id="about">
        <p>Get To Know More</p>
        <h1>About Me</h1>
        <div className="con-about">
          <div className="img">
            <img src={pict2} alt="" />
          </div>
          <div className="con-box">
            <div className="box-expe">
              <i>
                <BsTrophyFill />
              </i>
              <h2>Experience</h2>
              <p>
                <center>Patria Wisata High School</center>
              </p>
            </div>
            <div className="box-edu">
              <i>
                <FaUserFriends />
              </i>
              <h2>Education</h2>
              <p>Indra Prasta University</p>
            </div>
            <div style={{ padding: "0 20px" }}>
              <p>
                Allow me to make an introduction to who I am. My full name is
                Dani Novita Sari. People usually call me Danins. I'm the first
                child in my family. I was born in Kudus, on January 18th, 1994.
                Currently, I live in South Jakarta.
                really like traveling,
                watching movies or hanging out in new and exciting places.
                Besides that, I am also interested in Administration. Currently,
                I have a portfolio of professional administration for social
                media, PowerPoint, and so on. I think that's all from me. Nice
                to meet you. Thank you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
