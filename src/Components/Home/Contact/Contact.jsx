import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <p>
        {" "}
        I am open to job opportunities, projects, collaborations or even a
        friendly hello!
      </p>
      <form>
        <div className="row">
          <input type="text" placeholder="FirstName" required />
          <input type="text" placeholder="LastName" required />
        </div>
        <div className="row">
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="PhoneNumber" required />
        </div>
        <div className="row">
        <textarea placeholder="Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
