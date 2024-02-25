import React, { useState } from 'react';
import Newsletter from './Newsletter'; // Adjust the import path based on your directory structure
import AddNewsletterForm from './AddNewsletterForm'; // Import the AddNewsletterForm component
import './Newsletter.css'; // Import the CSS file for styling if needed
import newslettersData from '../pages/newsletterData'; // Import newslettersData instead of newsletterData

const NewsletterPage = () => {
  const [previousNewsletters, setPreviousNewsletters] = useState(newslettersData); // Use newslettersData instead of newsletterData
  const [showAddForm, setShowAddForm] = useState(false); // State to control the visibility of the add newsletter form

  const handleAddNewsletterClick = () => {
    setShowAddForm(true);
  };

  const handleAddNewsletter = (newsletterData) => {
    // Ensure unique IDs for new newsletters
    newsletterData.id = Date.now(); // Example: Using timestamp as ID
    setPreviousNewsletters(prev => [...prev, newsletterData]);
    setShowAddForm(false); // Close the form after adding newsletter
  };

  return (
    <div className="newsletter-page">
      <h1>Previous Newsletters</h1>
      {previousNewsletters.map(newsletter => (
        <Newsletter key={newsletter.id} newsletter={newsletter} />
      ))}

      {/* Button to add newsletters */}
      <button onClick={handleAddNewsletterClick}>Add Newsletter</button>

      {/* Add Newsletter Form or Modal */}
      {showAddForm && <AddNewsletterForm onAddNewsletter={handleAddNewsletter} onClose={() => setShowAddForm(false)} />}
    </div>
  );
};

export default NewsletterPage;
