import React from 'react';
import './Newsletter.css'; // Import the CSS file for styling if needed


const Newsletter = ({ newsletter }) => {
  // Define the newsletter object
  const newsletterData = {
    id: 1,
    title: "Newsletter 1",
    imageUrl: "/newsletterFeb24.png",
    date: "02-24-2024",
    content: "Content of Newsletter 1", // Default content
    // websiteUrl: "https://example.com", // URL of the destination website
  };

  // Destructure properties from the newsletter object
  const { title, imageUrl, content, date, websiteUrl } = newsletter || newsletterData;
  
  return (
    <div className="newsletter">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <div className="image-container">
        {/* Wrap the picture icon in an anchor tag with the href set to the website URL */}
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
       
        </a>
        {/* Render the newsletter image */}
        <img src={imageUrl} alt="Newsletter" />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Newsletter;
