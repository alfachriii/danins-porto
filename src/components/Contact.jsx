import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const email = "novitadanis18@gmail.com";
  const subject = "Judul Email";
  const body = "Halo, saya ingin meng-hire anda.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <>
      <div className="container">
        <div id="contact">
          <p>
            <center>Get In Touch</center>
          </p>
          <h1>Contact Me</h1>
          <div className="box-contact">
            <span>
              <MdEmail />
            </span>
            <a href={mailtoLink} target="_blank">
              {email}
            </a>
          </div>
        </div>
      </div>
      <div class="containter">
        <footer>
          <p>Copyright &#169; 2024 alfachri. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
