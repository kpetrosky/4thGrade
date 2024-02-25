import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./NavBar.css"; // Use the correct file name with a capital 'N'
import ship from "../components/images/ship.jpg"; // Path to the image
import steeringThing from "../components/images/steeringThing.jpg";
import anchor2 from '../components/images/anchor2.jpg'
import lifeSaver from '../components/images/lifeSaver.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
        <img src={lifeSaver} alt="lifeSaver" style={{ width: "70px", height: "70px" }} />
          <Link to="/">Home</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className="navbar-item">
          <img src={anchor2} alt="anchor2" style={{ width: "70px", height: "70px" }} />
          <Link to="/about">About</Link> {/* Use Link instead of anchor tag */}
        </li>

        <li className="navbar-item">
          <img src={steeringThing} alt="steeringThing" style={{ width: "70px", height: "70px" }} /> {/* Use correct image source */}
          <Link to="/Newsletters">Newsletters</Link> {/* Use Link instead of anchor tag */}
        </li>
        <li className="navbar-item">
          <img src={ship} alt="Learning Apps" style={{ width: "70px", height: "70px" }} /> {/* Use correct image source */}
          <Link to="/LearningApps">Learning Apps</Link> {/* Use Link instead of anchor tag */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

