import React, { useState } from 'react';

const AddNewsletterForm = ({ onAddNewsletter, onClose, setCurrentNewsletter, setPreviousNewsletters }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create a new newsletter object with input values
    const newNewsletter = {
      title,
      content,
      date
    };

    // Call the onAddNewsletter function passed as prop to submit the new newsletter
    onAddNewsletter(newNewsletter);

    // Clear the form fields
    setTitle('');
    setContent('');
    setDate('');

    // Close the form
    onClose();
  };
  
  return (
    <div>
      <h2>Add Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <button type="submit">Add Newsletter</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNewsletterForm;
