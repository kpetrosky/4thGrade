import React from 'react';
import './Newsletter.css'; // Import your CSS file where you define styles

const Newsletter = ({ newsletter }) => {
  // Define the newsletter object
  const newsletterData = {
    id: 1,
    title: "Newsletter 1",
    imageUrl: "/newsletterFeb24.png",
    date: "02-24-2024",
    content: "Content of Newsletter 1", // Default content
  };

  // Destructure properties from the newsletter object
  const { title, imageUrl, content, date } = newsletter || newsletterData;
  
  return (
    <div className="newsletter">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <div className="image-container">
        <img src={imageUrl} alt="Newsletter" /> {/* Render the newsletter image */}
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Newsletter;
