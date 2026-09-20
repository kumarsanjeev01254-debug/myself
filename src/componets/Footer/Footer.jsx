
import React from "react";
import circle from "../../assets/circule.webp";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="leftfooter">

        <div className="footerlogo">
          <img src={circle} alt="Logo" />
        </div>

        <div className="at">
          <h3>About</h3>
          <p>Mission</p>
          <p>Team</p>
          <p>Client</p>
        </div>

        <div className="sup">
          <h3>Support</h3>
          <p>Contact</p>
          <p>Refund Policy</p>
          <p>FAQ's</p>
        </div>

        <div className="soc">
          <h3>Social</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

      </div>

      <div className="footerline"></div>

      <div className="copyright">
        <p>© 2026 Sanjeev Kumar. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

