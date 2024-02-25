import React from "react";
import "./Home.css";
import MeetTheTeacher from "../images/MeetTheTeacher.jpg";
import FirstDay from "../images/FirstDay.jpg"

const Home = () => {
  return (
    <div className="home-background">
      <div className="content">
        <h2>Current Events</h2>
        <ul>
          <li>
            <div className="event-info">
              <img
                src={MeetTheTeacher}
                alt="Meet the Teacher Night"
                className="event-image"
              />
              <div className="event-details">
                <h3>Meet the Teacher Night</h3>
                <p>Date: August 2nd, 2024</p>
                <p>Time: 2:00 PM - 4:00 PM</p>
              </div>
            </div>
          </li>
          <li>
            <div className="event-info">
              <img
                src={FirstDay}
                alt="First Day of School"
                className="event-image"
              />
              <div className="event-details">
                <h3>First Day of School</h3>
                <p>Date: August 5, 2024</p>
                              </div>
            </div>
          </li>
          <li>Open House</li>
          {/* Add more events as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
