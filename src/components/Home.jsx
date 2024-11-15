import React from "react";
import pict1 from "../assets/pict-1.jpeg"
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "../App.css";

const Home = () => {
  const fileId = "1P4ZJ9kDjLDp7QWm48XhE9UCEkEyuBDDr"

  // const downloadCV = () => {
    const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
    const fileName = "CV DANINS 2024.pdf"

    // const link = document.createElement('a');
    // link.href = fileUrl;
    // link.download = fileName;
    // link.click();
  // }
  return (
    <div className="container">
      <div id="home">
        <div className="img">
          <img src={pict1} alt="" />
        </div>
        <div className="text">
          <div className="text-con">
            <p>Hello I'm</p>
            <h1>Dani Novita Sari</h1>
            <h2>Teacher</h2>
            <div className="btns">
              <a className="btn-cv" href={fileUrl} download={fileName}>Download CV</a>
              <a
                className="btn-con"
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=6281295269934&text&type=phone_number&app_absent=0"
              >
                Contact Info
              </a>
            </div>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/dani-novita-sari-a08504225/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/novitadans?igsh=NTc4MTIwNjQ2YQ==" target="_blank"><FaInstagramSquare /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
