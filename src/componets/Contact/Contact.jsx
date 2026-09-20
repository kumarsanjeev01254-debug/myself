
import React from "react";
import con from "../../assets/contact.png";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={con} alt="Contact" />
      </div>

      <div className="rightcontact">
        <form action="#">
          <input
            name="username"
            type="text"
            placeholder="Name"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            id="textarea"
            placeholder="Message me"
            required
          ></textarea>

          <input
            type="submit"
            id="btn"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;

