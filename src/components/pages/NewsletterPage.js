import React, { useState } from 'react';
import Newsletter from './Newsletters'; // Adjust the path based on your directory structure
import AddNewsletterForm from './AddNewsletterForm'; // Import the AddNewsletterForm component

const NewsletterPage = () => {
  const [previousNewsletters, setPreviousNewsletters] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); // State to control the visibility of the add newsletter form

  const handleAddNewsletterClick = () => {
    setShowAddForm(true);
  };

  const handleAddNewsletter = (newsletterData) => {
    // For static data, you may not need to add new newsletters
    // Instead, you can update the state to display the added newsletter
    setPreviousNewsletters(prev => [...prev, newsletterData]);
    setShowAddForm(false); // Close the form after adding newsletter
  };
  const sampleNewsletters = [
    {
      id: 1,
      title: "Newsletter 1",
      imageUrl: "/newsletterFeb24", // Replace with the actual URL of your image
      content: "Content of newsletter 1",
      date: "2024-02-01",
    },
    {
      id: 2,
      title: "newsletterFeb17",
      imageUrl: "/newsletter2.jpg", // Replace with the actual URL of your image
      content: "Content of newsletter 2",
      date: "2024-02-08",
    },
    // Add more newsletters as needed
  ];
  

  return (
    <div>
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
