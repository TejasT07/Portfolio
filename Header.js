import React from 'react';
import './Header.css';
import "./images/Screenshot_20220202_175956 (2).jpg"


function Header({ setActiveSection, activeSection }) {
  return (
    <div className="section-container">
      <div className="image-container">
        <image src="path/to/your/image.jpg" alt="Description of the image" />
      </div>
      <div className="info-container">
        <h4>Hello</h4>
        <h1> I'm </h1>
        <h1 style={{ color: "red" }}>TEJAS TULAJANAVAR</h1>
        <h3>  FULL STACK DEVELOPER</h3>
        <p>
          "Full Stack Developer: Proficient in both front-end and back-end technologies,
          creating end-to-end solutions for web applications with diverse coding skills."
        </p>

      </div>
    </div>

  );
}

export default Header;




