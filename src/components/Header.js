import React from "react";
import "./Header.css"; // Import your CSS file
import sun from "../components/images/sun.png"; // Corrected path to the logo image
import anchor from "../components/images/anchor.jpg"; // Path to the other image

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={sun} alt="sun" />
      </div>
      <div className="home-background">
        <h1>Welcome to Kindergarten with Mrs. Petrosky</h1>
      </div>
      <div className="other-image">
        <img src={anchor} alt="anchor" style={{ width: "300px", height: "300px" }} />
      </div>
    </header>
  );
}

export default Header;
