import React from "react";
import "./about.css";
import { FaRegEnvelope } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="about-head">
        <h1>About Me</h1>
      </div>
      <div className="about-text">
        <p>
          Hey, I’m Val — a frontend developer and creative thinker with a
          growing passion for building elegant, user-centered digital
          experiences. Currently pursuing a Software Engineering program, I
          specialize in crafting responsive, accessible, and engaging interfaces
          using tools like React, JavaScript, HTML, CSS, and UI/UX design
          principles. I focus on more than just how things look... I care about
          how they feel, how they function, and how they impact the user. While
          I’ve gained exposure to backend technologies like Python, SQL, and
          Java, my strength lies in the frontend — where creativity meets
          functionality and design becomes interaction. What sets me apart? I
          don’t just code, I build with intention. Every bug I debug, every
          component I refine, every user journey I map out is part of a bigger
          story: one of growth, resilience, and purpose. I’m not just learning
          to be a developer, I’m becoming one who leads with empathy, executes
          with clarity, and brings value to every project I touch. Let’s
          connect, collaborate, or create something unforgettable together.
        </p>
      </div>

      <div className= "about-grid">
        <div className= "about-link">
          <div className= "icon"><CgProfile/></div>
          <h3>Full Name</h3>
          <p>Oguzie.S.Valerie</p>
        </div>

        <div className= "about-link">
        <div className= "icon"><FaRegEnvelope /></div>
          <h3>Email Address</h3>
          <p className="mail"><a href="mailto:oguziesochimazuru@gmail.com">oguziesochimazuru@gmail.com</a></p>
        </div>

        <div className= "about-link">
        <div className= "icon"><FaPhone /></div>
          <h3>Phone</h3>
          <p className="mail"><a href="tel:+234 9160 222 482">+234 9160 222 482</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
